import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TranslationLoader {
  private translations: {[key: string]: any} = {};

  async loadTranslations(lang: string): Promise<any> {
    return await import(`./locales/${lang}.json`);
  }

  getTranslation(key: string): string {
    return key;
  }
}
