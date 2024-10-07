import { TestBed } from '@angular/core/testing';
import { CartValidatorService } from './cart-validator.service';

describe('CartValidatorService', () => {
  let service: CartValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartValidatorService);
  });

  it('should validate cart items', () => {
    const item = { id: '1', name: 'Test', quantity: 1, price: 10 };
    const result = service.validateItem(item);
    expect(result.valid).toBeTruthy();
  });
});
