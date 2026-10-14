import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { X, CheckCircle2, Download, Calendar, Clock, MapPin, Ticket, ShoppingBag, UtensilsCrossed } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const typeIcons: Record<string, typeof Ticket> = {
  ticket: Ticket,
  merch: ShoppingBag,
  food: UtensilsCrossed,
};

const typeLabels: Record<string, string> = {
  ticket: 'Ticket',
  merch: 'Merch',
  food: 'Comida',
};

export function QRConfirmation() {
  const { orderResult, dismissOrder } = useCart();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!orderResult || !canvasRef.current) return;

    const qrData = JSON.stringify({
      code: orderResult.confirmationCode,
      orderId: orderResult.id,
      name: orderResult.customer.name,
      total: orderResult.total,
    });

    QRCode.toCanvas(canvasRef.current, qrData, {
      width: 240,
      margin: 2,
      color: { dark: '#0a0a0f', light: '#ffffff' },
      errorCorrectionLevel: 'H',
    }).catch(() => {});
  }, [orderResult]);

  if (!orderResult) return null;

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `sinfronterasfest-${orderResult.confirmationCode}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 overflow-y-auto">
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md animate-fade-in" />

      <div className="relative w-full max-w-md my-8 animate-scale-in">
        <div className="glass-strong rounded-3xl border border-amber-500/20 overflow-hidden card-glow-vip">
          {/* Header */}
          <div className="relative gradient-amber p-6 text-center text-black overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-black/15 flex items-center justify-center mx-auto mb-3 animate-pulse-glow">
                <CheckCircle2 className="w-8 h-8" fill="currentColor" />
              </div>
              <h2 className="font-display text-3xl">¡ORDEN CONFIRMADA!</h2>
              <p className="text-sm font-medium text-black/70 mt-1">
                Tu acceso al concierto esta listo
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 space-y-5">
            {/* Customer name */}
            <div className="text-center">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Asistente</p>
              <p className="text-lg font-bold">{orderResult.customer.name}</p>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center">
              <div className="p-4 rounded-2xl bg-white border-4 border-amber-500/20">
                <canvas ref={canvasRef} />
              </div>
              <p className="mt-3 font-display text-2xl tracking-wider text-amber-500">
                {orderResult.confirmationCode}
              </p>
              <p className="text-xs text-gray-500">
                Muestra este codigo en la entrada del evento
              </p>
            </div>

            {/* Event info */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5">
                <Calendar className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-semibold">15 Dic</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5">
                <Clock className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-semibold">8:00 PM</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-semibold">La Paz</span>
              </div>
            </div>

            {/* Items list */}
            <div className="rounded-xl bg-black/30 border border-white/5 p-4 space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                Detalle de tu orden
              </p>
              {orderResult.items.map((item) => {
                const Icon = typeIcons[item.product.type] || Ticket;
                return (
                  <div key={item.id} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-300">
                      <Icon className="w-3.5 h-3.5 text-amber-500" />
                      {item.product.name}
                      {item.selectedOption && ` (${item.selectedOption})`}
                      <span className="text-gray-500">x{item.quantity}</span>
                    </span>
                    <span className="text-gray-400">
                      ${item.product.price * item.quantity}
                    </span>
                  </div>
                );
              })}
              <div className="h-px bg-white/10 my-2" />
              <div className="flex items-center justify-between font-bold">
                <span>Total pagado</span>
                <span className="font-display text-xl text-amber-500">
                  ${orderResult.total}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleDownload}
                className="flex-1 py-3 rounded-xl bg-white/10 border border-white/15 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/15 transition-colors"
              >
                <Download className="w-4 h-4" />
                Descargar QR
              </button>
              <button
                onClick={dismissOrder}
                className="flex-1 py-3 rounded-xl gradient-amber text-black font-bold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                Listo
              </button>
            </div>

            <p className="text-xs text-gray-600 text-center">
              Guarda tu QR. Tambien lo encontraras en {orderResult.customer.email}
            </p>
          </div>
        </div>

        <button
          onClick={dismissOrder}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
