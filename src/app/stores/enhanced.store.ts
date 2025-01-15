import { Injectable } from '@angular/core';
import { signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EnhancedStore {
  private state = signal({ items: [], count: 0 });
  items = computed(() => this.state().items);
  itemCount = computed(() => this.state().count);

  addItem(item: any): void {
    const current = this.state();
    this.state.set({ items: [...current.items, item], count: current.count + 1 });
  }
}
