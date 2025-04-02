import { Provider } from '@angular/core';
import { API_BASE_URL, CACHE_CONFIG } from '../config/injection-tokens';

export const DI_PROVIDERS: Provider[] = [
  { provide: API_BASE_URL, useValue: '/api' },
  { provide: CACHE_CONFIG, useValue: { maxSize: 1000, ttl: 3600 } }
];
