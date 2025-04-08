import { Injectable } from '@angular/core';
import { signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ExpandedStore {
  private state = signal({ items: [], loading: false, error: null });

  items = computed(() => this.state().items);
  loading = computed(() => this.state().loading);
  itemCount = computed(() => this.state().items.length);

  addItem(item: any): void {
    const current = this.state();
    this.state.set({ ...current, items: [...current.items, item] });
  }
}
