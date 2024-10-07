import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="reviews-section" role="region" aria-label="Customer reviews">
      <h3>Customer Reviews</h3>
      <article *ngFor="let review of reviews()" class="review-card">
        <header>
          <strong>{{ review.author }}</strong>
          <span class="rating">{{ review.rating }}/5</span>
        </header>
        <p>{{ review.text }}</p>
        <footer class="review-meta">{{ review.date | date }}</footer>
      </article>
    </div>
  `
})
export class ReviewsListComponent {
  reviews = input([]);
}
