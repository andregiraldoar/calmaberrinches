import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroMomChild from "@/assets/calma-hero-mom-child.png.asset.json";
import guiaPortada from "@/assets/ref/guia-portada.jpg";
import guiaProtocolo from "@/assets/ref/guia-protocolo.jpg";
import bonoTarjeta from "@/assets/ref/bono-tarjeta.jpg";
import bonoRueda from "@/assets/ref/bono-rueda.png";
import bonoTermometro from "@/assets/ref/bono-termometro.png";
import bonoDiario from "@/assets/ref/bono-diario.jpg";
import bonoCuadernillo from "@/assets/ref/bono-cuadernillo.jpg";
import bonoCalendario from "@/assets/ref/bono-calendario.jpg";
import bonoContrato from "@/assets/ref/bono-contrato.jpg";
import { trackInitiateCheckout } from "@/lib/tracking";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CALMA — Protocolo para berrinches sin gritos ni culpa" },
      {
        name: "description",
        content:
          "Guía CALMA: protocolo de 5 pasos con frases exactas + 7 herramientas para padres de niños de 2 a 6 años. $9.99 USD, acceso inmediato.",
      },
      { property: "og:title", content: "CALMA — Protocolo para berrinches sin gritos ni culpa" },
      {
        property: "og:description",
        content:
          "Protocolo de 5 pasos con frases exactas, listo para aplicar hoy. Creado por la Psicóloga Andrea Giraldo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const CHECKOUT = "https://pay.hotmart.com/Y107364819V";

function Cta({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={CHECKOUT}
      onClick={trackInitiateCheckout}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-coral px-8 py-4 text-base font-extrabold tracking-wide text-coral-foreground shadow-[0_16px_32px_-18px_oklch(0.7_0.1_27)] transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </a>
  );
}

function Eyebrow({ children, tone = "sky" }: { children: React.ReactNode; tone?: string }) {
  const tones: Record<string, string> = {
    sky: "bg-sky text-sky-foreground",
    mint: "bg-mint text-mint-foreground",
    butter: "bg-butter text-butter-foreground",
    lavender: "bg-lavender text-lavender-foreground",
    coral: "bg-coral text-coral-foreground",
  };
  return (
    <span
      className={`inline-block rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function Countdown() {
  const [left, setLeft] = useState(6 * 3600);
  useEffect(() => {
    const t = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  const parts = [
    { v: pad(Math.floor(left / 3600)), l: "Horas" },
    { v: pad(Math.floor((left % 3600) / 60)), l: "Min" },
    { v: pad(left % 60), l: "Seg" },
  ];
  return (
    <div className="flex items-end justify-center gap-3">
      {parts.map((p, i) => (
        <div key={p.l} className="flex items-end gap-3">
          <div className="rounded-2xl bg-cream px-4 py-3 text-center">
            <div className="font-display text-3xl font-extrabold text-primary">{p.v}</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              {p.l}
            </div>
          </div>
          {i < 2 && <span className="pb-4 text-2xl font-bold text-muted-foreground">:</span>}
        </div>
      ))}
    </div>
  );
}

const problems = [
  {
    icon: "😩",
    t: "Ya intentaste de todo",
    d: "Respirar, contar hasta diez, validar cada emoción — y aun así, en el momento exacto de la crisis, no sabes qué decir.",
    tone: "bg-butter",
  },
  {
    icon: "😳",
    t: "Las miradas en público",
    d: 'El berrinche en el supermercado, con todos mirando, y la sensación de tener que "resolverlo ya".',
    tone: "bg-sky",
  },
  {
    icon: "💭",
    t: "La culpa después",
    d: "Gritaste más fuerte de lo que querías, y después te preguntas si estás haciendo un buen trabajo como padre o madre.",
    tone: "bg-lavender",
  },
];

const benefits = [
  ["Saber exactamente qué decir en el momento exacto de la crisis", "Sin improvisar, sin quedarte en blanco frente al berrinche."],
  ["Sostener límites sin gritar ni ceder", "Con firmeza y calma, incluso en público."],
  ["Reducir la culpa después de un mal momento", "Con un método concreto para reparar y seguir adelante."],
  ["Entender por qué a ti también te cuesta", "Sin juicios — con explicación real de tus propias reacciones."],
  ["Ver resultados desde el primer berrinche que apliques el protocolo", "No necesitas semanas de teoría — es aplicable de inmediato."],
];

const steps = [
  { l: "C", t: "Contener", d: "Tu propia calma, primero.", tone: "bg-sky text-sky-foreground" },
  { l: "A", t: "Acompañar", d: "Sin gritar, sin irte.", tone: "bg-coral text-coral-foreground" },
  { l: "L", t: "Limitar", d: "Con firmeza, sin ceder.", tone: "bg-butter text-butter-foreground" },
  { l: "M", t: "Mostrar comprensión", d: "Valida la emoción.", tone: "bg-mint text-mint-foreground" },
  { l: "A", t: "Acordar", d: "Ya calmado, hablas.", tone: "bg-lavender text-lavender-foreground" },
];

const before = [
  '😫 Gritos y caos cada vez que dice "no"',
  "😔 Culpa después de perder la paciencia",
  "😰 Miedo a los berrinches en público",
  "🤷 No saber qué decir en el momento exacto",
];
const after = [
  "🧘 Sabes exactamente qué decir y hacer",
  "💚 Sostienes límites sin gritar ni ceder",
  "🙌 Confianza real en cualquier lugar",
  "🤝 Más conexión con tu hijo/a, no menos",
];

const guideBullets = [
  "Por qué esto también te cuesta a ti (y qué hacer al respecto)",
  "Los 3 tipos de berrinches y cómo identificarlos",
  "Diferencias según la edad (2-3 años y 4-6 años)",
  "Cómo reparar después de un mal momento",
  "Plan de implementación de 4 semanas",
  "Señales de cuándo buscar ayuda profesional",
];

const bonuses: { t: string; d: string; tone: string; img: string }[] = [
  {
    t: "Tarjeta Rápida CALMA",
    d: "Resumen imprimible para tener a la mano en el momento exacto.",
    tone: "bg-sky",
    img: bonoTarjeta,
  },
  {
    t: "Rueda de Emociones",
    d: "Herramienta visual para que tu hijo/a identifique lo que siente.",
    tone: "bg-butter",
    img: bonoRueda,
  },
  {
    t: "Termómetro de la Calma",
    d: "Para que tu hijo/a aprenda a regularse y calmarse por sí mismo/a.",
    tone: "bg-coral",
    img: bonoTermometro,
  },
  {
    t: "Diario de 30 Días",
    d: "Registro rellenable para descubrir los patrones reales de tu hijo/a.",
    tone: "bg-mint",
    img: bonoDiario,
  },
  {
    t: "Cuadernillo ¿Está Bien o Está Mal?",
    d: "12 páginas rellenables para que tu hijo/a reconozca comportamientos.",
    tone: "bg-lavender",
    img: bonoCuadernillo,
  },
  {
    t: "Calendario de Logros",
    d: "Refuerzo positivo mensual, rellenable, para celebrar avances.",
    tone: "bg-sky",
    img: bonoCalendario,
  },
  {
    t: "Contrato Familiar de Límites",
    d: "Acuerdo rellenable entre padres e hijo/a sobre las reglas de casa.",
    tone: "bg-mint",
    img: bonoContrato,
  },
];

const extras: { t: string; d: string; icon: string; tone: string }[] = [
  {
    t: "Mini-guía: Rabietas al Dormir",
    d: "Qué hacer cuando el berrinche llega justo a la hora de acostarse.",
    icon: "🌙",
    tone: "bg-lavender",
  },
  {
    t: "Rutina Nocturna",
    d: "Plantilla rellenable para construir una rutina de sueño predecible y tranquila.",
    icon: "🛏️",
    tone: "bg-sky",
  },
  {
    t: "Plantilla de Seguimiento de Patrones",
    d: "Registro rellenable para detectar qué dispara los berrinches y anticiparte.",
    icon: "📊",
    tone: "bg-butter",
  },
];

const insideItems = [
  "Guía CALMA (producto principal)",
  "El Protocolo de 5 pasos",
  "Tarjeta Rápida CALMA",
  "Rueda de Emociones",
  "Termómetro de la Calma",
  "Diario de 30 Días (rellenable)",
  "Cuadernillo ¿Está Bien o Está Mal?",
  "Calendario de Logros (rellenable)",
  "Contrato Familiar (rellenable)",
  "Mini-guía Rabietas al Dormir",
  "Rutina Nocturna (rellenable)",
  "Seguimiento de Patrones (rellenable)",
];

const testimonials = [
  [
    "La tarjeta rápida la tengo pegada en el refrigerador. En el último berrinche en el súper, por primera vez supe exactamente qué decir.",
    "— Mariana T., mamá de una niña de 3 años",
  ],
  [
    "El capítulo sobre por qué a mí también me costaba fue el que más me marcó. No esperaba que hablara de mis propias reacciones.",
    "— Daniel R., papá de un niño de 5 años",
  ],
  [
    "La rueda de emociones cambió las conversaciones con mi hija. Ahora ella misma señala cómo se siente, sin que yo tenga que adivinar.",
    "— Camila V., mamá de una niña de 4 años",
  ],
];

const howItWorks = [
  ["Compras de forma segura", "Pago único a través de Hotmart, con tarjeta o los métodos disponibles en tu país."],
  ["Recibes todo en tu correo", "La guía + los 7 bonos llegan de inmediato como PDF, listos para abrir en tu celular o computador."],
  ["Aplicas el protocolo hoy mismo", "Sin esperas ni configuraciones — desde el primer berrinche, ya sabes qué hacer."],
];

const faqs: [string, string][] = [
  ["¿Funciona para cualquier edad?", "La guía está diseñada específicamente para niños de 2 a 6 años, con secciones diferenciadas según la etapa (2-3 años y 4-6 años)."],
  ["¿Necesito experiencia previa en crianza respetuosa?", "No. La guía explica todo desde cero, con lenguaje simple y frases listas para usar — no necesitas conocimientos previos."],
  ["¿En qué formato la recibo?", "Todo el material (guía + 7 bonos) llega en formato PDF, muchos de ellos rellenables directamente desde tu celular, tablet o computador, o para imprimir."],
  ["¿Es un pago único o una suscripción?", "Es un pago único de $9.99 USD. Acceso de por vida, sin cobros recurrentes."],
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Offer banner */}
      <div className="bg-coral text-coral-foreground">
        <div className="mx-auto max-w-6xl px-5 py-2 text-center text-sm font-bold tracking-wide">
          🎁 OFERTA LIMITADA — Acceso de por vida + 7 bonos exclusivos
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral text-coral-foreground">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.453 9 12.75 9 12.75s9-5.297 9-12.75z" />
              </svg>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-sm font-extrabold text-primary">
                CALMA
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Guía para padres
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#protocolo" className="transition-colors hover:text-foreground">
              El método
            </a>
            <a href="#que-recibes" className="transition-colors hover:text-foreground">
              Qué recibes
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-muted-foreground sm:inline">
              Antes <s>$13.99</s> · Hoy{" "}
              <strong className="text-foreground">$9.99 USD</strong>
            </span>
            <a
              href={CHECKOUT}
              onClick={trackInitiateCheckout}
              className="inline-flex items-center justify-center rounded-full bg-coral px-5 py-2.5 text-sm font-extrabold text-coral-foreground shadow-sm transition-all hover:bg-coral/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              Obtener guía
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-coral/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Eyebrow tone="mint">Guía profesional para padres de niños de 2 a 6 años</Eyebrow>
            <h1 className="mt-5 text-balance-tight font-display text-4xl font-extrabold leading-[1.08] text-primary sm:text-5xl lg:text-[3.4rem]">
              Cómo manejar los berrinches{" "}
              <span className="text-coral-foreground">sin gritos ni culpa</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Un protocolo concreto de 5 pasos para el momento exacto de la crisis — con frases
              exactas, listo para aplicar hoy. Para padres de niños de 2 a 6 años.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Cta>Quiero mi guía CALMA →</Cta>
              <a
                href="#protocolo"
                className="rounded-full border border-border bg-card px-6 py-4 text-sm font-bold text-primary"
              >
                Ver cómo funciona
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <span className="font-display text-4xl font-extrabold text-coral-foreground">
                27%
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                de descuento
              </span>
              <span className="rounded-full bg-cream px-4 py-1.5 font-display text-xl font-extrabold text-primary">
                $9.99 USD
              </span>
              <span className="text-sm text-muted-foreground">
                antes <s>$13.99</s>
              </span>
            </div>
            {/* Social proof */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-butter-foreground text-lg">★★★★★</span>
              <span className="text-sm font-bold text-muted-foreground">
                4,9/5 — +500 padres ya la descargaron
              </span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Psicóloga Andrea Giraldo · 13 páginas + 7 herramientas
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="text-coral-foreground">💳</span> Paga a plazos con tarjeta
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-mint-foreground">⚡</span> Acceso inmediato en tu correo
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-lavender-foreground">🔒</span> Compra 100% segura
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 rounded-[2.5rem] bg-sky/40 blur-2xl" />
            <img
              src={heroMomChild.url}
              alt="Madre e hijo leyendo juntos un libro, en calma"
              width={1536}
              height={1024}
              className="relative w-full rounded-[2rem] border border-border object-cover shadow-[0_40px_80px_-50px_oklch(0.5_0.06_250/0.6)]"
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow tone="butter">¿Te resulta familiar?</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
            El problema no es tu hijo. Es no saber qué hacer EN el momento.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {problems.map((p) => (
              <div key={p.t} className="soft-card p-7">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${p.tone}`}
                >
                  {p.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-primary">{p.t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5">
          <Eyebrow tone="mint">Beneficios</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-primary sm:text-4xl">
            Qué vas a lograr con este protocolo
          </h2>
          <ul className="mt-10 space-y-4">
            {benefits.map(([t, d]) => (
              <li key={t} className="soft-card flex gap-4 p-6">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint font-bold text-mint-foreground">
                  ✓
                </span>
                <div>
                  <p className="font-bold text-primary">{t}</p>
                  <p className="mt-1 text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Protocol */}
      <section id="protocolo" className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow tone="sky">El método</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-primary sm:text-4xl">
            El Protocolo CALMA
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            5 pasos, en orden, para aplicar exactamente durante la crisis — sin necesidad de
            recordar teoría.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <div key={s.t} className="soft-card p-6 text-center">
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full font-display text-2xl font-extrabold ${s.tone}`}
                >
                  {s.l}
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5">
          <Eyebrow tone="lavender">La diferencia real</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-primary sm:text-4xl">
            De la crisis a la calma
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-border bg-accent/60 p-7">
              <p className="text-sm font-extrabold uppercase tracking-widest text-accent-foreground">
                Antes
              </p>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                {before.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.75rem] border border-border bg-mint/60 p-7">
              <p className="text-sm font-extrabold uppercase tracking-widest text-mint-foreground">
                Después
              </p>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                {after.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section id="que-recibes" className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow tone="coral">Qué recibes</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-primary sm:text-4xl">
            Una guía completa, no solo teoría
          </h2>

          <div className="mt-10 soft-card grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-primary">📘 Guía CALMA (13 páginas)</h3>
              <p className="mt-2 text-muted-foreground">
                El protocolo completo, con frases exactas para cada situación.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {guideBullets.map((b) => (
                  <li key={b} className="flex gap-3 text-muted-foreground">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky text-xs font-bold text-sky-foreground">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 lg:w-[22rem]">
              <img
                src={guiaPortada}
                alt="Portada de la Guía CALMA"
                loading="lazy"
                className="w-1/2 rounded-2xl border border-border object-cover shadow-[0_18px_40px_-28px_oklch(0.5_0.06_250/0.5)]"
              />
              <img
                src={guiaProtocolo}
                alt="Página interior con el Protocolo CALMA paso a paso"
                loading="lazy"
                className="w-1/2 rounded-2xl border border-border object-cover shadow-[0_18px_40px_-28px_oklch(0.5_0.06_250/0.5)]"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {bonuses.map((b, i) => (
              <div key={b.t} className="soft-card overflow-hidden">
                <img
                  src={b.img}
                  alt={b.t}
                  loading="lazy"
                  className="aspect-[4/3] w-full bg-cream object-contain p-3"
                />
                <div className="p-6 pt-2">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-display font-extrabold text-primary ${b.tone}`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-primary">{b.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Total bonus value */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-[1.75rem] border border-border bg-lavender/40 px-8 py-6 text-center sm:flex-row sm:gap-6">
            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Total en bonos:
            </span>
            <span className="text-lg text-muted-foreground line-through">$48.00 USD</span>
            <span className="font-display text-2xl font-extrabold text-coral-foreground">
              $0.00 para ti
            </span>
          </div>

          <div className="mt-8 text-center">
            <Cta className="w-full sm:w-auto">Quiero la guía + los 7 bonos →</Cta>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow tone="sky">Así se ve por dentro</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-primary sm:text-4xl">
            Un vistazo real al contenido
          </h2>
          <p className="mt-3 text-muted-foreground">
            Esto es exactamente lo que vas a recibir — no es una simulación.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {insideItems.map((it) => (
              <div
                key={it}
                className="rounded-2xl border border-border bg-card px-5 py-4 text-sm font-semibold text-primary"
              >
                {it}
              </div>
            ))}
          </div>

          <div className="mt-10 soft-card flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-lavender text-3xl">
              👩‍⚕️
            </span>
            <div>
              <h3 className="text-xl font-bold text-primary">
                Psicóloga Andrea Giraldo
              </h3>
              <p className="mt-2 text-muted-foreground">
                Esta guía está diseñada con base en principios establecidos de psicología del
                desarrollo infantil — pensada para ser aplicable desde el primer berrinche, no solo
                para leerse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow tone="butter">Testimonios</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-primary sm:text-4xl">
            Lo que dicen otros padres y madres
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map(([q, a]) => (
              <figure key={a} className="soft-card p-7">
                <div className="text-butter-foreground">★★★★★</div>
                <blockquote className="mt-4 leading-relaxed text-muted-foreground">
                  “{q}”
                </blockquote>
                <figcaption className="mt-5 text-sm font-bold text-primary">{a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5">
          <Eyebrow tone="mint">Así de simple</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-primary sm:text-4xl">Cómo funciona</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {howItWorks.map(([t, d], i) => (
              <div key={t} className="soft-card p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky font-display text-lg font-extrabold text-sky-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-primary">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="soft-card flex flex-col items-center gap-6 p-8 text-center sm:p-12">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-mint text-4xl">
              🛡️
            </span>
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              El riesgo es todo nuestro
            </h2>
            <p className="max-w-xl leading-relaxed text-muted-foreground">
              Si descargas la guía CALMA y los 7 bonos y no te sirve, escríbeme en un plazo de{" "}
              <strong className="text-foreground">7 días</strong> y te devuelvo el 100% de tu dinero.
              Sin burocracia, sin preguntas.
            </p>
            <p className="text-sm font-bold text-coral-foreground">
              Compra segura · Acceso inmediato · Garantía de 7 días
            </p>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="soft-card p-8 text-center sm:p-12">
            <Eyebrow tone="coral">Oferta especial</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold text-primary sm:text-4xl">
              Recupera la calma en tu hogar hoy
            </h2>
            <p className="mt-3 font-semibold text-coral-foreground">
              27% de descuento por tiempo limitado
            </p>
            <div className="mt-7">
              <Countdown />
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Antes <s>$13.99 USD</s>
            </p>
            <p className="font-display text-6xl font-extrabold text-primary">
              $9<span className="text-3xl">.99</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Pago único · acceso inmediato</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["13 pág.", "Guía completa"],
                ["7", "Herramientas bono"],
                ["∞", "Acceso de por vida"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl bg-secondary/70 px-4 py-4">
                  <div className="font-display text-2xl font-extrabold text-primary">{n}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>
            <Cta className="mt-8 w-full">Quiero mi guía CALMA ahora</Cta>
            <p className="mt-4 text-xs text-muted-foreground">
              🔒 Compra 100% segura · Acceso inmediato en tu correo
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <Eyebrow tone="lavender">Preguntas frecuentes</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-primary sm:text-4xl">
            Resolvemos tus dudas
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map(([q, a]) => (
              <AccordionItem key={q} value={q} className="border-border">
                <AccordionTrigger className="text-left text-base font-bold text-primary">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-sky/50 py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            El próximo berrinche puede ser distinto
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Con el protocolo CALMA a la mano, vas a saber exactamente qué hacer — sin gritos, sin
            culpa, con más calma para los dos.
          </p>
          <Cta className="mt-8">Quiero mi guía por $9.99 →</Cta>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-cream py-12">
        <div className="mx-auto max-w-4xl space-y-4 px-5 text-xs leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">Descargo de responsabilidad:</strong> este material
            es una guía educativa e informativa basada en principios generales de psicología del
            desarrollo infantil. No sustituye una evaluación, diagnóstico ni tratamiento psicológico
            individual. Si tu hijo/a presenta señales de alerta (ver capítulo correspondiente en la
            guía), se recomienda consultar con un profesional de la salud mental de forma
            personalizada.
          </p>
          <p>
            <strong className="text-foreground">Aviso importante:</strong> este sitio no es parte
            del sitio web de Facebook ni de Meta, Inc., y no está respaldado por Facebook de ninguna
            manera. FACEBOOK es una marca registrada de Meta, Inc.
          </p>
          <p>
            © CALMA — Guía Profesional para Manejar Berrinches · Psicóloga Andrea Giraldo
          </p>
        </div>
      </footer>
    </div>
  );
}
