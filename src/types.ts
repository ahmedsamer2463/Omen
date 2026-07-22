export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  category: string;
  stock: number;
  isFeatured: boolean;
  features: string[];
  specs: { label: string; value: string }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  items: {
    productId: string;
    productName: string;
    price: number;
    quantity: number;
  }[];
  totalAmount: number;
  status: 'pending' | 'shipping' | 'completed' | 'cancelled';
  createdAt: string;
  paymentMethod: 'cod' | 'card';
  governorate?: string;
  nearbyLandmark?: string;
  notes?: string;
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  description: string;
  available: boolean;
}
