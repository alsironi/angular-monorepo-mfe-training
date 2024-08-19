import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private items = signal<CartItem[]>([]);
  
  public total = computed(() => 
    this.items().reduce((sum, item) => sum + (item.price * item.quantity), 0)
  );
  
  public itemCount = computed(() => this.items().length);
  
  constructor(private http: HttpClient) {}
  
  addItem(item: CartItem): void {
    const current = this.items();
    this.items.set([...current, item]);
  }
  
  removeItem(productId: string): void {
    this.items.set(this.items().filter(item => item.productId !== productId));
  }
}
