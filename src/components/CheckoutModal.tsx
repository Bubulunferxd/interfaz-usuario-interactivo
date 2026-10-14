import { useState, useEffect } from 'react';
import { X, ArrowLeft, ArrowRight, Loader2, User, Mail, Phone, AlertCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import type { CustomerInfo } from '@/types';

const emptyInfo: CustomerInfo = { name: '', email: '', phone: '' };

export function CheckoutModal() {
  const {
    isCheckoutOpen,
    closeCheckout,
    items,
    totalPrice,
    submitOrder,
    isSubmitting,
    submitError,
  } = useCart();

  const [info, setInfo] = useState<CustomerInfo>(emptyInfo);
  const [errors, setErrors] = useState<Partial<CustomerInfo>>({});

  useEffect(() => {
    if (!isCheckoutOpen) {
      setInfo(emptyInfo);
      setErrors({});
    }
  }, [isCheckoutOpen]);

  if (!isCheckoutOpen) return null;

  const validate = (): boolean => {
    const newErrors: Partial<CustomerInfo> = {};
    if (!info.name.trim() || info.name.trim().length < 3) {
      newErrors.name = 'Ingresa tu nombre completo';
    }
    if (!info.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email)) {
      newErrors.email = 'Ingresa un correo valido';
    }
    if (!info.phone.trim() || info.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Ingresa un telefono valido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    await submitOrder(info);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"
        onClick={closeCheckout}
      />

      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto glass-strong rounded-2xl border border-white/10 animate-scale-in">
        <div className="flex items-center justify-between p-5 border-b border-white/10 sticky top-0 glass-strong z-10">
          <button
            onClick={closeCheckout}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </button>
          <h2 className="text-lg font-bold">Datos del comprador</h2>
          <button
            onClick={closeCheckout}
            className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <p className="text-sm text-gray-400">
            Completa tus datos para generar tu codigo QR de acceso al concierto.
          </p>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Nombre completo
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={info.name}
                onChange={(e) => setInfo({ ...info, name: e.target.value })}
                placeholder="Juan Perez"
                className={`w-full pl-11 pr-4 py-3 rounded-xl bg-black/40 border ${
                  errors.name ? 'border-red-500/50' : 'border-white/10'
                } text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-colors`}
              />
            </div>
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Correo electronico
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                value={info.email}
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
                placeholder="juan@email.com"
                className={`w-full pl-11 pr-4 py-3 rounded-xl bg-black/40 border ${
                  errors.email ? 'border-red-500/50' : 'border-white/10'
                } text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-colors`}
              />
            </div>
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Telefono
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="tel"
                value={info.phone}
                onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                placeholder="+52 555 123 4567"
                className={`w-full pl-11 pr-4 py-3 rounded-xl bg-black/40 border ${
                  errors.phone ? 'border-red-500/50' : 'border-white/10'
                } text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-colors`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Order summary */}
          <div className="rounded-xl bg-black/30 border border-white/5 p-4 space-y-2">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Resumen de tu orden
            </p>
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between text-sm">
                <span className="text-gray-300 truncate pr-2">
                  {item.product.name}
                  {item.selectedOption && ` (${item.selectedOption})`}
                  <span className="text-gray-500"> x{item.quantity}</span>
                </span>
                <span className="text-gray-400 flex-shrink-0">
                  ${item.product.price * item.quantity}
                </span>
              </div>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <div className="flex items-center justify-between font-bold">
              <span>Total</span>
              <span className="font-display text-2xl text-amber-500">${totalPrice}</span>
            </div>
          </div>

          {submitError && (
            <div className="flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-sm text-red-400">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{submitError}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl gradient-amber text-black font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform duration-200 shadow-lg shadow-amber-500/20 disabled:opacity-60 disabled:scale-100"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Procesando...
              </>
            ) : (
              <>
                Generar mi QR
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

          <p className="text-xs text-gray-600 text-center">
            Al confirmar recibiras tu codigo QR para ingresar al evento.
          </p>
        </form>
      </div>
    </div>
  );
}
