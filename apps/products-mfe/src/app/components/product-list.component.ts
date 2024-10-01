import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../shared/services/product.service';
import { AccessibilityService } from '../../../shared/services/accessibility.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);
  private a11y = inject(AccessibilityService);
  
  products = signal([]);
  loading = signal(false);
  selectedCategory = signal('all');
  
  filteredProducts = computed(() => {
    const prods = this.products();
    if (this.selectedCategory() === 'all') return prods;
    return prods.filter(p => p.category === this.selectedCategory());
  });
  
  ngOnInit(): void {
    this.loadProducts();
    this.a11y.announceToScreenReader('Products list loaded');
  }
  
  loadProducts(): void {
    this.loading.set(true);
    this.productService.getProducts().subscribe(
      (data) => {
        this.products.set(data);
        this.loading.set(false);
      }
    );
  }
  
  filterByCategory(category: string): void {
    this.selectedCategory.set(category);
    this.a11y.announceToScreenReader(`Filtered products by ${category}`);
  }
}
