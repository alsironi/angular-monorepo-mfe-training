import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `<div class="filters"><input [(ngModel)]="searchTerm" placeholder="Search"/></div>`
})
export class ProductFiltersComponent {
  searchTerm = '';
}
