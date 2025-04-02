import { InjectionToken } from '@angular/core';

export const API_BASE_URL = new InjectionToken<string>('api.base.url');
export const CACHE_CONFIG = new InjectionToken<any>('cache.config');
export const HTTP_INTERCEPTORS_TOKEN = new InjectionToken<any>('http.interceptors');
