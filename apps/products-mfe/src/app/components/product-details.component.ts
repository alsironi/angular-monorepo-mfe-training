import { Component, OnInit, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { MFEBusService } from '../../../shared/communication/mfe-bus.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  productId = input<string>('');
  product = signal(null);
  
  private productService = inject(ProductService);
  private mfeBus = inject(MFEBusService);
  private route = inject(ActivatedRoute);
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProduct(id);
    }
  }
  
  loadProduct(id: string): void {
    this.productService.getProductById(id).subscribe(
      (data) => this.product.set(data)
    );
  }
  
  addToCart(): void {
    const prod = this.product();
    if (prod) {
      this.mfeBus.emit('products-mfe', 'product-selected', {
        id: prod.id,
        name: prod.name,
        price: prod.price
      });
    }
  }
}
