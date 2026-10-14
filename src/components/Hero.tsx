import { Calendar, MapPin, Clock, ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/30215324/pexels-photo-30215324.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0f]" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-amber-500/20 mb-6 animate-slide-up">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-xs font-semibold text-amber-500 tracking-wider uppercase">Festival en vivo 2026</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="block text-white text-glow">SINFRONTERAS</span>
          <span className="block gradient-text animate-shimmer">FEST</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          La experiencia musical mas electrizante del año. Luces, sonido y pura adrenalina en una noche que no olvidaras.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-medium">15 Dic 2026</span>
          </div>
          <div className="w-px h-5 bg-gray-600" />
          <div className="flex items-center gap-2 text-gray-300">
            <Clock className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-medium">8:00 PM</span>
          </div>
          <div className="w-px h-5 bg-gray-600" />
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-medium">La Paz</span>
          </div>
        </div>

        <a
          href="#tickets"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-amber text-black font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-lg shadow-amber-500/30 animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Comprar Tickets
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="w-6 h-6 text-gray-500" />
      </div>
    </section>
  );
}
