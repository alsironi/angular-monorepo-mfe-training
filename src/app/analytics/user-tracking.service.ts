import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserTrackingService {
  trackUser(userId: string): void {
    console.log(`Tracking user: ${userId}`);
  }

  trackUserAction(userId: string, action: string): void {
    console.log(`User ${userId} performed: ${action}`);
  }
}
