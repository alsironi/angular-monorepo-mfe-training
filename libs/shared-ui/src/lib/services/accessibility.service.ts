import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AccessibilityService {
  private highContrast = signal(false);
  private reducedMotion = signal(false);
  
  constructor() {
    this.detectPreferences();
  }
  
  private detectPreferences(): void {
    if (window.matchMedia('(prefers-contrast: more)').matches) {
      this.highContrast.set(true);
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.reducedMotion.set(true);
    }
  }
  
  announceToScreenReader(message: string): void {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
  }
}
