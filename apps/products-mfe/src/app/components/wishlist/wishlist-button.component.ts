import { Component, input, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MFEBusService } from '../../../../shared/communication/mfe-bus.service';

@Component({
  selector: 'app-wishlist-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="toggleWishlist()" [class.added]="isInWishlist()" aria-label="Add to wishlist">
      {{ isInWishlist() ? '♥' : '♡' }} Wishlist
    </button>
  `
})
export class WishlistButtonComponent {
  productId = input.required<string>();
  isInWishlist = input(false);
  wishlistChanged = output<string>();
  
  private mfeBus = inject(MFEBusService);
  
  toggleWishlist(): void {
    this.wishlistChanged.emit(this.productId());
    this.mfeBus.emit('products-mfe', 'wishlist-updated', { 
      productId: this.productId() 
    });
  }
}
