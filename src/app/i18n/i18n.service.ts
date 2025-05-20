import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private currentLanguage = new BehaviorSubject<string>('en');
  currentLanguage$: Observable<string> = this.currentLanguage.asObservable();

  setLanguage(lang: string): void {
    this.currentLanguage.next(lang);
  }

  getLanguage(): string {
    return this.currentLanguage.value;
  }
}
