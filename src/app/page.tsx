"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const WHATSAPP = "5491150387441";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola! Me interesa Gloty para mi perro 🐶")}`;
const SECTION_OFFSET = 96;

const navSections = [
  { id: "inicio", label: "Inicio" },
  { id: "que-es", label: "¿Qué es?" },
  { id: "ingredientes", label: "Ingredientes" },
  { id: "guia", label: "Guía" },
  { id: "conservacion", label: "Conservación" },
];

const whatIsCards = [
  {
    icon: "🚫",
    title: "No es balanceado",
    desc: "No es un ultraprocesado como las croquetas tradicionales.",
  },
  {
    icon: "🍳",
    title: "Es comida real",
    desc: "Ingredientes que podés reconocer, cocidos con cariño.",
  },
  {
    icon: "🩺",
    title: "Avalado por profesionales",
    desc: "Formulado por nutricionistas veterinarios.",
  },
];

const benefits = [
  {
    icon: "🔥",
    title: "Cocinado a baja temperatura",
    desc: "Proceso de cocción suave que preserva mejor sabor, aroma y nutrientes.",
  },
  {
    icon: "🌿",
    title: "100% natural",
    desc: "Solo ingredientes reales y reconocibles, sin vueltas ni rellenos raros.",
  },
  {
    icon: "🚫",
    title: "Sin cereales",
    desc: "Libre de granos para una digestión más simple y amable.",
  },
  {
    icon: "✨",
    title: "Sin conservantes",
    desc: "Hecho sin aditivos artificiales para mantener una receta más limpia.",
  },
  {
    icon: "💊",
    title: "Vitaminas y minerales",
    desc: "Nutrientes esenciales para acompañar cada etapa de vida.",
  },
  {
    icon: "🫁",
    title: "Alta digestibilidad",
    desc: "Pensado para una mejor absorción y un tránsito intestinal más cómodo.",
  },
  {
    icon: "💪",
    title: "Completo y equilibrado",
    desc: "Con proporciones cuidadas para cubrir la nutrición diaria.",
  },
  {
    icon: "✨",
    title: "Pelaje brillante",
    desc: "Ácidos grasos esenciales que ayudan a una piel sana y pelo radiante.",
  },
  {
    icon: "🍗",
    title: "Saludable y nutritivo",
    desc: "Una comida rica, práctica y pensada para sentirse bien de verdad.",
  },
];

const benefitLayout = [
  { top: "4%", left: "1%" },
  { top: "23%", left: "-4%" },
  { top: "44%", left: "-7%" },
  { top: "68%", left: "-1%" },
  { top: "84%", left: "9%" },
  { top: "8%", right: "2%" },
  { top: "30%", right: "-6%" },
  { top: "53%", right: "-8%" },
  { top: "79%", right: "5%" },
];

const ingredients = [
  {
    name: "Pollo",
    pct: 67.8,
    emoji: "🍗",
    detail: "Suprema 32%, pechuga cms 25.5%, piel 3.4%, hígado 27%",
    desc: "Proteína de alta calidad para músculos fuertes, piel saludable y pelaje brillante.",
  },
  {
    name: "Zanahoria",
    pct: 10.6,
    emoji: "🥕",
    desc: "Rica en fibra y vitamina A. Fortalece las defensas y la salud de piel y pelo.",
  },
  {
    name: "Calabaza",
    pct: 8.5,
    emoji: "🎃",
    desc: "Antioxidantes y vitamina A para el sistema inmune y salud digestiva.",
  },
  {
    name: "Papa fresca",
    pct: 6.3,
    emoji: "🥔",
    desc: "Fuente natural de energía, con fibra y antioxidantes.",
  },
  {
    name: "Aceites",
    pct: 1.6,
    emoji: "🫒",
    detail: "Pescado, oliva y girasol",
    desc: "Ácidos grasos esenciales para pelaje saludable y brillante.",
  },
  {
    name: "Manzana deshidratada",
    pct: 1.3,
    emoji: "🍎",
    desc: "Fibra natural para la digestión y equilibrio intestinal.",
  },
  {
    name: "Almidón de papa",
    pct: 1.3,
    emoji: "🫙",
    desc: "Textura suave y homogénea respetando el sabor natural.",
  },
  {
    name: "Sustancias minerales",
    pct: 1.4,
    emoji: "💎",
    desc: "Minerales esenciales para huesos, dientes y funciones vitales.",
  },
  {
    name: "Lino",
    pct: 0.9,
    emoji: "🌾",
    desc: "Fibra dietaria para digestión saludable y tránsito intestinal.",
  },
];

const feedingGuide = [
  { weight: 5, grams: 200 },
  { weight: 10, grams: 350 },
  { weight: 20, grams: 600 },
  { weight: 30, grams: 800 },
  { weight: 40, grams: 1000 },
];

const transitionDays = [
  { day: 1, pct: 15 },
  { day: 2, pct: 30 },
  { day: 3, pct: 40 },
  { day: 4, pct: 50 },
  { day: 5, pct: 65 },
  { day: 6, pct: 85 },
  { day: 7, pct: 100 },
];

const minerals = [
  ["Carbonato de calcio", "6500 mg"],
  ["Sulfato de hierro", "200 mg"],
  ["Sulfato de cobre", "71 mg"],
  ["Sulfato de manganeso", "54 mg"],
  ["Óxido de magnesio", "2 mg"],
  ["Sulfato de zinc", "1 mg"],
  ["Yodato de calcio", "4 mg"],
  ["Selenito de sodio", "2 mg"],
];

const vitamins = [
  ["Vitamina E", "474 mg"],
  ["Vitamina D3", "17 mg"],
  ["Colina", "431 mg"],
  ["Vitamina B2", "129 mg"],
  ["Vitamina B1", "431 mg"],
  ["Vitamina B12", "4 mg"],
];

const storageTips = [
  { icon: "❄️", title: "Freezer", text: "Mantené las raciones en el freezer." },
  {
    icon: "🌙",
    title: "La noche anterior",
    text: "Pasá la ración del día siguiente a la heladera.",
  },
  {
    icon: "🌡️",
    title: "Temperatura ambiente",
    text: "Serví a temperatura ambiente. Podés templarlo un poco, pero no lo cocines de nuevo.",
  },
  {
    icon: "📅",
    title: "Una vez abierto",
    text: "Conservar en la heladera hasta 3 días.",
  },
];

const macros = [
  { label: "Proteína bruta", value: "14%" },
  { label: "Grasa bruta", value: "7%" },
  { label: "Carbohidratos", value: "1.5%" },
  { label: "Humedad", value: "68–72%" },
];

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const y = element.getBoundingClientRect().top + window.scrollY - SECTION_OFFSET;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {open ? (
        <>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </>
      ) : (
        <>
          <path d="M3 6h18" />
          <path d="M3 12h18" />
          <path d="M3 18h18" />
        </>
      )}
    </svg>
  );
}

function ChevronDown({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">
      {children}
    </p>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navSections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        const current = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0];
        setActiveSection(current.target.id);
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div
        className={`mx-auto max-w-6xl rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-white/70 bg-white/88 shadow-[0_18px_45px_rgba(56,38,24,0.12)] backdrop-blur-xl"
            : "border-white/40 bg-white/62 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => handleNavClick("inicio")}
            className="flex items-center gap-3 text-left"
          >
            <span className="font-display text-2xl leading-none text-brand-orange">
              Gloty
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.24em] text-brand-warm sm:block">
              amor real, comida real
            </span>
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {navSections.map((section) => {
              const active = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleNavClick(section.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-brand-orange text-white shadow-[0_10px_24px_rgba(240,120,48,0.28)]"
                      : "text-brand-charcoal/72 hover:bg-white hover:text-brand-charcoal"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-green-500/20"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Pedí ahora</span>
              <span className="sm:hidden">Pedir</span>
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-charcoal/10 bg-white text-brand-charcoal md:hidden"
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-96 pt-3" : "max-h-0"
          }`}
        >
          <div className="grid gap-2 rounded-[1.5rem] border border-brand-charcoal/8 bg-white/80 p-3">
            {navSections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => handleNavClick(section.id)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? "bg-brand-orange text-white"
                    : "bg-brand-cream/70 text-brand-charcoal"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const activeItem = benefits[activeBenefit];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-4 pb-14 pt-32 sm:px-6 sm:pb-20 sm:pt-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,120,48,0.18),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(255,214,170,0.8),transparent_22%),linear-gradient(180deg,#fbf5ec_0%,#fffdf8_46%,#f6ede0_100%)]" />
      <div className="absolute left-[-6rem] top-24 h-40 w-40 rounded-full bg-white/60 blur-3xl" />
      <div className="absolute bottom-10 right-[-4rem] h-52 w-52 rounded-full bg-brand-orange/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-orange/15 bg-white/75 px-4 py-2 text-sm font-medium text-brand-charcoal shadow-[0_14px_30px_rgba(111,86,61,0.08)] backdrop-blur-sm">
            <span>🐾</span>
            <span>Alimento natural para perros</span>
          </div>

          <h1 className="text-5xl leading-[0.95] text-brand-charcoal sm:text-6xl lg:text-7xl">
            <span className="font-display">Conocé más</span>
            <br />
            <span className="font-display italic text-brand-orange">
              sobre nuestra
            </span>
            <br />
            <span className="font-display">comida natural</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-brand-charcoal/70 sm:text-lg">
            Gloty es comida real cocida para perros, hecha con ingredientes
            naturales y pensada para que la experiencia se sienta simple,
            confiable y rica desde el primer vistazo.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("que-es")}
              className="rounded-full bg-brand-charcoal px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3a2b1f]"
            >
              Ver cómo funciona
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-charcoal/12 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-orange/30 hover:text-brand-orange"
            >
              Hablar por WhatsApp
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {macros.map((macro) => (
              <div
                key={macro.label}
                className="rounded-[1.5rem] border border-white/70 bg-white/72 px-4 py-4 shadow-[0_16px_35px_rgba(70,48,30,0.08)] backdrop-blur-sm"
              >
                <div className="text-lg font-bold text-brand-orange">
                  {macro.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-brand-charcoal/45">
                  {macro.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block">
            <div className="relative mx-auto h-[39rem] max-w-[44rem]">
              <div className="absolute left-1/2 top-1/2 h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2dfbf]" />
              <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-orange/18" />
              <div className="absolute left-1/2 top-1/2 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-charcoal/6" />

              <div className="absolute left-1/2 top-1/2 w-[23rem] -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-[2.25rem] border border-white/70 bg-white/70 p-4 shadow-[0_30px_80px_rgba(77,52,28,0.18)] backdrop-blur-sm">
                  <div className="overflow-hidden rounded-[1.75rem]">
                    <Image
                      src="/ingredients.jpg"
                      alt="Ingredientes naturales de Gloty"
                      width={1200}
                      height={600}
                      className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                      priority
                      quality={92}
                    />
                  </div>
                </div>
              </div>

              {benefits.map((benefit, index) => {
                const pos = benefitLayout[index];
                const active = index === activeBenefit;

                return (
                  <button
                    key={benefit.title}
                    type="button"
                    onClick={() => setActiveBenefit(index)}
                    className={`absolute w-52 rounded-[1.5rem] border px-4 py-4 text-left transition-all duration-300 ${
                      active
                        ? "scale-105 border-brand-orange/30 bg-white text-brand-charcoal shadow-[0_20px_45px_rgba(240,120,48,0.18)]"
                        : "border-white/70 bg-white/78 text-brand-charcoal/78 shadow-[0_16px_34px_rgba(71,51,32,0.08)] hover:-translate-y-1 hover:bg-white"
                    }`}
                    style={pos}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-cream text-xl shadow-inner">
                        {benefit.icon}
                      </span>
                      <span className="font-display text-lg leading-tight">
                        {benefit.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mx-auto mt-6 max-w-[27rem] rounded-[1.75rem] border border-brand-orange/15 bg-brand-charcoal px-6 py-5 text-white shadow-[0_24px_60px_rgba(50,35,25,0.28)]">
              <p className="text-[11px] uppercase tracking-[0.22em] text-brand-orange/75">
                Beneficio destacado
              </p>
              <h2 className="mt-2 font-display text-2xl">{activeItem.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/70">
                {activeItem.desc}
              </p>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-x-10 top-8 h-56 rounded-full bg-[#f2dfbf]" />
              <div className="relative rounded-[2rem] border border-white/70 bg-white/82 p-3 shadow-[0_24px_65px_rgba(79,58,35,0.16)] backdrop-blur-sm">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/ingredients.jpg"
                    alt="Ingredientes naturales de Gloty"
                    width={1200}
                    height={600}
                    className="h-auto w-full object-cover"
                    priority
                    quality={92}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit, index) => {
                const active = index === activeBenefit;
                return (
                  <button
                    key={benefit.title}
                    type="button"
                    onClick={() => setActiveBenefit(index)}
                    className={`rounded-[1.4rem] border px-4 py-4 text-left transition-all duration-200 ${
                      active
                        ? "border-brand-orange/30 bg-white shadow-[0_16px_38px_rgba(240,120,48,0.14)]"
                        : "border-white/75 bg-white/72"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-cream text-xl">
                        {benefit.icon}
                      </span>
                      <span className="font-display text-lg leading-tight text-brand-charcoal">
                        {benefit.title}
                      </span>
                    </div>
                    {active && (
                      <p className="mt-3 text-sm leading-6 text-brand-charcoal/68">
                        {benefit.desc}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsGloty() {
  const { ref, visible } = useInView();

  return (
    <section
      id="que-es"
      ref={ref}
      className="section-anchor bg-white px-4 py-20 sm:px-6 sm:py-28"
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionLabel>¿Qué es Gloty?</SectionLabel>
            <h2 className="text-4xl leading-tight text-brand-charcoal sm:text-5xl">
              <span className="font-display">No es balanceado.</span>
              <br />
              <span className="font-display italic text-brand-orange">
                Es comida real.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-brand-charcoal/68 sm:text-lg">
              Gloty es un alimento natural cocido para perros, formulado por
              nutricionistas veterinarios y elaborado con ingredientes reales de
              alta calidad para acompañar su bienestar todos los días.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-brand-charcoal/60">
              La cocción a baja temperatura ayuda a preservar nutrientes y
              sabor. No buscamos parecer otra bolsa de alimento: buscamos que
              se vea, se entienda y se sirva como comida de verdad.
            </p>
          </div>

          <div className="grid gap-4">
            {whatIsCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-brand-orange/10 bg-brand-cream/55 p-6 shadow-[0_18px_40px_rgba(70,48,30,0.06)]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-brand-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-brand-charcoal/62">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LifestyleBanner() {
  return (
    <section className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.25rem]">
        <Image
          src="/hero-dog.jpg"
          alt="Perro esperando su comida Gloty"
          width={1800}
          height={1100}
          className="h-[26rem] w-full object-cover sm:h-[34rem]"
          quality={88}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/78 via-brand-charcoal/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/60">
              Vida real
            </p>
            <h2 className="mt-3 text-3xl leading-tight text-white sm:text-5xl">
              <span className="font-display">Prepararlo es tan fácil</span>
              <br />
              <span className="font-display italic text-brand-orange">
                como descongelar y servir.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ingredients() {
  const [showNutrition, setShowNutrition] = useState(false);
  const { ref, visible } = useInView();
  const maxPct = ingredients[0].pct;

  return (
    <section
      id="ingredientes"
      ref={ref}
      className="section-anchor bg-[#fffaf4] px-4 py-20 sm:px-6 sm:py-28"
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-14 max-w-3xl">
          <SectionLabel>Receta única</SectionLabel>
          <h2 className="text-4xl text-brand-charcoal sm:text-5xl">
            <span className="font-display">Pollo y vegetales</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-brand-charcoal/62">
            Cada ingrediente tiene una función concreta. Acá podés ver la base
            de la receta y el porcentaje de cada componente dentro del producto.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.name}
              className="rounded-[1.6rem] border border-brand-charcoal/8 bg-white/88 p-5 shadow-[0_14px_30px_rgba(70,48,30,0.05)]"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-cream text-lg">
                  {ingredient.emoji}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-brand-charcoal">
                    {ingredient.name}
                  </h3>
                  <div className="text-xs font-bold text-brand-orange">
                    {ingredient.pct}%
                  </div>
                </div>
              </div>

              <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-brand-cream">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-orange to-[#f7a45d]"
                  style={{ width: `${(ingredient.pct / maxPct) * 100}%` }}
                />
              </div>

              <p className="text-sm leading-6 text-brand-charcoal/62">
                {ingredient.desc}
              </p>

              {ingredient.detail && (
                <p className="mt-2 text-xs italic text-brand-orange/70">
                  {ingredient.detail}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-4xl">
          <button
            type="button"
            onClick={() => setShowNutrition((current) => !current)}
            className="flex w-full items-center justify-between rounded-[1.4rem] border border-brand-charcoal/8 bg-white px-5 py-4 text-left shadow-[0_14px_28px_rgba(70,48,30,0.04)]"
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-brand-charcoal">
              <span>📊</span>
              <span>Tabla nutricional completa</span>
            </span>
            <ChevronDown
              className={`h-4 w-4 text-brand-orange transition-transform duration-300 ${
                showNutrition ? "rotate-180" : ""
              }`}
            />
          </button>

          {showNutrition && (
            <div className="mt-3 grid gap-6 rounded-[1.7rem] border border-brand-charcoal/8 bg-white p-6 animate-fade-in sm:grid-cols-2">
              <div>
                <h4 className="font-display text-2xl text-brand-charcoal">
                  Minerales por kg
                </h4>
                <div className="mt-4 space-y-1">
                  {minerals.map(([name, value]) => (
                    <div
                      key={name}
                      className="flex justify-between border-b border-brand-cream py-2 text-sm"
                    >
                      <span className="text-brand-charcoal/62">{name}</span>
                      <span className="font-semibold text-brand-charcoal">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-display text-2xl text-brand-charcoal">
                  Vitaminas por kg
                </h4>
                <div className="mt-4 space-y-1">
                  {vitamins.map(([name, value]) => (
                    <div
                      key={name}
                      className="flex justify-between border-b border-brand-cream py-2 text-sm"
                    >
                      <span className="text-brand-charcoal/62">{name}</span>
                      <span className="font-semibold text-brand-charcoal">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FeedingGuide() {
  const { ref, visible } = useInView();

  return (
    <section
      id="guia"
      ref={ref}
      className="section-anchor bg-white px-4 py-20 sm:px-6 sm:py-28"
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-14 max-w-3xl">
          <SectionLabel>Guía</SectionLabel>
          <h2 className="text-4xl text-brand-charcoal sm:text-5xl">
            <span className="font-display">Alimentación y dosificación</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-brand-charcoal/62">
            La ración diaria suele estar entre el 2% y el 4% del peso corporal,
            según el nivel de actividad y el momento de vida del perro.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="overflow-hidden rounded-[2rem] border border-brand-charcoal/8 bg-[#fffaf4] shadow-[0_18px_42px_rgba(70,48,30,0.05)]">
            <div className="bg-brand-charcoal px-6 py-6 text-white">
              <h3 className="font-display text-3xl">Cantidad diaria recomendada</h3>
            </div>
            <div className="grid grid-cols-2 bg-white/60 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-charcoal/45">
              <span>Peso</span>
              <span className="text-right">Consumo</span>
            </div>
            {feedingGuide.map((row) => (
              <div
                key={row.weight}
                className="grid grid-cols-2 border-t border-white/70 px-6 py-4"
              >
                <span className="font-medium text-brand-charcoal">
                  {row.weight} kg
                </span>
                <span className="text-right text-lg font-bold text-brand-orange">
                  {row.grams} g
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-brand-charcoal/8 bg-brand-cream/55 p-6 shadow-[0_18px_42px_rgba(70,48,30,0.05)] sm:p-8">
            <h3 className="font-display text-3xl text-brand-charcoal">
              ¿Cómo empezar?
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-brand-charcoal/60">
              Recomendamos una transición gradual de 7 días para pasar de
              comida procesada a comida real sin cambios bruscos.
            </p>

            <div className="mt-8 grid grid-cols-7 gap-2 sm:gap-3">
              {transitionDays.map((day) => (
                <div key={day.day} className="text-center">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-orange sm:text-xs">
                    Día {day.day}
                  </div>
                  <div className="relative mx-auto aspect-square w-full max-w-[78px]">
                    <div className="absolute inset-1 translate-y-1 rounded-full bg-brand-charcoal/10 blur-sm" />
                    <div className="absolute inset-0 overflow-hidden rounded-full border-[3px] border-brand-charcoal/10 bg-white shadow-inner">
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-orange to-[#f6a862]"
                        style={{ height: `${day.pct}%` }}
                      />
                      {day.pct < 100 && (
                        <div
                          className="absolute left-0 right-0 top-0 bg-gradient-to-b from-[#8f6c48]/25 to-[#8f6c48]/15"
                          style={{ height: `${100 - day.pct}%` }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="mt-2 text-xs font-bold text-brand-charcoal">
                    {day.pct}%
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.14em] text-brand-charcoal/42 sm:text-[10px]">
                    Gloty
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-xs text-brand-charcoal/55">
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border border-[#8f6c48]/20 bg-[#8f6c48]/25" />
                Alimento anterior
              </span>
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-brand-orange" />
                Gloty
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Storage() {
  const { ref, visible } = useInView();

  return (
    <section
      id="conservacion"
      ref={ref}
      className="section-anchor bg-[#fff7ef] px-4 py-20 sm:px-6 sm:py-28"
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-14 max-w-3xl">
          <SectionLabel>Conservación</SectionLabel>
          <h2 className="text-4xl text-brand-charcoal sm:text-5xl">
            <span className="font-display">Manejo y conservación</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-brand-charcoal/62">
            Como no tiene conservantes artificiales, es importante cuidar la
            cadena de frío y respetar algunas pautas simples.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.2rem] bg-white/65 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 shadow-[0_28px_70px_rgba(70,48,30,0.12)]">
              <Image
                src="/storage.jpg"
                alt="Conservación de Gloty en la heladera"
                width={1000}
                height={1200}
                className="h-full w-full object-cover"
                quality={90}
              />
            </div>
          </div>

          <div className="grid gap-4">
            {storageTips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-[1.6rem] border border-brand-charcoal/8 bg-white/88 p-5 shadow-[0_14px_30px_rgba(70,48,30,0.05)]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-cream text-2xl">
                    {tip.icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-charcoal/80">
                      {tip.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-brand-charcoal/62">
                      {tip.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-charcoal px-4 py-10 text-white sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-3xl text-brand-orange">Gloty</p>
          <p className="mt-1 text-sm text-white/55">
            Comida real para perros, pensada con amor y criterio nutricional.
          </p>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
        >
          <WhatsAppIcon className="h-4 w-4" />
          +54 9 11 5038-7441
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatIsGloty />
      <LifestyleBanner />
      <Ingredients />
      <FeedingGuide />
      <Storage />
      <Footer />
    </main>
  );
}
