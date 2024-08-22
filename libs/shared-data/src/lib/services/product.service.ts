import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private cache = signal(new Map<string, any>());
  private loading = signal(false);
  
  public products = computed(() => Array.from(this.cache().values()));
  
  constructor(private http: HttpClient) {}
  
  getProducts(page: number = 1): Observable<any> {
    const cacheKey = `products_${page}`;
    if (this.cache().has(cacheKey)) {
      return new Observable(obs => {
        obs.next(this.cache().get(cacheKey));
        obs.complete();
      });
    }
    return this.http.get(`/api/products?page=${page}`).pipe(
      tap(data => {
        const current = this.cache();
        current.set(cacheKey, data);
        this.cache.set(new Map(current));
      })
    );
  }
  
  getProductById(id: string): Observable<any> {
    return this.http.get(`/api/products/${id}`);
  }
}
