'use client';

import { useState } from 'react';

/* ─── Data from PDF ─── */
const WHATSAPP = '5491150387441';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola! Me interesa Gloty para mi perro 🐶')}`;

const benefits = [
  { icon: '🔥', title: 'Cocinado a baja temperatura', desc: 'Proceso de cocción suave que preserva todos los nutrientes naturales.' },
  { icon: '🌿', title: '100% ingredientes naturales', desc: 'Solo ingredientes reales de alta calidad para el bienestar de tu mascota.' },
  { icon: '🚫', title: 'Sin cereales', desc: 'Libre de granos para una digestión más natural y saludable.' },
  { icon: '✨', title: 'Sin colorantes ni conservantes', desc: '100% libre de aditivos artificiales. Solo ingredientes naturales.' },
  { icon: '💊', title: 'Vitaminas y minerales', desc: 'Fortificado con nutrientes esenciales para una salud óptima.' },
  { icon: '🫁', title: 'Alta digestibilidad', desc: 'Fácil de digerir para una mejor absorción de nutrientes.' },
  { icon: '💪', title: 'Completo y equilibrado', desc: 'Contiene todos los nutrientes necesarios en las proporciones correctas.' },
  { icon: '✨', title: 'Pelaje brillante', desc: 'Ácidos grasos esenciales para una piel sana y pelaje radiante.' },
  { icon: '🍗', title: 'Saludable y nutritivo', desc: 'Formulado para proporcionar una nutrición completa y balanceada.' },
];

const ingredients = [
  { name: 'Pollo', pct: 67.8, color: 'bg-brand-orange', detail: 'Suprema 32%, pechuga cms 25.5%, piel 3.4%, hígado 27%', desc: 'Proteína de alta calidad para músculos fuertes, piel saludable y pelaje brillante.' },
  { name: 'Zanahoria', pct: 10.6, color: 'bg-orange-400', desc: 'Rica en fibra y vitamina A. Fortalece las defensas y la salud de piel y pelo.' },
  { name: 'Calabaza', pct: 8.5, color: 'bg-amber-500', desc: 'Antioxidantes y vitamina A para el sistema inmune y salud digestiva.' },
  { name: 'Papa fresca', pct: 6.3, color: 'bg-yellow-600', desc: 'Fuente natural de energía, con fibra y antioxidantes.' },
  { name: 'Aceites', pct: 1.6, color: 'bg-green-600', detail: 'Pescado, oliva y girasol', desc: 'Ácidos grasos esenciales para pelaje saludable y brillante.' },
  { name: 'Manzana deshidratada', pct: 1.3, color: 'bg-red-400', desc: 'Fibra natural para la digestión y equilibrio intestinal.' },
  { name: 'Almidón de papa', pct: 1.3, color: 'bg-yellow-500', desc: 'Textura suave y homogénea respetando el sabor natural.' },
  { name: 'Sustancias minerales', pct: 1.4, color: 'bg-stone-500', desc: 'Minerales esenciales para huesos, dientes y funciones vitales.' },
  { name: 'Lino', pct: 0.9, color: 'bg-amber-700', desc: 'Fibra dietaria para una digestión saludable y tránsito intestinal.' },
];

const feedingGuide = [
  { weight: 5, grams: 200 },
  { weight: 10, grams: 350 },
  { weight: 20, grams: 600 },
  { weight: 30, grams: 800 },
  { weight: 40, grams: 1000 },
];

const transitionDays = [
  { day: 1, old: 85, new: 15 },
  { day: 2, old: 70, new: 30 },
  { day: 3, old: 60, new: 40 },
  { day: 4, old: 50, new: 50 },
  { day: 5, old: 35, new: 65 },
  { day: 6, old: 15, new: 85 },
  { day: 7, old: 0, new: 100 },
];

