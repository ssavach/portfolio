import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const studying = [
  { topic: "Design patterns", detail: "GoF en TypeScript" },
  { topic: "Arquitectura hexagonal", detail: "puertos y adaptadores" },
  { topic: "Next.js RSC", detail: "server components a fondo" },
  { topic: "HTTP", detail: "a bajo nivel — qué pasa después del fetch" },
  { topic: "Docker", detail: "contenedores desde cero" },
];

const principles = [
  {
    title: "Fundamentos primero",
    detail:
      "Antes que los frameworks. HTML, CSS, JS, HTTP — en ese orden. Todo lo demás se construye encima.",
  },
  {
    title: "Conceptos antes que código",
    detail:
      "La sintaxis se olvida. Los conceptos se quedan. Invierto tiempo en entender, no en memorizar.",
  },
  {
    title: "Entender, no copiar",
    detail:
      "Si no puedo explicarlo con mis palabras, no lo sé. La IA es una herramienta, no un reemplazo.",
  },
  {
    title: "Construir, no consumir",
    detail:
      "Hacer cosas es la mejor forma de aprender. Los proyectos enseñan lo que los tutoriales no.",
  },
];

const decisions = [
  {
    title: "¿Por qué Next.js 15 y no Astro?",
    detail:
      "Quería entender React Server Components a fondo, y hoy Next.js 15 es el mejor lugar para hacerlo. Astro es excelente para contenido estático y su modelo mental es más simple — pero justamente por eso no me obliga a pensar en el límite server/client como sí lo hace RSC. Para un estudiante que quiere entender qué hay debajo de las abstracciones modernas de React, Next.js 15 es la clase más profunda disponible.",
  },
  {
    title: "¿Por qué shadcn/ui y no MUI o Chakra?",
    detail:
      "Porque shadcn no es una librería — es un patrón. Cuando agregas un componente, el código queda en tu propio repo. Puedes leerlo, modificarlo, entenderlo línea por línea. MUI y Chakra son cajas negras: funcionan, pero no aprendes lo que hay dentro. Shadcn me obliga a leer Radix, entender accesibilidad, pensar en variants. Es educativo por diseño — y para alguien que quiere aprender, no hay competencia.",
  },
  {
    title: "¿Por qué CSS animations puras y no framer-motion?",
    detail:
      "Porque los fundamentos importan, y el bundle también. Framer-motion es poderoso, pero los @keyframes de CSS corren en la GPU, son más livianos, y forzarme a escribirlos me obliga a entender animaciones web de verdad. Las morphing blobs del fondo, el text-gradient animado, el rotator del hero, los signos flotantes de la card misteriosa — todo es CSS puro. Sé que framer existe y cuándo lo necesitaría. Hoy no lo necesito.",
  },
  {
    title: '¿Por qué una card "???" y no tres proyectos inventados?',
    detail:
      'Porque inflar es mentir, y la honestidad es el diferenciador. Un portfolio con cinco proyectos a medio hacer grita "quería parecer más experimentado". Preferí mostrar UNO real y una card que admite, literalmente, que el próximo todavía no existe. Ese "todavía no" es información útil — dice que hay camino por delante y que no vengo con humo. El camino se construye, no se performa.',
  },
];

