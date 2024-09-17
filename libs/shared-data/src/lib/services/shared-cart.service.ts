import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class SharedCartService {
  private items = signal<CartItem[]>([]);
  private _notifyChange = signal(0);
  
  public items$ = this.items.asReadonly();
  public total = computed(() =>
    this.items().reduce((sum, item) => sum + (item.price * item.quantity), 0)
  );
  public itemCount = computed(() => this.items().length);
  public changes$ = this._notifyChange.asReadonly();
  
  addItem(item: CartItem): void {
    const current = this.items();
    const existing = current.find(i => i.id === item.id);
    
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      current.push(item);
    }
    this.items.set([...current]);
    this._notifyChange.update(v => v + 1);
  }
  
  removeItem(id: string): void {
    this.items.set(this.items().filter(i => i.id !== id));
    this._notifyChange.update(v => v + 1);
  }
  
  clear(): void {
    this.items.set([]);
    this._notifyChange.update(v => v + 1);
  }
}
