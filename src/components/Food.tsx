import { Plus, UtensilsCrossed, Coffee } from 'lucide-react';
import { food, drinks } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Food() {
  const { addToCart } = useCart();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const { ref: refDrinks, visible: visibleDrinks } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="food" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Comida */}
        <div className={`text-center mb-14 reveal ${visible ? 'reveal-visible' : ''}`} ref={ref}>
          <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-bold tracking-widest uppercase">
            <UtensilsCrossed className="w-4 h-4" />
            Food Court
          </div>
          <h2 className="font-display text-5xl sm:text-6xl mt-2 mb-3">
            COMIDA Y <span className="text-orange-400" style={{ textShadow: '0 0 30px rgba(251,146,60,0.4)' }}>BEBIDAS</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Reserva tu comida y saltate las filas. Lista para recoger al llegar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {food.map((item, index) => (
            <div
              key={item.id}
<<<<<<< HEAD
              className={`relative rounded-2xl glass border border-teal-500/8 card-shine hover-glow-orange overflow-hidden group transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 reveal ${visible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="relative aspect-square overflow-hidden bg-[#0d1a26]">
=======
              className={`relative rounded-2xl glass border border-white/8 card-shine hover-glow-orange overflow-hidden group transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 reveal ${visible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="relative aspect-square overflow-hidden bg-[#1a1a26]">
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {item.badge && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-orange-500 text-black text-xs font-bold">
                    {item.badge}
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-sm sm:text-base font-bold mb-1 line-clamp-1">{item.name}</h3>
                <p className="text-xs text-gray-400 mb-3 line-clamp-2">{item.description}</p>

                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-orange-400">${item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500 hover:text-black transition-all duration-200 hover:scale-110 flex items-center justify-center"
                    aria-label={`Agregar ${item.name}`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bebidas */}
        <div className={`text-center mb-10 reveal ${visibleDrinks ? 'reveal-visible' : ''}`} ref={refDrinks}>
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-bold tracking-widest uppercase">
            <Coffee className="w-4 h-4" />
            Bebidas
          </div>
          <h3 className="font-display text-4xl sm:text-5xl mt-2 mb-2">
            REFRESCA EL <span className="text-cyan-400 text-glow-cyan">AMBIENTE</span>
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Bebidas bien frias para acompañar tu noche. Selecciona y agrega al carrito.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {drinks.map((item, index) => (
            <div
              key={item.id}
<<<<<<< HEAD
              className={`relative rounded-2xl glass border border-teal-500/8 card-shine hover-glow-cyan overflow-hidden group transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 reveal ${visibleDrinks ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="relative aspect-square overflow-hidden bg-[#0d1a26]">
=======
              className={`relative rounded-2xl glass border border-white/8 card-shine hover-glow-cyan overflow-hidden group transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 reveal ${visibleDrinks ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="relative aspect-square overflow-hidden bg-[#1a1a26]">
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {item.badge && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-cyan-500 text-black text-xs font-bold">
                    {item.badge}
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-sm sm:text-base font-bold mb-1 line-clamp-1">{item.name}</h3>
                <p className="text-xs text-gray-400 mb-3 line-clamp-2">{item.description}</p>

                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-cyan-400">${item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-200 hover:scale-110 flex items-center justify-center"
                    aria-label={`Agregar ${item.name}`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
