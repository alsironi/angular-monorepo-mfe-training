import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rating-component" role="region" aria-label="Product rating">
      <div class="stars">
        <span *ngFor="let star of [1,2,3,4,5]; let i = index"
              (click)="setRating(i + 1)"
              [class.filled]="i < currentRating"
              class="star"
              [attr.aria-label]="(i + 1) + ' out of 5 stars'">
          ★
        </span>
      </div>
      <p class="rating-text">{{ currentRating }} / 5</p>
    </div>
  `
})
export class RatingComponent {
  currentRating = input(0);
  ratingChanged = output<number>();
  
  setRating(value: number): void {
    this.ratingChanged.emit(value);
  }
}
