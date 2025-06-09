import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CsrfProtectionService {
  getToken(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  validateToken(token: string): boolean {
    return token && token.length > 0;
  }
}
