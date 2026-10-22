import { useState } from 'react';
import { Plus, Check, Shirt, ShoppingBag } from 'lucide-react';
import { merch } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { Product } from '@/types';

export function Merch() {
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const handleAdd = (product: Product) => {
    const size = selectedSizes[product.id] || product.options?.[0];
    addToCart(product, size);
  };

  return (
<<<<<<< HEAD
    <section id="merch" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a1420]">
=======
    <section id="merch" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0c0c14]">
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-14 reveal ${visible ? 'reveal-visible' : ''}`} ref={ref}>
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-bold tracking-widest uppercase">
            <Shirt className="w-4 h-4" />
            Merchandising
          </div>
          <h2 className="font-display text-5xl sm:text-6xl mt-2 mb-3">
            ROPA DEL <span className="text-cyan-400 text-glow-cyan">CONCIERTO</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Llevate un pedazo de la experiencia. Edicion limitada del tour 2026.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {merch.map((item, index) => (
            <div
              key={item.id}
<<<<<<< HEAD
              className={`relative rounded-2xl glass border border-teal-500/8 card-shine hover-glow-cyan overflow-hidden group transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 reveal ${visible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0d1a26]">
=======
              className={`relative rounded-2xl glass border border-white/8 card-shine hover-glow-cyan overflow-hidden group transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 reveal ${visible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a26]">
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                {item.badge && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-cyan-500 text-black text-xs font-bold">
                    {item.badge}
                  </div>
                )}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg glass flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 text-cyan-400" />
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-sm sm:text-base font-bold mb-1 line-clamp-1">{item.name}</h3>
                <p className="text-xs text-gray-400 mb-3 line-clamp-2">{item.description}</p>

                {item.options && (
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {item.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setSelectedSizes((prev) => ({ ...prev, [item.id]: opt }))}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                            (selectedSizes[item.id] || item.options?.[0]) === opt
                              ? 'bg-cyan-500 text-black'
                              : 'bg-white/5 text-gray-400 hover:bg-white/10'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-cyan-400">${item.price}</span>
                  <button
                    onClick={() => handleAdd(item)}
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
