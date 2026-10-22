import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
<<<<<<< HEAD
import {
  X, CheckCircle2, Download, Calendar, Clock, MapPin,
  Ticket, ShoppingBag, UtensilsCrossed, Armchair,
  User, Hash, DollarSign, Users, Sparkles, Zap,
} from 'lucide-react';
=======
import { X, CheckCircle2, Download, Calendar, Clock, MapPin, Ticket, ShoppingBag, UtensilsCrossed } from 'lucide-react';
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
import { useCart } from '@/context/CartContext';

const typeIcons: Record<string, typeof Ticket> = {
  ticket: Ticket,
  merch: ShoppingBag,
  food: UtensilsCrossed,
};

<<<<<<< HEAD
const zoneLabels: Record<string, string> = {
  vip: 'VIP Experience',
  platinum: 'Platinum Access',
  general: 'General Admission',
};

const zoneColors: Record<string, string> = {
  vip: 'text-teal-300',
  platinum: 'text-cyan-300',
  general: 'text-sky-300',
};

const zoneBadgeBg: Record<string, string> = {
  vip: 'bg-teal-500/15 border-teal-400/30 text-teal-300',
  platinum: 'bg-cyan-500/15 border-cyan-400/30 text-cyan-300',
  general: 'bg-sky-500/15 border-sky-400/30 text-sky-300',
=======
const typeLabels: Record<string, string> = {
  ticket: 'Ticket',
  merch: 'Merch',
  food: 'Comida',
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
};

export function QRConfirmation() {
  const { orderResult, dismissOrder } = useCart();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!orderResult || !canvasRef.current) return;

<<<<<<< HEAD
    const ticketItems = orderResult.items.filter((i) => i.product.type === 'ticket');
    const allSeats = ticketItems.flatMap((item) => item.seats || []);
    const zone = ticketItems[0]?.product.zone || 'general';

=======
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
    const qrData = JSON.stringify({
      code: orderResult.confirmationCode,
      orderId: orderResult.id,
      name: orderResult.customer.name,
<<<<<<< HEAD
      email: orderResult.customer.email,
      total: orderResult.total,
      zone,
      seats: allSeats.map((s) => s.label),
      event: 'SinfronterasFest 2026',
      date: '2026-12-15',
      time: '20:00',
      location: 'La Paz, Bolivia',
    });

    QRCode.toCanvas(canvasRef.current, qrData, {
      width: 220,
      margin: 1,
      color: { dark: '#050b12', light: '#ffffff' },
=======
      total: orderResult.total,
    });

    QRCode.toCanvas(canvasRef.current, qrData, {
      width: 240,
      margin: 2,
      color: { dark: '#0a0a0f', light: '#ffffff' },
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
      errorCorrectionLevel: 'H',
    }).catch(() => {});
  }, [orderResult]);

  if (!orderResult) return null;

<<<<<<< HEAD
  const ticketItems = orderResult.items.filter((i) => i.product.type === 'ticket');
  const allSeats = ticketItems.flatMap((item) => item.seats || []);
  const zone = ticketItems[0]?.product.zone || 'general';
  const zoneLabel = zoneLabels[zone] || 'General';
  const zoneColor = zoneColors[zone] || 'text-sky-300';
  const zoneBadge = zoneBadgeBg[zone] || zoneBadgeBg.general;
  const totalPeople = ticketItems.reduce((sum, item) => sum + item.quantity, 0);

  const sortedSeats = [...allSeats].sort((a, b) => a.label.localeCompare(b.label));

