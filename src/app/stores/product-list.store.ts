import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Product } from '../shared/models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductListStore {
  products = signal<Product[]>([]);

  addProduct(product: Product): void {
    this.products.update(p => [...p, product]);
  }
}
