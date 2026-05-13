"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const WHATSAPP = "5491150387441";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola! Me interesa Gloty para mi perro 🐶")}`;

const navSections = [
  { id: "inicio", label: "Inicio" },
  { id: "estandar", label: "Estándar" },
  { id: "composicion", label: "Composición" },
  { id: "tecnica", label: "Ficha técnica" },
  { id: "guia", label: "Guía" },
];

const standards = [
  ["🌡️", "Cocción a baja temperatura", "Preserva nutrientes naturales sin desnaturalizar proteínas."],
  ["🥗", "Nutrición completa", "Nutrientes en proporciones exactas para una vida saludable."],
  ["🚫", "Sin aditivos", "Cero colorantes, conservantes ni aromatizantes artificiales."],
  ["🌾", "Sin cereales", "Libre de granos para una digestión más natural."],
  ["💊", "Con vitaminas", "Fortificado con minerales esenciales y vitaminas."],
  ["🫃", "Alta digestibilidad", "Fácil de digerir para máxima absorción y menor estrés digestivo."],
  ["🌿", "100% natural", "Solo ingredientes reales de alta calidad."],
  ["🩺", "Formulado por expertos", "Desarrollado con nutricionistas veterinarios."],
];

const ingredients = [
  { pct: "67,9%", name: "Pollo entero", icon: "🍗", desc: "Suprema 32% · carne de carcasa 25,5% · hígado 7% · piel 3,4%" },
  { pct: "10,7%", name: "Zanahoria", icon: "🥕", desc: "Fibra y vitamina A para defensas, piel y pelo." },
  { pct: "8,6%", name: "Calabaza", icon: "🎃", desc: "Antioxidantes y vitamina A para digestión e inmunidad." },
  { pct: "6,3%", name: "Papa fresca", icon: "🥔", desc: "Energía natural con fibra y antioxidantes digestivos." },
  { pct: "1,6%", name: "Aceites", icon: "🫒", desc: "Pescado, oliva y girasol para un pelaje brillante." },
  { pct: "1,4%", name: "Minerales", icon: "🧂", desc: "Sustancias minerales esenciales para la nutrición diaria." },
  { pct: "1,3%", name: "Manzana", icon: "🍎", desc: "Deshidratada, aporta fibra natural para la digestión." },
  { pct: "1,3%", name: "Almidón", icon: "🌾", desc: "De papa, textura suave sin alterar el sabor natural." },
  { pct: "0,9%", name: "Lino", icon: "🌱", desc: "Fibra dietaria para favorecer tránsito y absorción." },
];

const minerals = [
  ["Carbonato de calcio", "6.500 mg"],
  ["Sulfato de hierro", "200 mg"],
  ["Sulfato de cobre", "71 mg"],
  ["Sulfato de manganeso", "54 mg"],
  ["Yodato de calcio", "4 mg"],
  ["Selenito de sodio", "2 mg"],
  ["Óxido de magnesio", "2 mg"],
  ["Sulfato de zinc", "1 mg"],
];

const vitamins = [
  ["Vitamina E", "474 mg"],
  ["Colina", "431 mg"],
  ["Vitamina B1 monohidrato", "431 mg"],
  ["Vitamina B2", "129 mg"],
  ["Vitamina D3", "17 mg"],
  ["Vitamina B12", "4 mg"],
];

const feedingGuide = [
  ["5 kg", "200 g / día"],
  ["10 kg", "350 g / día"],
  ["20 kg", "600 g / día"],
  ["30 kg", "800 g / día"],
  ["40 kg", "1.000 g / día"],
];

const transitionStages = [
  { days: "Día 1–2", pct: 25, label: "25%" },
  { days: "Día 3–4", pct: 50, label: "50%" },
  { days: "Día 5–6", pct: 75, label: "75%" },
  { days: "Día 7", pct: 100, label: "100% Gloty" },
];

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  const y = element.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open ? <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></> : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>}
    </svg>
  );
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`mb-4 text-xs font-black uppercase tracking-[0.28em] ${light ? "text-brand-orange" : "text-brand-orange"}`}>— {children}</p>;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 32);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const handleClick = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className={`mx-auto max-w-6xl rounded-full border px-4 py-3 transition-all sm:px-6 ${scrolled ? "border-white/70 bg-white/90 shadow-[0_18px_45px_rgba(56,38,24,0.12)] backdrop-blur-xl" : "border-white/40 bg-white/65 backdrop-blur-md"}`}>
        <div className="flex items-center justify-between gap-4">
          <button type="button" onClick={() => handleClick("inicio")} className="flex items-center gap-3 text-left">
            <span className="font-display text-2xl leading-none text-brand-orange">Gloty</span>
            <span className="hidden text-[10px] uppercase tracking-[0.24em] text-brand-warm sm:block">amor real, comida real</span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navSections.map((section) => (
              <button key={section.id} type="button" onClick={() => handleClick(section.id)} className="rounded-full px-3 py-2 text-sm font-semibold text-brand-charcoal/70 transition hover:bg-brand-orange hover:text-white">
                {section.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#20bd5a]">
              <WhatsAppIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Pedí ahora</span>
              <span className="sm:hidden">Pedir</span>
            </a>
            <button type="button" onClick={() => setMenuOpen((v) => !v)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-charcoal/10 bg-white text-brand-charcoal md:hidden" aria-label="Abrir menú">
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        <div className={`overflow-hidden transition-all md:hidden ${menuOpen ? "max-h-96 pt-3" : "max-h-0"}`}>
          <div className="grid gap-2 rounded-[1.5rem] bg-white/90 p-3">
            {navSections.map((section) => (
              <button key={section.id} type="button" onClick={() => handleClick(section.id)} className="rounded-2xl bg-brand-cream px-4 py-3 text-left text-sm font-bold text-brand-charcoal">
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
  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-orange px-4 pb-10 pt-32 text-white sm:px-6 sm:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.2),transparent_20%),radial-gradient(circle_at_88%_20%,rgba(77,35,12,0.22),transparent_28%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div className="pb-6">
            <span className="inline-flex rounded-full bg-brand-orange-dark px-5 py-2 text-xs font-black uppercase tracking-[0.2em]">Alimento natural para perros</span>
            <h1 className="mt-7 font-display text-7xl leading-none sm:text-8xl lg:text-9xl">Gloty</h1>
            <p className="mt-2 font-script text-4xl italic text-white/90 sm:text-5xl">amor real, comida real</p>
            <p className="mt-7 max-w-md text-lg leading-8 text-white/82">Comida real cocida a baja temperatura, formulada por nutricionistas veterinarios y hecha con ingredientes que podés reconocer.</p>
          </div>

          <div className="relative overflow-hidden rounded-[2.6rem] border-[10px] border-white/22 shadow-[0_28px_90px_rgba(55,23,8,0.34)]">
            <Image src="/hero-dog.jpg" alt="Perro comiendo Gloty" width={1800} height={1100} priority quality={90} className="h-[26rem] w-full object-cover sm:h-[34rem]" />
            <div className="absolute inset-x-0 bottom-0 grid gap-3 bg-gradient-to-t from-brand-charcoal/72 to-transparent p-5 sm:grid-cols-3 sm:p-7">
              {["🌾 Sin cereales", "✅ 100% natural", "🏷️ Sin conservantes"].map((seal) => (
                <div key={seal} className="rounded-full bg-white px-4 py-3 text-center text-sm font-black text-brand-charcoal shadow-lg">{seal}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Standard() {
  return (
    <section id="estandar" className="section-anchor bg-brand-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>Por qué elegirnos</SectionLabel>
            <h2 className="text-4xl font-black leading-tight text-brand-charcoal sm:text-6xl">El estándar <span className="font-display text-brand-orange">Gloty</span></h2>
            <p className="mt-5 text-lg leading-8 text-brand-charcoal/66">Cada detalle está pensado para que tu perro reciba lo mejor: una receta simple, natural y completa.</p>
            <div className="mt-8 overflow-hidden rounded-[2.2rem] shadow-[0_22px_65px_rgba(70,48,30,0.16)]">
              <Image src="/lifestyle.jpg" alt="Preparación de Gloty en casa" width={1400} height={1000} className="h-[24rem] w-full object-cover" quality={88} />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {standards.map(([icon, title, desc]) => (
              <article key={title} className="rounded-[1.7rem] border-t-4 border-brand-orange bg-white p-5 shadow-[0_16px_38px_rgba(70,48,30,0.08)]">
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-cream text-2xl">{icon}</span>
                  <h3 className="font-bold leading-tight text-brand-charcoal">{title}</h3>
                </div>
                <p className="text-sm leading-6 text-brand-charcoal/62">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Composition() {
  const main = ingredients[0];
  const rest = ingredients.slice(1);

  return (
    <section id="composicion" className="section-anchor bg-[#fffaf4] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2.6rem] bg-white shadow-[0_22px_70px_rgba(70,48,30,0.11)]">
          <Image src="/ingredients.jpg" alt="Ingredientes de la receta pollo y vegetales" width={1800} height={900} className="h-[22rem] w-full object-cover sm:h-[30rem]" quality={92} />
          <div className="bg-brand-orange px-6 py-5 text-white sm:px-8">
            <p className="text-xs font-black uppercase tracking-[0.26em]">Composición — receta pollo y vegetales</p>
          </div>
          <div className="p-5 sm:p-8">
            <div className="mb-6 rounded-[2rem] bg-brand-orange p-6 text-white sm:flex sm:items-center sm:gap-7">
              <div className="text-6xl font-black leading-none sm:text-7xl">{main.pct}</div>
              <div className="mt-4 sm:mt-0">
                <h3 className="text-3xl font-black">{main.name}</h3>
                <p className="mt-2 text-sm italic text-white/84">{main.desc}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {rest.map((item) => (
                <article key={item.name} className="rounded-[1.6rem] border border-brand-charcoal/8 bg-brand-cream/70 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-black text-brand-orange">{item.pct}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-black text-brand-charcoal">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-charcoal/62">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccordionTable({ title, rows, defaultOpen = false }: { title: string; rows: string[][]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.06]">
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-white">
        <span className="text-xl font-black">{title}</span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-orange text-xl font-black">{open ? "−" : "+"}</span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="px-5 pb-5">
            {rows.map(([name, value]) => (
              <div key={name} className="flex items-center justify-between border-t border-white/10 py-3 text-sm">
                <span className="text-white/70">{name}</span>
                <span className="font-black text-brand-orange">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TechnicalSheet() {
  return (
    <section id="tecnica" className="section-anchor bg-brand-dark px-4 py-20 text-white sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionLabel light>Ficha técnica</SectionLabel>
            <h2 className="text-4xl font-black leading-tight sm:text-6xl">Minerales y <span className="text-brand-orange">Vitaminas añadidos</span></h2>
            <p className="mt-5 text-lg leading-8 text-white/66">Suplementación completa por kg de producto, presentada como accordion para que la sección respire mejor en web.</p>
            <div className="mt-8 grid gap-3 text-sm font-bold italic text-brand-orange sm:grid-cols-3 lg:grid-cols-1">
              <span>Producto refrigerado</span>
              <span>Sin conservantes</span>
              <span>Cadena de frío obligatoria</span>
            </div>
          </div>
          <div className="grid gap-4">
            <AccordionTable title="Minerales por kg" rows={minerals} defaultOpen />
            <AccordionTable title="Vitaminas por kg" rows={vitamins} />
          </div>
        </div>
      </div>
    </section>
  );
}

function BowlStage({ pct }: { pct: number }) {
  return (
    <div className="relative mx-auto aspect-square w-40 max-w-full sm:w-48">
      <div className="absolute inset-0 translate-y-3 rounded-full bg-brand-charcoal/12 blur-md" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-[#d7d0c7] p-3 shadow-[inset_0_0_18px_rgba(45,45,45,0.18),0_18px_32px_rgba(70,48,30,0.12)]">
        <div
          className="relative h-full w-full overflow-hidden rounded-full border-[6px] border-white/70"
          style={{ background: `conic-gradient(from -90deg, #cf5b23 0 ${pct}%, #7a5233 ${pct}% 100%)` }}
        >
          <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle_at_22%_30%,#f4b078_0_5px,transparent_6px),radial-gradient(circle_at_70%_38%,#f7c68c_0_4px,transparent_5px),radial-gradient(circle_at_45%_70%,#b7431b_0_6px,transparent_7px),radial-gradient(circle_at_78%_78%,#e7894e_0_5px,transparent_6px)]" />
          {pct < 100 && <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_28%_24%,#9b6a44_0_6px,transparent_7px),radial-gradient(circle_at_62%_28%,#684226_0_5px,transparent_6px),radial-gradient(circle_at_35%_70%,#a97a52_0_5px,transparent_6px),radial-gradient(circle_at_76%_64%,#5c371f_0_6px,transparent_7px)]" />}
        </div>
      </div>
    </div>
  );
}

