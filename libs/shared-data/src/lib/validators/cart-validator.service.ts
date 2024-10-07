import { Injectable } from '@angular/core';
import { CartItem } from '../services/shared-cart.service';

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

@Injectable({ providedIn: 'root' })
export class CartValidatorService {
  validateCart(items: CartItem[]): ValidationResult {
    const errors: string[] = [];
    
    if (items.length === 0) {
      errors.push('Cart is empty');
    }
    
    items.forEach(item => {
      if (item.quantity <= 0) {
        errors.push(`Invalid quantity for ${item.name}`);
      }
      if (item.price <= 0) {
        errors.push(`Invalid price for ${item.name}`);
      }
    });
    
    return {
      valid: errors.length === 0,
      errors
    };
  }
  
  validateItem(item: CartItem): ValidationResult {
    return this.validateCart([item]);
  }
}
