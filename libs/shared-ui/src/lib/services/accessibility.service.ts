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
  
  announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    // Ensure screen reader has time to read
    setTimeout(() => announcement.remove(), 3000);
  }
}
