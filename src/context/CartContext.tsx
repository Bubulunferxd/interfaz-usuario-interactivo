import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { CartItem, Product, CustomerInfo, OrderResult } from '@/types';
import { supabase } from '@/lib/supabase';

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  isCheckoutOpen: boolean;
  orderResult: OrderResult | null;
  lastAdded: { id: string; timestamp: number } | null;
  addToCart: (product: Product, selectedOption?: string) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  submitOrder: (customer: CustomerInfo) => Promise<void>;
  dismissOrder: () => void;
  totalItems: number;
  totalPrice: number;
  isSubmitting: boolean;
  submitError: string | null;
}

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

function generateConfirmationCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'SFF-';
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderResult, setOrderResult] = useState<OrderResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [lastAdded, setLastAdded] = useState<{ id: string; timestamp: number } | null>(null);

  const addToCart = useCallback((product: Product, selectedOption?: string) => {
    const cartItemId = selectedOption
      ? `${product.id}-${selectedOption}`
      : product.id;

    setItems((prev) => {
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: cartItemId, product, quantity: 1, selectedOption }];
    });
    setLastAdded({ id: cartItemId, timestamp: Date.now() });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.id !== id));
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const openCheckout = useCallback(() => {
    setIsOpen(false);
    setIsCheckoutOpen(true);
  }, []);
  const closeCheckout = useCallback(() => setIsCheckoutOpen(false), []);
  const dismissOrder = useCallback(() => {
    setOrderResult(null);
    clearCart();
  }, [clearCart]);

  const submitOrder = useCallback(
    async (customer: CustomerInfo) => {
      setIsSubmitting(true);
      setSubmitError(null);
      try {
        const confirmationCode = generateConfirmationCode();
        const total = items.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0
        );

        const orderData = {
          customer_name: customer.name,
          customer_email: customer.email,
          customer_phone: customer.phone,
          items: items.map((item) => ({
            id: item.id,
            name: item.product.name,
            type: item.product.type,
            price: item.product.price,
            quantity: item.quantity,
            selectedOption: item.selectedOption || null,
          })),
          total,
          confirmation_code: confirmationCode,
          status: 'confirmed',
        };

        const { data, error } = await supabase
          .from('orders')
          .insert(orderData)
          .select('id')
          .single();

        if (error) throw error;

        setOrderResult({
          id: data.id,
          confirmationCode,
          customer,
          items,
          total,
        });
        setIsCheckoutOpen(false);
      } catch (err) {
        setSubmitError(
          err instanceof Error
            ? err.message
            : 'Ocurrió un error al procesar tu orden.'
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [items]
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        isCheckoutOpen,
        orderResult,
        lastAdded,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        openCheckout,
        closeCheckout,
        submitOrder,
        dismissOrder,
        totalItems,
        totalPrice,
        isSubmitting,
        submitError,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
