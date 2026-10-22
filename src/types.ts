export type ProductType = 'ticket' | 'merch' | 'food';

export interface Product {
  id: string;
  type: ProductType;
  name: string;
  description: string;
  price: number;
  image?: string;
  badge?: string;
  perks?: string[];
  options?: string[];
  zone?: 'vip' | 'platinum' | 'general';
}

export interface Seat {
  id: string;
  zone: string;
  row_label: string;
  seat_number: number;
  label: string;
  status: 'available' | 'sold';
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedOption?: string;
  seats?: Seat[];
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
}

export interface OrderResult {
  id: string;
  confirmationCode: string;
  customer: CustomerInfo;
  items: CartItem[];
  total: number;
}
