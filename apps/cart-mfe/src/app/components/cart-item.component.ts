import { Component, input, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedCartService, CartItem } from '../../../shared/services/shared-cart.service';
import { AccessibilityService } from '../../../shared/services/accessibility.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  item = input.required<CartItem>();
  removeItem = output<string>();
  
  private a11y = inject(AccessibilityService);
  
  onQuantityChange(newQty: number): void {
    if (newQty > 0) {
      this.a11y.announceToScreenReader(`Quantity updated to ${newQty}`, 'polite');
    }
  }
  
  onRemove(): void {
    this.removeItem.emit(this.item().id);
    this.a11y.announceToScreenReader('Item removed from cart', 'polite');
  }
}
