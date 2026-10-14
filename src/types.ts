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
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedOption?: string;
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