=======
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
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
<<<<<<< HEAD
      {/* Background */}
      <div className="absolute inset-0 bg-[#050b12]/90 backdrop-blur-xl animate-fade-in" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full neon-blob-teal blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full neon-blob-cyan blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Close button */}
      <button
        onClick={dismissOrder}
        className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-gray-400 hover:text-teal-300 transition-colors neon-border"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="relative w-full max-w-2xl my-4 animate-scale-in">
        {/* ============ TICKET CARD ============ */}
        <div className="relative rounded-3xl overflow-hidden card-glow-strong neon-border-strong bg-[#0a1620]">

          {/* ===== TOP SECTION: Brand + Success ===== */}
          <div className="relative bg-gradient-to-br from-[#0d2630] to-[#0a1620] px-6 sm:px-10 pt-8 pb-6 overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute top-0 left-0 w-full h-1 gradient-neon" />
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full neon-blob-teal blur-3xl" />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-teal-400" fill="currentColor" />
                <span className="font-display text-xl tracking-wider text-white">
                  SINFRONTERAS<span className="text-neon-teal animate-neon-flicker">FEST</span>
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">Confirmado</span>
              </div>
            </div>

            <div className="relative mt-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl gradient-neon flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/30">
                <Ticket className="w-7 h-7 text-black" strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="font-display text-3xl sm:text-4xl text-white leading-none">TU TICKET ELECTRÓNICO</h2>
                <p className="text-sm text-gray-400 mt-1">Guarda este ticket. Preséntalo en la entrada del evento.</p>
              </div>
            </div>
          </div>

          {/* ===== MIDDLE: Info Grid + QR ===== */}
          <div className="relative px-6 sm:px-10 py-6">
            {/* Scanning neon line */}
            <div className="neon-line mb-6" />

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
              {/* Left: Info Grid (3 cols) */}
              <div className="sm:col-span-3 space-y-4">
                {/* Code */}
                <div className="flex items-center gap-3 animate-detail" style={{ animationDelay: '0.1s' }}>
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-400/20 flex items-center justify-center flex-shrink-0">
                    <Hash className="w-4 h-4 text-teal-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Código de ticket</p>
                    <p className="font-display text-xl text-neon-teal tracking-wider">{orderResult.confirmationCode}</p>
                  </div>
                </div>

                {/* Name */}
                <div className="flex items-center gap-3 animate-detail" style={{ animationDelay: '0.15s' }}>
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-400/20 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-teal-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Titular</p>
                    <p className="text-sm font-bold text-white truncate">{orderResult.customer.name}</p>
                  </div>
                </div>

                {/* Zone */}
                <div className="flex items-center gap-3 animate-detail" style={{ animationDelay: '0.2s' }}>
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-400/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-teal-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Zona</p>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold ${zoneColor}`}>{zoneLabel}</span>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase border ${zoneBadge}`}>
                        ${ticketItems[0]?.product.price || 0}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Seats */}
                {sortedSeats.length > 0 && (
                  <div className="flex items-start gap-3 animate-detail" style={{ animationDelay: '0.25s' }}>
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Armchair className="w-4 h-4 text-teal-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Asientos</p>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {sortedSeats.map((seat, i) => (
                          <span
                            key={seat.id}
                            className="px-2 py-0.5 rounded-md bg-teal-500/10 border border-teal-400/20 text-teal-300 text-xs font-bold animate-pop-in"
                            style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                          >
                            {seat.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right: QR Code (2 cols) */}
              <div className="sm:col-span-2 flex flex-col items-center justify-center">
                <div className="relative p-3 rounded-2xl bg-white border-2 border-teal-400/40 shadow-lg shadow-teal-500/20">
                  <div className="absolute -inset-1 rounded-2xl bg-teal-500/20 blur-md -z-10 animate-pulse-glow" />
                  <canvas ref={canvasRef} />
                </div>
                <p className="mt-3 text-[10px] text-gray-500 uppercase tracking-widest text-center">
                  Escanea en la entrada
                </p>
              </div>
            </div>

            {/* Perforation line */}
            <div className="relative my-6">
              <div className="ticket-notch-left absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#050b12] z-10" />
              <div className="ticket-notch-right absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#050b12] z-10" />
              <div className="perforated-line" />
            </div>

            {/* ===== BOTTOM SECTION: Stats Grid ===== */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* People count */}
              <div className="rounded-xl bg-gradient-to-br from-teal-500/5 to-transparent border border-teal-400/15 p-3 text-center animate-detail" style={{ animationDelay: '0.35s' }}>
                <Users className="w-5 h-5 text-teal-400 mx-auto mb-1.5" />
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Personas</p>
                <p className="font-display text-2xl text-neon-teal mt-0.5">{totalPeople}</p>
              </div>

              {/* Total paid */}
              <div className="rounded-xl bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-400/15 p-3 text-center animate-detail" style={{ animationDelay: '0.4s' }}>
                <DollarSign className="w-5 h-5 text-cyan-400 mx-auto mb-1.5" />
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Total pagado</p>
                <p className="font-display text-2xl text-neon-cyan mt-0.5">${orderResult.total}</p>
              </div>

              {/* Date */}
              <div className="rounded-xl bg-gradient-to-br from-teal-500/5 to-transparent border border-teal-400/15 p-3 text-center animate-detail" style={{ animationDelay: '0.45s' }}>
                <Calendar className="w-5 h-5 text-teal-400 mx-auto mb-1.5" />
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Fecha</p>
                <p className="font-display text-xl text-white mt-0.5">15 DIC</p>
                <p className="text-[10px] text-gray-500">2026</p>
              </div>

              {/* Time */}
              <div className="rounded-xl bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-400/15 p-3 text-center animate-detail" style={{ animationDelay: '0.5s' }}>
                <Clock className="w-5 h-5 text-cyan-400 mx-auto mb-1.5" />
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Hora</p>
                <p className="font-display text-xl text-white mt-0.5">8:00</p>
                <p className="text-[10px] text-gray-500">PM</p>
              </div>
            </div>

            {/* Location bar */}
            <div className="mt-4 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-500/5 border border-teal-400/10 animate-detail" style={{ animationDelay: '0.55s' }}>
              <MapPin className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-gray-300 font-medium">La Paz, Bolivia</span>
              <span className="w-1 h-1 rounded-full bg-teal-400/50" />
              <span className="text-xs text-gray-500">SinfronterasFest 2026</span>
            </div>

            {/* ===== Items breakdown (if non-ticket items exist) ===== */}
            {orderResult.items.some((i) => i.product.type !== 'ticket') && (
              <div className="mt-5 rounded-xl bg-black/20 border border-teal-400/10 p-4 space-y-2 animate-detail" style={{ animationDelay: '0.6s' }}>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                  Detalle completo de la orden
                </p>
                {orderResult.items.map((item) => {
                  const Icon = typeIcons[item.product.type] || Ticket;
                  return (
                    <div key={item.id} className="space-y-0.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-gray-300">
                          <Icon className="w-3.5 h-3.5 text-teal-400" />
                          {item.product.name}
                          {item.selectedOption && ` (${item.selectedOption})`}
                          <span className="text-gray-500">x{item.quantity}</span>
                        </span>
                        <span className="text-gray-400">${item.product.price * item.quantity}</span>
                      </div>
                      {item.seats && item.seats.length > 0 && (
                        <p className="text-xs text-teal-400/70 pl-5">
                          Asientos: {item.seats.map((s) => s.label).join(', ')}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* ===== FOOTER: Actions ===== */}
          <div className="relative px-6 sm:px-10 py-5 bg-gradient-to-b from-[#0a1620] to-[#050b12] border-t border-teal-400/10">
            <div className="flex gap-3">
              <button
                onClick={handleDownload}
                className="flex-1 py-3.5 rounded-xl glass border border-teal-400/20 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-teal-500/10 hover:border-teal-400/40 transition-all duration-200"
=======
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
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
              >
                <Download className="w-4 h-4" />
                Descargar QR
              </button>
              <button
                onClick={dismissOrder}
<<<<<<< HEAD
                className="flex-1 py-3.5 rounded-xl gradient-neon text-black font-bold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform duration-200 shadow-lg shadow-teal-500/30"
              >
                <CheckCircle2 className="w-4 h-4" />
                Listo
              </button>
            </div>
            <p className="mt-3 text-[11px] text-gray-600 text-center">
              También enviamos tu ticket a <span className="text-teal-400/80">{orderResult.customer.email}</span>
            </p>
          </div>

          {/* Bottom neon line */}
          <div className="h-1 gradient-neon" />
        </div>
=======
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
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
      </div>
    </div>
  );
}
