export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export interface ProductFilter {
  search?: string;
  category?: string;
  priceMin?: number;
  priceMax?: number;
}
