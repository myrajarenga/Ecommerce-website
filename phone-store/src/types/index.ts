export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  category: 'phones' | 'accessories';
  brand: string;
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  features: string[];
  specifications?: { [key: string]: string };
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: 'mpesa' | 'card';
  createdAt: string;
  shippingAddress: Address;
}

export interface Address {
  fullName: string;
  phone: string;
  street: string;
  city: string;
  county: string;
  postalCode: string;
}

export interface FilterOptions {
  category?: 'phones' | 'accessories' | 'all';
  brand?: string;
  priceRange?: [number, number];
  sortBy?: 'price-low' | 'price-high' | 'newest' | 'rating';
  inStock?: boolean;
}