function FeedingGuide() {
  return (
    <section id="guia" className="section-anchor bg-brand-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionLabel>Guía de alimentación</SectionLabel>
            <h2 className="text-4xl font-black leading-tight text-brand-charcoal sm:text-6xl">¿Cuánto darle a tu perro?</h2>
            <p className="mt-5 text-lg leading-8 text-brand-charcoal/66">La ración diaria recomendada es el 2–4% del peso corporal. Ajustá según actividad, edad y condición corporal.</p>
            <div className="mt-8 overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_48px_rgba(70,48,30,0.1)]">
              <div className="grid grid-cols-2 bg-brand-charcoal px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-white">
                <span>Peso del perro</span><span className="text-right">Consumo diario</span>
              </div>
              {feedingGuide.map(([weight, grams]) => (
                <div key={weight} className="grid grid-cols-2 border-t border-brand-cream px-6 py-4 text-brand-charcoal">
                  <span className="font-bold">{weight}</span><span className="text-right text-lg font-black text-brand-orange">{grams}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm italic text-brand-charcoal/55">Valores estimativos. Consultá con tu veterinario si tu perro tiene requerimientos particulares.</p>
          </div>

          <div className="relative overflow-hidden rounded-[2.4rem] bg-white p-6 shadow-[0_24px_65px_rgba(70,48,30,0.12)] sm:p-8">
            <div className="absolute right-4 top-4 hidden h-28 w-28 overflow-hidden rounded-full border-8 border-brand-cream sm:block">
              <Image src="/product.jpg" alt="Pack Gloty" width={400} height={400} className="h-full w-full object-cover" />
            </div>
            <SectionLabel>Transición gradual</SectionLabel>
            <h3 className="max-w-lg text-4xl font-black text-brand-charcoal">Plan de 7 días</h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-brand-charcoal/62">Permite que el estómago de tu perro se adapte poco a poco: empezá mezclando con su alimento habitual y aumentá Gloty hasta completar la transición.</p>

            <div className="mt-9 grid gap-8 sm:grid-cols-2">
              {transitionStages.map((stage, index) => (
                <div key={stage.days} className="relative rounded-[2rem] bg-brand-cream/70 p-5 text-center">
                  {index < transitionStages.length - 1 && <div className="absolute -right-5 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 rounded-full border-8 border-white bg-brand-orange lg:block" />}
                  <div className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-brand-charcoal/55">{stage.days}</div>
                  <BowlStage pct={stage.pct} />
                  <div className={`mt-5 text-2xl font-black ${stage.pct === 100 ? "font-display italic text-brand-orange" : "text-brand-charcoal"}`}>{stage.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold text-brand-charcoal/58">
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#7a5233]" /> Alimento anterior</span>
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-brand-orange" /> Gloty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Storage() {
  return (
    <section className="bg-[#fffaf4] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="overflow-hidden rounded-[2.4rem] shadow-[0_22px_65px_rgba(70,48,30,0.14)]">
          <Image src="/storage.jpg" alt="Conservación de Gloty" width={1200} height={1200} className="h-[32rem] w-full object-cover" quality={88} />
        </div>
        <div>
          <SectionLabel>Conservación</SectionLabel>
          <h2 className="text-4xl font-black text-brand-charcoal sm:text-6xl">Manejo y conservación</h2>
          <div className="mt-8 grid gap-4">
            {[
              ["❄️", "Freezer", "Mantené las raciones en freezer para conservar calidad y frescura."],
              ["🌙", "La noche anterior", "Pasá la ración del día siguiente a la heladera."],
              ["🌡️", "Temperatura ambiente", "Serví a temperatura ambiente. Podés templarlo, sin cocinar de nuevo."],
              ["📅", "Una vez abierto", "Conservar en heladera hasta 3 días."],
            ].map(([icon, title, text]) => (
              <article key={title} className="rounded-[1.6rem] border-t-4 border-brand-orange bg-white p-5 shadow-[0_16px_38px_rgba(70,48,30,0.07)]">
                <div className="flex gap-4"><span className="text-3xl">{icon}</span><div><h3 className="font-black text-brand-charcoal">{title}</h3><p className="mt-1 text-sm leading-6 text-brand-charcoal/62">{text}</p></div></div>
              </article>
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
        <div><p className="font-display text-3xl text-brand-orange">Gloty</p><p className="mt-1 text-sm text-white/55">Amor real, comida real.</p></div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"><WhatsAppIcon className="h-4 w-4" /> +54 9 11 5038-7441</a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Standard />
      <Composition />
      <TechnicalSheet />
      <FeedingGuide />
      <Storage />
      <Footer />
    </main>
  );
}
