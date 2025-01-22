import { Injectable } from '@angular/core';
import { subject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CacheInvalidationService {
  private invalidateSubject = new Subject<string>();
  invalidate$ = this.invalidateSubject.asObservable();

  invalidate(key: string): void {
    this.invalidateSubject.next(key);
  }

  invalidateAll(): void {
    this.invalidateSubject.next('*');
  }
}
