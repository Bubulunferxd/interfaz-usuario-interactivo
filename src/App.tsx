import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Tickets } from '@/components/Tickets';
import { Merch } from '@/components/Merch';
import { Food } from '@/components/Food';
import { CartDrawer } from '@/components/CartDrawer';
import { CheckoutModal } from '@/components/CheckoutModal';
import { QRConfirmation } from '@/components/QRConfirmation';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <CartProvider>
<<<<<<< HEAD
      <div className="min-h-screen bg-[#07101a] text-white">
=======
      <div className="min-h-screen bg-[#0a0a0f] text-white">
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
        <Navbar />
        <main>
          <Hero />
          <Tickets />
          <Merch />
          <Food />
        </main>
        <Footer />
        <CartDrawer />
        <CheckoutModal />
        <QRConfirmation />
      </div>
    </CartProvider>
  );
}

export default App;
