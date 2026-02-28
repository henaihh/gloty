'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

/* ─── Data ─── */
const WHATSAPP = '5491150387441';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola! Me interesa Gloty para mi perro 🐶')}`;

const whatIsCards = [
  { icon: '🚫', title: 'No es balanceado', desc: 'No es un ultraprocesado como las croquetas tradicionales.' },
  { icon: '🍳', title: 'Es comida real', desc: 'Ingredientes que podés reconocer, cocidos con cariño.' },
  { icon: '🩺', title: 'Avalado por profesionales', desc: 'Formulado por nutricionistas veterinarios.' },
];

const benefits = [
  { icon: '🔥', title: 'Cocinado a baja temperatura', desc: 'Proceso de cocción suave que preserva todos los nutrientes.' },
  { icon: '🌿', title: '100% natural', desc: 'Solo ingredientes reales de alta calidad.' },
  { icon: '🚫', title: 'Sin cereales', desc: 'Libre de granos para una digestión natural.' },
  { icon: '✨', title: 'Sin conservantes', desc: '100% libre de aditivos artificiales.' },
  { icon: '💊', title: 'Vitaminas y minerales', desc: 'Nutrientes esenciales para una salud óptima.' },
  { icon: '🫁', title: 'Alta digestibilidad', desc: 'Mejor absorción de nutrientes.' },
  { icon: '💪', title: 'Completo y equilibrado', desc: 'Proporciones correctas de cada nutriente.' },
  { icon: '✨', title: 'Pelaje brillante', desc: 'Ácidos grasos para piel sana y pelo radiante.' },
  { icon: '🍗', title: 'Saludable y nutritivo', desc: 'Nutrición completa para cada etapa.' },
];

const ingredients = [
  { name: 'Pollo', pct: 67.8, emoji: '🍗', detail: 'Suprema 32%, pechuga cms 25.5%, piel 3.4%, hígado 27%', desc: 'Proteína de alta calidad para músculos fuertes, piel saludable y pelaje brillante.' },
  { name: 'Zanahoria', pct: 10.6, emoji: '🥕', desc: 'Rica en fibra y vitamina A. Fortalece las defensas y la salud de piel y pelo.' },
  { name: 'Calabaza', pct: 8.5, emoji: '🎃', desc: 'Antioxidantes y vitamina A para el sistema inmune y salud digestiva.' },
  { name: 'Papa fresca', pct: 6.3, emoji: '🥔', desc: 'Fuente natural de energía, con fibra y antioxidantes.' },
  { name: 'Aceites', pct: 1.6, emoji: '🫒', detail: 'Pescado, oliva y girasol', desc: 'Ácidos grasos esenciales para pelaje saludable y brillante.' },
  { name: 'Manzana deshidratada', pct: 1.3, emoji: '🍎', desc: 'Fibra natural para la digestión y equilibrio intestinal.' },
  { name: 'Almidón de papa', pct: 1.3, emoji: '🫙', desc: 'Textura suave y homogénea respetando el sabor natural.' },
  { name: 'Sustancias minerales', pct: 1.4, emoji: '💎', desc: 'Minerales esenciales para huesos, dientes y funciones vitales.' },
  { name: 'Lino', pct: 0.9, emoji: '🌾', desc: 'Fibra dietaria para digestión saludable y tránsito intestinal.' },
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
  ['Carbonato de calcio', '6500 mg'], ['Sulfato de hierro', '200 mg'],
  ['Sulfato de cobre', '71 mg'], ['Sulfato de manganeso', '54 mg'],
  ['Óxido de magnesio', '2 mg'], ['Sulfato de zinc', '1 mg'],
  ['Yodato de calcio', '4 mg'], ['Selenito de sodio', '2 mg'],
];

const vitamins = [
  ['Vitamina E', '474 mg'], ['Vitamina D3', '17 mg'],
  ['Colina', '431 mg'], ['Vitamina B2', '129 mg'],
  ['Vitamina B1', '431 mg'], ['Vitamina B12', '4 mg'],
];

const storageTips = [
  { icon: '❄️', title: 'Freezer', text: 'Mantené las raciones en el freezer.' },
  { icon: '🌙', title: 'La noche anterior', text: 'Pasá la ración del día siguiente a la heladera.' },
  { icon: '🌡️', title: 'Temperatura ambiente', text: 'Serví a temperatura ambiente. Podés templarlo un poco (¡pero no lo cocines de nuevo!)' },
  { icon: '📅', title: 'Una vez abierto', text: 'Conservar en la heladera hasta 3 días.' },
];

