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
<<<<<<< HEAD
  zone?: 'vip' | 'platinum' | 'general';
}

export interface Seat {
  id: string;
  zone: string;
  row_label: string;
  seat_number: number;
  label: string;
  status: 'available' | 'sold';
=======
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedOption?: string;
<<<<<<< HEAD
  seats?: Seat[];
=======
>>>>>>> f01d0e6d3afe847a1424025f7e0bb14721c23e09
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
