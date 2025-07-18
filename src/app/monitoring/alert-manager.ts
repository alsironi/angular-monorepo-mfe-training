import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlertManager {
  sendAlert(message: string): void {
    console.warn(`Alert: ${message}`);
  }
}
