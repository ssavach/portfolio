import { ImageResponse } from "next/og";

export const alt =
  "Savach — estudiante, curioso, obsesionado con entender qué hay debajo";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function loadGoogleFont(
  family: string,
  weight: number,
): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`;
  const cssResponse = await fetch(cssUrl, {
    headers: {
      // IE 6 User-Agent forces Google Fonts to return TTF.
      // satori (used by @vercel/og) does NOT support WOFF2 — only TTF/OTF/WOFF.
      "User-Agent": "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)",
    },
  });
  const css = await cssResponse.text();
  // With IE 6 UA, Google Fonts returns TTF via the legacy /l/font endpoint,
  // which omits the format() declaration entirely. Just grab the first url().
  const match = css.match(/src:\s*url\((.+?)\)/);
  if (!match) {
    throw new Error(
      `Could not find ${family} ${weight} font URL. CSS: ${css.slice(0, 300)}`,
    );
  }
  const fontResponse = await fetch(match[1]);
  if (!fontResponse.ok) {
    throw new Error(
      `Failed to fetch ${family} ${weight} font file: ${fontResponse.status}`,
    );
  }
  return await fontResponse.arrayBuffer();
}

export default async function Image() {
  const [interRegular, interBold] = await Promise.all([
    loadGoogleFont("Inter", 400),
    loadGoogleFont("Inter", 800),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px",
          backgroundColor: "#0f0011",
          backgroundImage:
            "radial-gradient(ellipse at 15% 20%, #782a81 0%, transparent 55%), radial-gradient(ellipse at 85% 85%, #b06fb7 0%, transparent 55%)",
          fontFamily: "Inter",
        }}
      >
        {/* Top signature mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: "28px",
            color: "#c8b3ca",
            marginBottom: "50px",
            fontWeight: 400,
          }}
        >
          <div
            style={{
              width: "48px",
              height: "3px",
              backgroundColor: "#b06fb7",
              display: "flex",
            }}
          />
          <div style={{ display: "flex" }}>ssavach.me</div>
        </div>

        {/* Main title: Savach. */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: "220px",
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            marginBottom: "50px",
          }}
        >
          <div style={{ color: "#fbe1fe", display: "flex" }}>Savach</div>
          <div style={{ color: "#b06fb7", display: "flex" }}>.</div>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "44px",
            color: "#c8b3ca",
            lineHeight: 1.3,
            maxWidth: "1000px",
            fontWeight: 400,
          }}
        >
          <div style={{ display: "flex" }}>
            Un estudiante. Curioso crónico.
          </div>
          <div style={{ display: "flex" }}>
            Obsesionado con entender qué hay debajo.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Inter",
          data: interBold,
          style: "normal",
          weight: 800,
        },
      ],
    },
  );
}
