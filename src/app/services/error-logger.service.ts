import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorLoggerService {
  log(error: any): void {
    console.error('Error logged:', error);
  }
}
