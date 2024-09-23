// Services
export * from './lib/services/product.service';
export * from './lib/services/cart.service';
export * from './lib/services/state-management.service';
export * from './lib/services/pagination.service';
export * from './lib/services/shared-cart.service';

// Interceptors
export * from './lib/interceptors/http.interceptor';

// Communication
export * from './lib/communication/mfe-bus.service';
export * from './lib/communication/mfe-loader.service';

// Monitoring
export * from './lib/monitoring/mfe-performance.service';

// Models
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: string;
}
