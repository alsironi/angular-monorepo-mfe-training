import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiClientService {
  private baseUrl = '/api';

  buildUrl(endpoint: string): string {
    return `${this.baseUrl}${endpoint}`;
  }
}
