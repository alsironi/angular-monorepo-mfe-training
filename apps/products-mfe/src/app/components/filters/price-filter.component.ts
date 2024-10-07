import { Component, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccessibilityService } from '../../../../shared/services/accessibility.service';

@Component({
  selector: 'app-price-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="price-filter" role="region" aria-label="Price filter">
      <label for="minPrice">Min Price: ${{ minPrice }}</label>
      <input id="minPrice" type="range" [(ngModel)]="minPrice" (change)="onFilter()" min="0" max="1000" />
      
      <label for="maxPrice">Max Price: ${{ maxPrice }}</label>
      <input id="maxPrice" type="range" [(ngModel)]="maxPrice" (change)="onFilter()" min="0" max="1000" />
    </div>
  `
})
export class PriceFilterComponent {
  minPrice = 0;
  maxPrice = 1000;
  priceRangeChanged = output<{min: number; max: number}>();
  
  private a11y = inject(AccessibilityService);
  
  onFilter(): void {
    this.priceRangeChanged.emit({ min: this.minPrice, max: this.maxPrice });
    this.a11y.announceToScreenReader(`Price range changed to $${this.minPrice}-$${this.maxPrice}`);
  }
}
