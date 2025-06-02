import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  trackEvent(category: string, action: string, label?: string): void {
    console.log(`Event: ${category}/${action}/${label}`);
  }

  trackPageView(path: string): void {
    console.log(`Page View: ${path}`);
  }
}
