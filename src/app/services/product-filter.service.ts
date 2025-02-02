import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductFilterService {
  filter(products: any[], term: string): any[] {
    return products.filter(p => p.name.includes(term));
  }
}
