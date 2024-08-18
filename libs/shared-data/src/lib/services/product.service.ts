import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private cache = signal(new Map());
  private loading = signal(false);
  
  public products = computed(() => Array.from(this.cache().values()));
  
  constructor(private http: HttpClient) {}
  
  getProducts(page: number = 1): Observable<any> {
    return this.http.get(`/api/products?page=${page}`);
  }
  
  getProductById(id: string): Observable<any> {
    return this.http.get(`/api/products/${id}`);
  }
}
