import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="products">{{ products.length }} products</div>`
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  ngOnInit(): void {
    this.products = [{ id: 1, name: 'Product 1' }];
  }
}