const macros = [
  { label: 'Proteína bruta', value: '14%' },
  { label: 'Grasa bruta', value: '7%' },
  { label: 'Carbohidratos', value: '1.5%' },
  { label: 'Humedad', value: '68–72%' },
];

/* ─── Hooks ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Icons ─── */
function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ChevronDown({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

/* ─── Section Label ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-brand-orange font-semibold text-xs tracking-[0.2em] uppercase mb-4">{children}</p>
  );
}

/* ─── Components ─── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className={`text-2xl font-display font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-brand-orange' : 'text-white'}`}>
            Gloty
          </span>
          <span className={`text-[10px] italic hidden sm:block transition-colors duration-300 ${scrolled ? 'text-brand-warm' : 'text-white/60'}`}>
            amor real, comida real
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            ['#que-es', '¿Qué es?'],
            ['#beneficios', 'Beneficios'],
            ['#ingredientes', 'Ingredientes'],
            ['#guia', 'Guía'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={`text-[13px] font-medium transition-colors duration-200 ${scrolled ? 'text-gray-500 hover:text-brand-orange' : 'text-white/70 hover:text-white'}`}
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white pl-3 pr-4 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 active:scale-95"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Pedí ahora</span>
          <span className="sm:hidden">Pedir</span>
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-dog.jpg"
          alt="Golden retriever esperando su comida Gloty"
          fill
          className="object-cover object-[center_20%]"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5 sm:bg-gradient-to-r sm:from-black/75 sm:via-black/30 sm:to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-20 sm:pb-0 w-full">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/10">
            <span>🐾</span>
            <span>Alimento natural para perros</span>
          </div>
          <h1 className="text-[3.25rem] sm:text-6xl md:text-7xl lg:text-8xl font-display text-white leading-[1.02] mb-6">
            Amor real,<br />
            <span className="text-brand-orange italic">comida real.</span>
          </h1>
          <p className="text-base sm:text-lg text-white/65 max-w-md mb-10 leading-relaxed font-light">
            Formulado por nutricionistas veterinarios con ingredientes 100% naturales.
            No es un balanceado — es <strong className="text-white font-medium">comida real</strong>.
          </p>
          <a
            href="#que-es"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-200 text-sm font-medium mt-2"
          >
            Conocé más <span>↓</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/30">
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function WhatIsGloty() {
  const { ref, visible } = useInView();

  return (
    <section id="que-es" className="py-20 sm:py-32 bg-white" ref={ref}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <SectionLabel>¿Qué es Gloty?</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-brand-charcoal mb-6 leading-tight">
            No es balanceado.<br />
            Es <span className="text-brand-orange italic">comida real</span>.
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Alimento natural para perros, formulado por nutricionistas veterinarios
            y elaborado con ingredientes reales aptos para consumo humano.
          </p>
        </div>

        {/* Product + feature cards */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-none">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-orange/10 to-amber-100/30 rounded-[2rem] -rotate-3" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-charcoal/15">
                <Image
                  src="/product.jpg"
                  alt="Gloty — Pollo & Vegetales, 400g"
                  width={600}
                  height={900}
                  className="w-full h-auto"
                  quality={90}
                />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {whatIsCards.map((item, i) => (
              <div
                key={i}
                className="group bg-brand-cream/60 rounded-2xl p-5 sm:p-6 border border-transparent hover:border-brand-orange/15 transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/5 flex items-start gap-4"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-2xl sm:text-3xl flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl mb-1 text-brand-charcoal">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Macro badges */}
            <div className="grid grid-cols-4 gap-2 pt-3">
              {macros.map((m) => (
                <div key={m.label} className="text-center bg-white rounded-xl p-3 border border-gray-100 hover:border-brand-orange/20 transition-colors duration-200">
                  <div className="text-brand-orange font-bold text-base sm:text-lg leading-tight">{m.value}</div>
                  <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider font-medium mt-0.5 leading-tight">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LifestyleBanner() {
  return (
    <section className="relative h-[45vh] sm:h-[55vh] overflow-hidden">
      <Image
        src="/lifestyle.jpg"
        alt="Preparando Gloty en la cocina"
        fill
        className="object-cover object-[center_30%]"
        quality={85}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-black/10 to-black/20" />
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-charcoal/90 font-display text-2xl sm:text-4xl italic leading-snug">
            Prepararlo es tan fácil<br className="hidden sm:block" /> como{' '}
            <span className="text-brand-orange">calentar y servir</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const { ref, visible } = useInView();

  return (
    <section id="beneficios" className="py-20 sm:py-32 bg-brand-cream" ref={ref}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <SectionLabel>Beneficios</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-brand-charcoal mb-4">
            ¿Por qué <span className="text-brand-orange">Gloty</span>?
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Cada ingrediente tiene un propósito. Cada decisión, un fundamento.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-5 sm:p-6 hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 border border-gray-100/80 hover:border-brand-orange/15"
            >
              <div className="w-11 h-11 bg-gradient-to-br from-brand-orange/10 to-amber-50 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                <span className="text-xl">{b.icon}</span>
              </div>
              <h3 className="font-semibold text-brand-charcoal mb-1 text-[15px]">{b.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ingredients() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showNutrition, setShowNutrition] = useState(false);
  const { ref, visible } = useInView();
  const maxPct = ingredients[0].pct;

  return (
    <section id="ingredientes" className="py-20 sm:py-32 bg-white" ref={ref}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12 sm:mb-16">
          <SectionLabel>Receta única</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-brand-charcoal mb-4">
            Pollo y vegetales
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Cada ingrediente elegido con un propósito nutricional específico.
          </p>
        </div>

        {/* Ingredients photo */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-brand-charcoal/8">
            <Image
              src="/ingredients.jpg"
              alt="Ingredientes naturales de Gloty"
              width={1200}
              height={600}
              className="w-full h-auto"
              quality={90}
            />
            {/* Subtle overlay at bottom for blend */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/30 to-transparent" />
          </div>
        </div>

        {/* Ingredient list */}
        <div className="max-w-3xl mx-auto space-y-1.5 mb-8">
          {ingredients.map((ing, i) => {
            const isExpanded = expanded === i;
            return (
              <button
                key={i}
                onClick={() => setExpanded(isExpanded ? null : i)}
                className={`w-full text-left rounded-xl px-4 py-3.5 transition-all duration-200 ${isExpanded ? 'bg-brand-cream border border-brand-orange/15 shadow-sm' : 'bg-gray-50/70 hover:bg-brand-cream/50 border border-transparent'}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg flex-shrink-0 w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm text-sm">
                    {ing.emoji}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-brand-charcoal text-sm">{ing.name}</span>
                      <span className="text-brand-orange font-bold text-xs tabular-nums">{ing.pct}%</span>
                      <div className="flex-1 h-1 bg-gray-200/80 rounded-full overflow-hidden ml-1">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-light transition-all duration-500"
                          style={{ width: `${(ing.pct / maxPct) * 100}%` }}
                        />
                      </div>
                    </div>
                    {isExpanded && (
                      <div className="mt-2 animate-fade-in">
                        <p className="text-xs text-gray-500 leading-relaxed">{ing.desc}</p>
                        {ing.detail && (
                          <p className="mt-1 text-[11px] text-brand-orange/60 italic">Composición: {ing.detail}</p>
                        )}
                      </div>
                    )}
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 text-gray-300 flex-shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-brand-orange' : ''}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Nutritional table toggle */}
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setShowNutrition(!showNutrition)}
            className="w-full bg-gray-50 hover:bg-brand-cream/60 rounded-xl p-4 flex items-center justify-between transition-colors duration-200 border border-gray-100"
          >
            <span className="font-semibold text-brand-charcoal text-sm flex items-center gap-2">
              📊 Tabla nutricional completa
            </span>
            <ChevronDown className={`w-4 h-4 text-brand-orange transition-transform duration-300 ${showNutrition ? 'rotate-180' : ''}`} />
          </button>

          {showNutrition && (
            <div className="mt-2 bg-brand-cream/50 rounded-xl p-5 sm:p-8 border border-gray-100 grid sm:grid-cols-2 gap-8 animate-fade-in">
              <div>
                <h4 className="font-display text-lg text-brand-charcoal mb-4">Minerales por kg</h4>
                <div className="space-y-0.5">
                  {minerals.map(([name, val]) => (
                    <div key={name} className="flex justify-between text-sm py-2 border-b border-gray-200/50 last:border-0">
                      <span className="text-gray-500">{name}</span>
                      <span className="font-semibold text-brand-charcoal tabular-nums">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-display text-lg text-brand-charcoal mb-4">Vitaminas por kg</h4>
                <div className="space-y-0.5">
                  {vitamins.map(([name, val]) => (
                    <div key={name} className="flex justify-between text-sm py-2 border-b border-gray-200/50 last:border-0">
                      <span className="text-gray-500">{name}</span>
                      <span className="font-semibold text-brand-charcoal tabular-nums">{val}</span>
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
    <section id="guia" className="py-20 sm:py-32 bg-brand-cream" ref={ref}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <SectionLabel>Guía</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-brand-charcoal mb-4">
            Alimentación y <span className="text-brand-orange">dosificación</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            La ración diaria es aproximadamente el 2% al 4% del peso corporal,
            ajustada según el nivel de actividad.
          </p>
        </div>

        {/* Feeding table */}
        <div className="max-w-md mx-auto mb-24">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-brand-charcoal/5 border border-gray-100">
            <div className="bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white p-6 text-center">
              <h3 className="font-display text-xl sm:text-2xl">Cantidad diaria recomendada</h3>
            </div>
            <div className="divide-y divide-gray-50">
              <div className="grid grid-cols-2 px-6 py-3 bg-gray-50/50 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <span>Peso del perro</span>
                <span className="text-right">Consumo diario</span>
              </div>
              {feedingGuide.map((row, i) => (
                <div key={row.weight} className="grid grid-cols-2 px-6 py-4 hover:bg-brand-orange/3 transition-colors duration-150">
                  <span className="text-brand-charcoal font-medium">{row.weight} kg</span>
                  <span className="text-right text-brand-orange font-bold text-lg">{row.grams} g</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transition plan */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-display text-brand-charcoal mb-3">
              ¿Cómo empezar?
            </h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Recomendamos este plan de 7 días para una transición gradual de &ldquo;comida procesada&rdquo; a &ldquo;comida real&rdquo;.
            </p>
          </div>

          {/* Bowl circles */}
          <div className="grid grid-cols-7 gap-1 sm:gap-3 mb-8">
            {transitionDays.map((d) => (
              <div key={d.day} className="text-center group">
                <div className="text-[10px] sm:text-xs font-bold text-brand-orange mb-2 sm:mb-3">
                  Día {d.day}
                </div>
                <div className="relative aspect-square mx-auto w-full max-w-[80px]">
                  {/* Bowl shadow */}
                  <div className="absolute inset-1 rounded-full bg-gray-200/50 blur-sm translate-y-1" />
                  {/* Bowl */}
                  <div className="absolute inset-0 rounded-full border-[3px] border-gray-300/60 bg-gray-100 overflow-hidden shadow-inner">
                    {/* Gloty portion */}
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-orange via-brand-orange to-brand-orange-light transition-all duration-700 ease-out"
                      style={{ height: `${d.pct}%` }}
                    />
                    {/* Old food */}
                    {d.pct < 100 && (
                      <div
                        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-amber-800/30 to-amber-700/20"
                        style={{ height: `${100 - d.pct}%` }}
                      />
                    )}
                  </div>
                </div>
                <div className="mt-2 sm:mt-3 text-[10px] sm:text-xs font-bold text-brand-charcoal">
                  {d.pct}%
                </div>
                <div className="text-[8px] sm:text-[10px] text-gray-400 font-medium">Gloty</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-amber-800/25 rounded-full border border-amber-800/20" /> Alimento anterior
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-brand-orange rounded-full" /> Gloty
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Storage() {
  const { ref, visible } = useInView();

  return (
    <section className="py-20 sm:py-32 bg-white" ref={ref}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <SectionLabel>Conservación</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-brand-charcoal mb-4">
            Manejo y <span className="text-brand-orange">conservación</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm">
            Al ser un producto sin conservantes, es importante cuidar la cadena de frío.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Photo */}
          <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-none order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-blue-50 to-brand-cream rounded-[2rem] rotate-2" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-charcoal/10">
                <Image
                  src="/storage.jpg"
                  alt="Conservación de Gloty en la heladera"
                  width={600}
                  height={900}
                  className="w-full h-auto"
                  quality={90}
                />
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="space-y-3 order-1 md:order-2">
            {storageTips.map((tip, i) => (
              <div
                key={i}
                className="bg-brand-cream/60 rounded-2xl p-5 flex gap-4 items-start border border-transparent hover:border-brand-orange/10 transition-all duration-200 hover:shadow-md hover:shadow-brand-orange/3"
              >
                <span className="text-2xl flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  {tip.icon}
                </span>
                <div>
                  <h4 className="font-semibold text-brand-charcoal text-sm mb-0.5">{tip.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{tip.text}</p>
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
    <footer className="bg-brand-charcoal border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/25 text-sm">
          © {new Date().getFullYear()} <span className="text-brand-orange/60 font-display">Gloty</span>
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/25 hover:text-white/50 text-sm transition-colors flex items-center gap-1.5"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          +54 9 11 5038-7441
        </a>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatIsGloty />
      <LifestyleBanner />
      <Benefits />
      <Ingredients />
      <FeedingGuide />
      <Storage />
      <Footer />

    </main>
  );
}
