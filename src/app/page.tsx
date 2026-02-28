'use client';

import { useState } from 'react';
import Image from 'next/image';

/* ─── Data ─── */
const WHATSAPP = '5491150387441';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola! Me interesa Gloty para mi perro 🐶')}`;

const benefits = [
  { icon: '🔥', title: 'Cocinado a baja temperatura', desc: 'Proceso de cocción suave que preserva todos los nutrientes naturales.' },
  { icon: '🌿', title: '100% ingredientes naturales', desc: 'Solo ingredientes reales de alta calidad para el bienestar de tu mascota.' },
  { icon: '🚫', title: 'Sin cereales', desc: 'Libre de granos para una digestión más natural y saludable.' },
  { icon: '✨', title: 'Sin colorantes ni conservantes', desc: '100% libre de aditivos artificiales.' },
  { icon: '💊', title: 'Vitaminas y minerales', desc: 'Fortificado con nutrientes esenciales para una salud óptima.' },
  { icon: '🫁', title: 'Alta digestibilidad', desc: 'Fácil de digerir para una mejor absorción de nutrientes.' },
  { icon: '💪', title: 'Completo y equilibrado', desc: 'Todos los nutrientes necesarios en las proporciones correctas.' },
  { icon: '✨', title: 'Pelaje brillante', desc: 'Ácidos grasos esenciales para una piel sana y pelaje radiante.' },
  { icon: '🍗', title: 'Saludable y nutritivo', desc: 'Nutrición completa y balanceada para cada etapa.' },
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
  { name: 'Lino', pct: 0.9, emoji: '🌾', desc: 'Fibra dietaria para una digestión saludable y tránsito intestinal.' },
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
  { icon: '🌙', title: 'La noche anterior', text: 'Pasá la ración del día siguiente a la heladera la noche anterior.' },
  { icon: '🌡️', title: 'Temperatura ambiente', text: 'Serví a temperatura ambiente. Si tu perro es exigente, podés templarlo un poco (¡pero no lo cocines de nuevo!)' },
  { icon: '📅', title: 'Conservación', text: 'Una vez abierto, conservar en la heladera hasta 3 días.' },
];

