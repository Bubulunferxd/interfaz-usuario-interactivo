import { Zap, Instagram, Twitter, Youtube, Music, MapPin, Calendar, Mail } from 'lucide-react';

const footerSections = [
  {
    title: 'Evento',
    links: ['Tickets VIP', 'Tickets Platinum', 'Tickets General', 'Lineup Completo', 'Mapa del Venue', 'Horarios'],
  },
  {
    title: 'Tienda',
    links: ['Merchandising', 'Ropa del Tour', 'Food Court', 'Bebidas', 'Combo Familiar', 'Promociones'],
  },
  {
    title: 'SinfronterasFest',
    links: ['Sobre el Festival', 'Patrocinadores', 'Aliados Comerciales', 'Prensa', 'Trabaja con Nosotros', 'Voluntarios'],
  },
  {
    title: 'Soporte',
    links: ['Terminos y Condiciones', 'Politica de Privacidad', 'Politica de Reembolso', 'Entregas a Domicilio', 'Preguntas Frecuentes', 'Contacto'],
  },
];

export function Footer() {
  return (
<<<<<<< HEAD
    <footer id="info" className="relative border-t border-teal-500/10 bg-[#050b12] noise">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-teal-500/50 to-transparent" />
=======
    <footer id="info" className="relative border-t border-white/10 bg-[#08080d] noise">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-amber-500/50 to-transparent" />
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
<<<<<<< HEAD
              <Zap className="w-6 h-6 text-teal-400" fill="currentColor" />
              <span className="font-display text-2xl tracking-wider">
                SINFRONTERAS<span className="text-neon-teal animate-neon-flicker">FEST</span>
=======
              <Zap className="w-6 h-6 text-amber-500" fill="currentColor" />
              <span className="font-display text-2xl tracking-wider">
                SINFRONTERAS<span className="text-amber-500">FEST</span>
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm mb-6">
              La experiencia musical mas electrizante de 2026. Sin fronteras, sin limites, pura musica y adrenalina en una noche inolvidable.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
<<<<<<< HEAD
                <MapPin className="w-4 h-4 text-teal-400" />
                La Paz, Bolivia
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4 text-teal-400" />
                15 de Diciembre, 2026 — 8:00 PM
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-teal-400" />
=======
                <MapPin className="w-4 h-4 text-amber-500" />
                La Paz, Bolivia
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4 text-amber-500" />
                15 de Diciembre, 2026 — 8:00 PM
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-amber-500" />
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
                info@sinfronterasfest.com
              </div>
            </div>
            <div className="flex gap-3">
              {[Instagram, Twitter, Youtube, Music].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
<<<<<<< HEAD
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-200 hover:scale-110"
=======
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500/30 transition-all duration-200 hover:scale-110"
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">{section.title}</h4>
              <ul className="space-y-2.5 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
<<<<<<< HEAD
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
=======
                    <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200">
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        <div className="pt-8 border-t border-teal-500/5 flex flex-col sm:flex-row items-center justify-between gap-4">
=======
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
          <p className="text-xs text-gray-600">
            © 2026 SinfronterasFest. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600">
            Hecho con pasion para los amantes de la musica
          </p>
        </div>
      </div>
    </footer>
  );
}
