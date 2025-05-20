import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocaleProvider {
  getLocale(): string {
    return navigator.language || 'en-US';
  }

  getCurrentCountry(): string {
    return this.getLocale().split('-')[1] || 'US';
  }
}