/* ─── WhatsApp SVG ─── */
function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Components ─── */

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-display text-brand-orange font-bold tracking-tight">Gloty</span>
          <span className="text-[10px] text-brand-warm italic hidden sm:block">amor real, comida real</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-gray-500">
          <a href="#que-es" className="hover:text-brand-orange transition-colors duration-200">¿Qué es?</a>
          <a href="#beneficios" className="hover:text-brand-orange transition-colors duration-200">Beneficios</a>
          <a href="#ingredientes" className="hover:text-brand-orange transition-colors duration-200">Ingredientes</a>
          <a href="#guia" className="hover:text-brand-orange transition-colors duration-200">Guía</a>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white pl-3 pr-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/20"
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
    <section className="relative min-h-screen flex items-end sm:items-center pt-16 overflow-hidden bg-brand-cream">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-dog.jpg"
          alt="Golden retriever esperando su comida Gloty"
          fill
          className="object-cover object-top"
          priority
          quality={90}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/40 sm:to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-0 w-full">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
            <span>🐾</span>
            <span>Alimento natural para perros</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display text-white leading-[1.05] mb-5">
            Amor real,<br />
            <span className="text-brand-orange italic">comida real.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/75 max-w-md mb-10 leading-relaxed">
            Formulado por nutricionistas veterinarios con ingredientes 100% naturales.
            No es un balanceado — es <strong className="text-white">comida real</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-brand-orange/30"
            >
              Quiero Gloty 🧡
            </a>
            <a
              href="#que-es"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg text-center hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              Conocé más ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsGloty() {
  return (
    <section id="que-es" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3">¿Qué es Gloty?</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-brand-charcoal mb-6 leading-tight">
            No es balanceado.<br />
            Es <span className="text-brand-orange italic">comida real</span>.
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Gloty es un alimento natural para perros, formulado por nutricionistas veterinarios
            y elaborado con ingredientes reales aptos para consumo humano. Cocidos de manera suave
            para preservar todos sus nutrientes.
          </p>
        </div>

        {/* Product photo + feature cards */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative mx-auto max-w-sm md:max-w-none">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-charcoal/10">
              <Image
                src="/product.jpg"
                alt="Gloty — Pollo & Vegetales, alimento cocido natural para perros, 400g"
                width={600}
                height={900}
                className="w-full h-auto object-cover"
                quality={90}
              />
            </div>
          </div>
          <div className="space-y-4">
            {[
              { icon: '🚫', title: 'No es balanceado', desc: 'No es un ultraprocesado como las croquetas tradicionales.' },
              { icon: '🍳', title: 'Es comida real', desc: 'Ingredientes que podés reconocer, cocidos con cariño.' },
              { icon: '🩺', title: 'Avalado por profesionales', desc: 'Formulado por nutricionistas veterinarios.' },
            ].map((item, i) => (
              <div key={i} className="group bg-brand-cream rounded-2xl p-6 border border-brand-orange/0 hover:border-brand-orange/20 transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/5 flex items-start gap-4">
                <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <div>
                  <h3 className="font-display text-lg mb-1 text-brand-charcoal">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            {/* Macro badges from packaging */}
            <div className="grid grid-cols-4 gap-2 pt-2">
              {[
                { label: 'Proteína', value: '14%' },
                { label: 'Grasa', value: '7%' },
                { label: 'Carbos', value: '1.5%' },
                { label: 'Humedad', value: '68-72%' },
              ].map((m) => (
                <div key={m.label} className="text-center bg-white rounded-xl p-3 border border-brand-orange/10">
                  <div className="text-brand-orange font-bold text-lg">{m.value}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="beneficios" className="py-20 sm:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3">Beneficios</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-brand-charcoal mb-4">
            ¿Por qué <span className="text-brand-orange">Gloty</span>?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Cada ingrediente tiene un propósito. Cada decisión, un fundamento.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 border border-gray-100 hover:border-brand-orange/20"
            >
              <span className="text-2xl block mb-3 group-hover:scale-110 transition-transform duration-300 w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center">{b.icon}</span>
              <h3 className="font-semibold text-brand-charcoal mb-1.5 text-[15px]">{b.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
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

  const maxPct = ingredients[0].pct;

  return (
    <section id="ingredientes" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3">Receta única</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-brand-charcoal mb-4">
            Pollo y vegetales
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Cada ingrediente elegido con un propósito nutricional específico.
          </p>
        </div>

        {/* Hero ingredients photo */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-brand-orange/10">
            <Image
              src="/ingredients.jpg"
              alt="Ingredientes naturales de Gloty: pollo, zanahoria, calabaza, papa, aceite, manzana deshidratada"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              quality={90}
            />
          </div>
        </div>

        {/* Compact ingredient list */}
        <div className="max-w-3xl mx-auto space-y-2 mb-8">
          {ingredients.map((ing, i) => {
            const isExpanded = expanded === i;
            return (
              <button
                key={i}
                onClick={() => setExpanded(isExpanded ? null : i)}
                className={`w-full text-left rounded-xl px-4 py-3 transition-all duration-200 ${isExpanded ? 'bg-brand-cream border border-brand-orange/20' : 'bg-gray-50 hover:bg-brand-cream border border-transparent'}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl flex-shrink-0">{ing.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-brand-charcoal text-sm">{ing.name}</span>
                      <span className="text-brand-orange font-bold text-sm">{ing.pct}%</span>
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden ml-1">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-light"
                          style={{ width: `${(ing.pct / maxPct) * 100}%` }}
                        />
                      </div>
                    </div>
                    {isExpanded && (
                      <div className="animate-fade-in">
                        <p className="text-xs text-gray-500 leading-relaxed">{ing.desc}</p>
                        {ing.detail && (
                          <p className="mt-1 text-xs text-brand-orange/70 italic">Composición: {ing.detail}</p>
                        )}
                      </div>
                    )}
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>

        {/* Nutritional tables */}
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setShowNutrition(!showNutrition)}
            className="w-full bg-brand-cream rounded-xl p-4 flex items-center justify-between hover:bg-brand-cream-dark/50 transition-colors duration-200 border border-brand-orange/5"
          >
            <span className="font-semibold text-brand-charcoal text-sm flex items-center gap-2">
              📊 Tabla nutricional completa
            </span>
            <svg
              className={`w-4 h-4 text-brand-orange transition-transform duration-300 ${showNutrition ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showNutrition && (
            <div className="mt-2 bg-brand-cream rounded-xl p-5 sm:p-8 border border-brand-orange/5 grid sm:grid-cols-2 gap-8 animate-fade-in">
              <div>
                <h4 className="font-display text-lg text-brand-charcoal mb-4">Minerales por kg</h4>
                <div className="space-y-1">
                  {minerals.map(([name, val]) => (
                    <div key={name} className="flex justify-between text-sm py-1.5 border-b border-brand-cream-dark/60 last:border-0">
                      <span className="text-gray-500">{name}</span>
                      <span className="font-semibold text-brand-charcoal">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-display text-lg text-brand-charcoal mb-4">Vitaminas por kg</h4>
                <div className="space-y-1">
                  {vitamins.map(([name, val]) => (
                    <div key={name} className="flex justify-between text-sm py-1.5 border-b border-brand-cream-dark/60 last:border-0">
                      <span className="text-gray-500">{name}</span>
                      <span className="font-semibold text-brand-charcoal">{val}</span>
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
  return (
    <section id="guia" className="py-20 sm:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3">Guía</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-brand-charcoal mb-4">
            Alimentación y <span className="text-brand-orange">dosificación</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            La ración diaria recomendada es aproximadamente el 2% al 4% del peso corporal.
            Son valores estimativos que deben ajustarse según el nivel de actividad.
          </p>
        </div>

        {/* Feeding table */}
        <div className="max-w-md mx-auto mb-20">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white p-5 text-center">
              <h3 className="font-display text-xl">Cantidad diaria recomendada</h3>
            </div>
            <div className="divide-y divide-gray-50">
              <div className="grid grid-cols-2 px-6 py-3 bg-gray-50 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <span>🐕 Peso</span>
                <span className="text-right">🍽️ Consumo diario</span>
              </div>
              {feedingGuide.map((row) => (
                <div key={row.weight} className="grid grid-cols-2 px-6 py-4 hover:bg-brand-orange/3 transition-colors duration-200">
                  <span className="text-brand-charcoal font-medium">{row.weight} kg</span>
                  <span className="text-right text-brand-orange font-bold text-lg">{row.grams} g</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transition plan */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-display text-brand-charcoal mb-3">
              ¿Cómo empezar?
            </h3>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              El estómago de tu perro necesita adaptarse al cambio de &ldquo;comida procesada&rdquo; a &ldquo;comida real&rdquo;.
              Recomendamos este plan de 7 días para una transición gradual.
            </p>
          </div>

          {/* Transition visual — bowls-inspired circles */}
          <div className="grid grid-cols-7 gap-1.5 sm:gap-3 mb-6">
            {transitionDays.map((d) => (
              <div key={d.day} className="text-center">
                <div className="text-[10px] sm:text-xs font-bold text-brand-orange mb-2">
                  Día {d.day}
                </div>
                {/* Bowl circle */}
                <div className="relative aspect-square mx-auto w-full max-w-[72px]">
                  <div className="absolute inset-0 rounded-full border-2 border-gray-200 bg-gray-100 overflow-hidden">
                    {/* Gloty portion — fills from bottom */}
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-orange to-brand-orange-light transition-all duration-500 rounded-b-full"
                      style={{ height: `${d.pct}%` }}
                    />
                    {/* Old food portion */}
                    <div
                      className="absolute top-0 left-0 right-0 bg-gradient-to-b from-amber-800/40 to-amber-700/30 transition-all duration-500"
                      style={{ height: `${100 - d.pct}%` }}
                    />
                  </div>
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-semibold text-brand-charcoal">
                  {d.pct}%
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-amber-800/40 rounded-full" /> Anterior
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-brand-orange rounded-full" /> Gloty
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Storage() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3">Conservación</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-brand-charcoal mb-4">
            Manejo y <span className="text-brand-orange">conservación</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            Al ser un producto sin conservantes, es importante cuidar la cadena de frío.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Photo */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-brand-charcoal/10 mx-auto max-w-sm md:max-w-none">
            <Image
              src="/storage.jpg"
              alt="Conservación de Gloty en la heladera"
              width={600}
              height={900}
              className="w-full h-auto object-cover"
              quality={90}
            />
          </div>
          {/* Tips */}
          <div className="space-y-4">
            {storageTips.map((tip, i) => (
              <div key={i} className="bg-brand-cream rounded-2xl p-5 flex gap-4 items-start border border-brand-orange/5 hover:border-brand-orange/15 transition-colors duration-200">
                <span className="text-2xl flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">{tip.icon}</span>
                <div>
                  <h4 className="font-semibold text-brand-charcoal text-sm mb-1">{tip.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-charcoal" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="text-7xl mb-8">🐾</div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-white mb-5 leading-tight">
          Dale lo <span className="text-brand-orange italic">mejor</span>
        </h2>
        <p className="text-white/50 mb-12 text-lg max-w-md mx-auto leading-relaxed">
          Tu perro merece comida real. Escribinos por WhatsApp y empezá hoy.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-200 hover:scale-[1.02] shadow-2xl shadow-green-500/30"
        >
          <WhatsAppIcon className="w-6 h-6" />
          Escribinos por WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} <span className="text-brand-orange/80 font-display">Gloty</span> — Amor real, comida real.
        </p>
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
      <Benefits />
      <Ingredients />
      <FeedingGuide />
      <Storage />
      <CTA />
      <Footer />

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl shadow-green-500/30 hover:scale-110 transition-all duration-200"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </main>
  );
}
