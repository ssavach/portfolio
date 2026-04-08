import { ImageResponse } from "next/og";

export const alt =
  "Savach — estudiante, curioso, obsesionado con entender qué hay debajo";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Fetching Inter directly from @fontsource via jsdelivr as WOFF 1.1.
// Why not Google Fonts: with a modern UA it returns WOFF2 (satori can't parse),
// with an IE 6 UA it returns EOT (Embedded OpenType, also unsupported by satori).
// @fontsource publishes per-weight WOFF files — the simplest working path.
const INTER_REGULAR_URL =
  "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/files/inter-latin-400-normal.woff";
const INTER_BOLD_URL =
  "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/files/inter-latin-800-normal.woff";

async function loadFont(url: string): Promise<ArrayBuffer> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch font ${url}: ${response.status}`);
  }
  return await response.arrayBuffer();
}

export default async function Image() {
  const [interRegular, interBold] = await Promise.all([
    loadFont(INTER_REGULAR_URL),
    loadFont(INTER_BOLD_URL),
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