const storageTips = [
  { icon: '❄️', text: 'Mantené las raciones en el freezer.' },
  { icon: '🌡️', text: 'Serví a temperatura ambiente. Si tu perro es exigente, podés templarlo un poco (¡pero no lo cocines de nuevo!)' },
  { icon: '🌙', text: 'Pasá la ración del día siguiente a la heladera la noche anterior.' },
  { icon: '📅', text: 'Una vez abierto, conservar en la heladera hasta 3 días.' },
];

/* ─── Components ─── */

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-orange/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-2xl font-display text-brand-orange font-bold">
          Gloty
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-charcoal/70">
          <a href="#que-es" className="hover:text-brand-orange transition-colors">¿Qué es?</a>
          <a href="#ingredientes" className="hover:text-brand-orange transition-colors">Ingredientes</a>
          <a href="#guia" className="hover:text-brand-orange transition-colors">Guía</a>
          <a href="#conservacion" className="hover:text-brand-orange transition-colors">Conservación</a>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all hover:scale-105"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Pedí ahora
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative">
        <div className="animate-fade-in-up">
          <div className="inline-block bg-brand-orange/10 text-brand-orange px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            🐾 Alimento natural para perros
          </div>
          <h1 className="text-5xl md:text-7xl font-display text-brand-charcoal leading-tight mb-4">
            Amor real,<br />
            <span className="text-brand-orange italic">comida real.</span>
          </h1>
          <p className="text-lg text-brand-charcoal/70 max-w-md mb-8 leading-relaxed">
            Formulado por nutricionistas veterinarios con ingredientes 100% naturales.
            No es un balanceado tradicional — es <strong>comida real</strong> para tu mejor amigo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-brand-orange/30"
            >
              Quiero Gloty 🧡
            </a>
            <a
              href="#que-es"
              className="border-2 border-brand-charcoal/20 text-brand-charcoal px-8 py-4 rounded-full font-semibold text-lg text-center hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              Conocé más ↓
            </a>
          </div>
        </div>

        {/* Hero image placeholder */}
        <div className="relative animate-float hidden md:block">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-amber-200/30 rounded-[3rem] rotate-6" />
            <div className="absolute inset-0 bg-brand-cream rounded-[3rem] border-2 border-brand-orange/10 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-8xl mb-4">🐕</div>
                <p className="text-brand-orange font-display text-3xl italic">Gloty</p>
                <p className="text-brand-charcoal/50 text-sm mt-2">Pollo y vegetales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsGloty() {
  return (
    <section id="que-es" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-brand-charcoal mb-6">
            ¿Qué es <span className="text-brand-orange">Gloty</span>?
          </h2>
          <p className="text-lg text-brand-charcoal/70 leading-relaxed">
            Gloty es un alimento natural para perros, formulado por nutricionistas veterinarios
            y elaborado con ingredientes reales aptos para consumo. Cocidos de manera suave
            para preservar sus nutrientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-brand-cream rounded-2xl p-8 text-center border border-brand-orange/10 hover:border-brand-orange/30 transition-colors">
            <div className="text-4xl mb-4">🚫</div>
            <h3 className="font-display text-xl mb-2 text-brand-charcoal">No es balanceado</h3>
            <p className="text-brand-charcoal/60 text-sm">No es un ultraprocesado como las croquetas tradicionales.</p>
          </div>
          <div className="bg-brand-cream rounded-2xl p-8 text-center border border-brand-orange/10 hover:border-brand-orange/30 transition-colors">
            <div className="text-4xl mb-4">🍳</div>
            <h3 className="font-display text-xl mb-2 text-brand-charcoal">Es comida real</h3>
            <p className="text-brand-charcoal/60 text-sm">Ingredientes que podés reconocer, cocidos con cariño.</p>
          </div>
          <div className="bg-brand-cream rounded-2xl p-8 text-center border border-brand-orange/10 hover:border-brand-orange/30 transition-colors">
            <div className="text-4xl mb-4">🩺</div>
            <h3 className="font-display text-xl mb-2 text-brand-charcoal">Avalado por profesionales</h3>
            <p className="text-brand-charcoal/60 text-sm">Formulado por nutricionistas veterinarios.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display text-brand-charcoal text-center mb-4">
          ¿Por qué <span className="text-brand-orange">Gloty</span>?
        </h2>
        <p className="text-brand-charcoal/60 text-center mb-16 max-w-xl mx-auto">
          Cada ingrediente tiene un propósito. Cada decisión, un fundamento.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 hover:shadow-lg hover:shadow-brand-orange/5 transition-all duration-300 border border-transparent hover:border-brand-orange/20 group"
            >
              <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">{b.icon}</span>
              <h3 className="font-semibold text-brand-charcoal mb-1.5">{b.title}</h3>
              <p className="text-sm text-brand-charcoal/60 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ingredients() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="ingredientes" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-orange/10 text-brand-orange px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            🍗 Receta única
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-brand-charcoal mb-4">
            Pollo y vegetales
          </h2>
          <p className="text-brand-charcoal/60 max-w-xl mx-auto">
            Cada ingrediente elegido con un propósito nutricional específico.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {ingredients.map((ing, i) => (
            <div key={i} className="bg-brand-cream rounded-2xl overflow-hidden border border-brand-orange/5">
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full p-5 flex items-center gap-4 text-left hover:bg-brand-orange/5 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-brand-charcoal">{ing.name}</span>
                    <span className="text-brand-orange font-bold text-lg">{ing.pct}%</span>
                  </div>
                  <div className="w-full bg-brand-cream-dark rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${ing.color} transition-all duration-700`}
                      style={{ width: `${Math.max(ing.pct * 1.3, 5)}%` }}
                    />
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-brand-charcoal/40 transition-transform ${expanded === i ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expanded === i && (
                <div className="px-5 pb-5 text-sm text-brand-charcoal/70 border-t border-brand-orange/5 pt-3">
                  <p>{ing.desc}</p>
                  {ing.detail && (
                    <p className="mt-1 text-xs text-brand-charcoal/50 italic">Composición: {ing.detail}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Nutritional tables */}
        <div className="max-w-3xl mx-auto mt-12">
          <details className="bg-brand-cream rounded-2xl border border-brand-orange/5 overflow-hidden">
            <summary className="p-5 cursor-pointer font-semibold text-brand-charcoal hover:text-brand-orange transition-colors">
              📊 Ver tabla nutricional completa
            </summary>
            <div className="px-5 pb-5 grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-sm text-brand-orange mb-3">Minerales por kg</h4>
                <div className="space-y-1.5 text-sm">
                  {[
                    ['Carbonato de calcio', '6500 mg'],
                    ['Sulfato de hierro', '200 mg'],
                    ['Sulfato de cobre', '71 mg'],
                    ['Sulfato de manganeso', '54 mg'],
                    ['Óxido de magnesio', '2 mg'],
                    ['Sulfato de zinc', '1 mg'],
                    ['Yodato de calcio', '4 mg'],
                    ['Selenito de sodio', '2 mg'],
                  ].map(([name, val]) => (
                    <div key={name} className="flex justify-between text-brand-charcoal/70">
                      <span>{name}</span>
                      <span className="font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-brand-orange mb-3">Vitaminas por kg</h4>
                <div className="space-y-1.5 text-sm">
                  {[
                    ['Vitamina E', '474 mg'],
                    ['Colina', '431 mg'],
                    ['Vitamina B1', '431 mg'],
                    ['Vitamina B2', '129 mg'],
                    ['Vitamina D3', '17 mg'],
                    ['Vitamina B12', '4 mg'],
                  ].map(([name, val]) => (
                    <div key={name} className="flex justify-between text-brand-charcoal/70">
                      <span>{name}</span>
                      <span className="font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

function FeedingGuide() {
  return (
    <section id="guia" className="py-24 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-brand-charcoal mb-4">
            Guía de <span className="text-brand-orange">alimentación</span>
          </h2>
          <p className="text-brand-charcoal/60 max-w-xl mx-auto">
            La ración diaria recomendada es aproximadamente el 2% al 4% del peso corporal.
            Son valores estimativos que deben ajustarse según el nivel de actividad.
          </p>
        </div>

        {/* Dosification table */}
        <div className="max-w-lg mx-auto mb-20">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-orange/10">
            <div className="bg-brand-orange text-white p-4 text-center">
              <h3 className="font-display text-xl">Cantidad diaria recomendada</h3>
            </div>
            <div className="divide-y divide-brand-cream-dark">
              <div className="grid grid-cols-2 p-4 bg-brand-cream/50 font-semibold text-sm text-brand-charcoal">
                <span>🐕 Peso del perro</span>
                <span className="text-right">🍽️ Consumo diario</span>
              </div>
              {feedingGuide.map((row) => (
                <div key={row.weight} className="grid grid-cols-2 p-4 hover:bg-brand-orange/5 transition-colors">
                  <span className="text-brand-charcoal font-medium">{row.weight} kg</span>
                  <span className="text-right text-brand-orange font-bold">{row.grams} g</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transition plan */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-display text-brand-charcoal text-center mb-3">
            ¿Cómo empezar?
          </h3>
          <p className="text-brand-charcoal/60 text-center mb-10 text-sm max-w-lg mx-auto">
            El estómago de tu perro necesita adaptarse al cambio. Seguí este plan de 7 días para una transición gradual.
          </p>
          <div className="grid grid-cols-7 gap-2 md:gap-3">
            {transitionDays.map((d) => (
              <div key={d.day} className="text-center">
                <div className="text-xs font-semibold text-brand-orange mb-2">Día {d.day}</div>
                <div className="bg-white rounded-xl overflow-hidden h-28 md:h-36 border border-brand-orange/10 flex flex-col relative">
                  <div
                    className="bg-gray-300 transition-all duration-500"
                    style={{ height: `${d.old}%` }}
                  />
                  <div
                    className="bg-brand-orange transition-all duration-500 flex-1"
                  />
                </div>
                <div className="mt-2 text-[10px] md:text-xs text-brand-charcoal/50">
                  {d.new}% Gloty
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-6 text-xs text-brand-charcoal/50">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-gray-300 rounded" /> Alimento anterior</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-brand-orange rounded" /> Gloty</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Storage() {
  return (
    <section id="conservacion" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display text-brand-charcoal text-center mb-4">
          Manejo y <span className="text-brand-orange">conservación</span>
        </h2>
        <p className="text-brand-charcoal/60 text-center mb-12 max-w-lg mx-auto text-sm">
          Al ser un producto sin conservantes, es importante cuidar la cadena de frío.
        </p>
        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
          {storageTips.map((tip, i) => (
            <div key={i} className="bg-brand-cream rounded-2xl p-6 flex gap-4 items-start border border-brand-orange/5">
              <span className="text-3xl flex-shrink-0">{tip.icon}</span>
              <p className="text-sm text-brand-charcoal/70 leading-relaxed">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-brand-charcoal relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-orange/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-3xl mx-auto px-4 text-center relative">
        <div className="text-6xl mb-6">🐾</div>
        <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
          Dale lo <span className="text-brand-orange italic">mejor</span>
        </h2>
        <p className="text-white/60 mb-10 text-lg max-w-md mx-auto">
          Tu perro merece comida real. Escribinos por WhatsApp y empezá hoy.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-2xl shadow-green-500/30"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Escribinos por WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} <span className="text-brand-orange font-display">Gloty</span> — Amor real, comida real.
        </p>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatIsGloty />
      <Benefits />
      <Ingredients />
      <FeedingGuide />
      <Storage />
      <CTA />
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-2xl shadow-green-500/40 hover:scale-110 transition-all"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </main>
  );
}