export default function Home() {
  return (
    <main className="relative mx-auto max-w-2xl px-6 py-20 md:py-28">
      {/* Minimal signature mark */}
      <div className="mb-20 flex items-center gap-3 text-xs font-medium animate-fade-in">
        <span className="h-px w-8 bg-accent" />
        <span className="text-foreground">Savach</span>
        <span className="text-muted-foreground/40">·</span>
        <span className="text-muted-foreground/70">2026</span>
      </div>

      {/* ============ HERO ============ */}
      <section className="mb-32 animate-fade-up">
        <h1 className="mb-10 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          Soy <span className="text-gradient">Savach</span>.
        </h1>

        <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
          Un <span className="text-foreground">estudiante</span>. Curioso
          crónico. Obsesionado con entender{" "}
          <span className="text-foreground">qué hay debajo</span> — no qué
          librería usar.
        </p>
      </section>

      {/* ============ EN QUÉ ANDO ============ */}
      <section className="mb-32">
        <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl animate-fade-up">
          En qué ando<span className="text-accent">.</span>
        </h2>
        <p className="mb-10 text-muted-foreground animate-fade-up delay-100">
          Lo que ocupa mi cabeza ahora mismo.
        </p>

        <ul className="space-y-0">
          {studying.map((s, i) => (
            <li
              key={s.topic}
              className="group animate-fade-up"
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              <div className="flex items-baseline gap-5 border-b border-border/40 py-5 transition-colors group-hover:border-accent/40">
                <span className="w-6 shrink-0 text-sm font-mono text-accent/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                    {s.topic}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {s.detail}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm italic text-muted-foreground animate-fade-up">
          La lista es un snapshot, no un currículum. Cambia seguido.
        </p>
      </section>

      {/* ============ CÓMO PIENSO ============ */}
      <section className="mb-32">
        <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
          Cómo pienso<span className="text-accent">.</span>
        </h2>
        <p className="mb-12 text-muted-foreground">
          Cuatro cosas que guían lo que construyo.
        </p>

        <div className="space-y-10">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className="group flex items-baseline gap-5 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="w-6 shrink-0 text-sm font-mono text-accent/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {p.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ HACIA DÓNDE VOY ============ */}
      <section className="mb-32">
        <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
          Hacia dónde voy<span className="text-accent">.</span>
        </h2>
        <p className="mb-10 text-muted-foreground">
          No vine a conseguir un trabajo rápido. Vine a construir carrera.
        </p>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
          <p>
            Quiero crecer dentro de un equipo donde pueda aprender de{" "}
            <span className="text-foreground">gente con más experiencia</span>
            {" "}— especialmente en el mundo del{" "}
            <span className="text-gradient font-semibold">hosting</span>,
            porque es donde todo lo que aprendí del lado cliente finalmente
            se encuentra con la realidad: servidores, procesos, red,
            latencia.
          </p>
          <p>
            Eso todavía es terreno donde{" "}
            <span className="text-foreground">
              tengo mucho por recorrer
            </span>
            . Y justamente por eso estoy acá.
          </p>
        </div>
      </section>

      {/* ============ LO QUE CONSTRUÍ ============ */}
      <section className="mb-32">
        <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
          Lo que construí<span className="text-accent">.</span>
        </h2>
        <p className="mb-10 text-muted-foreground">
          El principio del camino. Honesto: solo lo que hay.
        </p>

        <div className="space-y-5">
          {/* This portfolio */}
          <Card className="gradient-border group relative overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/20">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative p-7">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-accent">
                  <span className="h-1.5 w-1.5 animate-breathe rounded-full bg-accent" />
                  en vivo
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Este portfolio</h3>
              <p className="mb-5 leading-relaxed text-muted-foreground">
                El primer proyecto público. Next.js 15, TypeScript y
                shadcn/ui. Construido con intención, no con prisa.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span>Next.js</span>
                <span className="text-accent/60">·</span>
                <span>TypeScript</span>
                <span className="text-accent/60">·</span>
                <span>shadcn/ui</span>
                <span className="text-accent/60">·</span>
                <span>Tailwind</span>
              </div>
            </div>
          </Card>

          {/* Mystery */}
          <Card className="mystery-card relative overflow-hidden rounded-2xl border-2 border-dashed border-accent/30 bg-card/50 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/30">
            {/* Floating ?s */}
            <div className="pointer-events-none absolute inset-0 select-none">
              <span className="q-mark absolute left-3 top-1 text-6xl font-bold text-accent/30 animate-float">?</span>
              <span className="q-mark absolute right-4 bottom-3 text-5xl font-bold text-primary/30 animate-float-slow delay-300">?</span>
              <span className="q-mark absolute left-1/2 top-1/3 text-8xl font-bold text-accent/15 animate-pulse-glow delay-500">?</span>
              <span className="q-mark absolute right-8 top-4 text-3xl font-bold text-primary/40 animate-wiggle delay-700">?</span>
              <span className="q-mark absolute bottom-1/4 left-10 text-4xl font-bold text-accent/25 animate-float-fast">?</span>
              <span className="q-mark absolute right-1/3 bottom-6 text-2xl font-bold text-accent/35 animate-float delay-1000">?</span>
            </div>

            <div className="relative z-10 p-7">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-accent">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  próximamente
                </div>
                <Sparkles className="h-5 w-5 animate-pulse-glow text-accent" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-gradient">???</h3>
              <p className="mb-5 leading-relaxed text-muted-foreground">
                El próximo proyecto todavía no existe.{" "}
                <span className="text-foreground">
                  Esa es la parte más interesante.
                </span>
              </p>
              <p className="text-xs text-accent/80">Ansioso por construir.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* ============ DECISIONES ============ */}
      <section className="mb-32">
        <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
          Decisiones<span className="text-accent">.</span>
        </h2>
        <p className="mb-12 text-muted-foreground">
          Por qué este stack y no otro. Cuatro elecciones y sus razones.
        </p>

        <div className="space-y-10">
          {decisions.map((d, i) => (
            <div
              key={d.title}
              className="group flex items-baseline gap-5 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="w-6 shrink-0 text-sm font-mono text-accent/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                  {d.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {d.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ DÓNDE ENCONTRARME ============ */}
      <section className="mb-24">
        <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
          Dónde encontrarme<span className="text-accent">.</span>
        </h2>
        <p className="mb-10 max-w-lg text-muted-foreground">
          Savach vive online. Mantengo separada mi identidad pública de
          mis datos privados por principio.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link
              href="https://github.com/ssavach"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group border-accent/40 hover:border-accent hover:bg-accent/10"
          >
            <Link href="#">
              <MessageCircle className="h-4 w-4" />
              Discord
            </Link>
          </Button>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-border/40 pt-10">
        <div className="flex flex-col items-start gap-1">
          <p className="text-sm text-foreground">
            Built with{" "}
            <span className="inline-block animate-breathe align-middle">
              💗
            </span>{" "}
            in the lab.
          </p>
          <p className="text-xs text-muted-foreground">
            Savach · coordenadas reservadas
          </p>
        </div>
      </footer>
    </main>
  );
}
