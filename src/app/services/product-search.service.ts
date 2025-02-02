import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductSearchService {
  searchResults = signal<any[]>([]);

  search(term: string): void {
    this.searchResults.set([]);
  }
}
