import { Directive, HostListener, inject } from '@angular/core';
import { AccessibilityService } from '../../services/accessibility.service';

@Directive({
  selector: '[appAnnounce]',
  standalone: true
})
export class AnnounceDirective {
  private a11y = inject(AccessibilityService);
  
  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    const element = event.target as HTMLElement;
    const ariaLabel = element.getAttribute('aria-label');
    
    if (ariaLabel) {
      this.a11y.announceToScreenReader(ariaLabel, 'polite');
    }
  }
}
