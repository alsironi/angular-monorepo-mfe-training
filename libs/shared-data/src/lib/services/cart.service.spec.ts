import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should add items and calculate total', () => {
    service.addItem({ productId: '1', quantity: 2, price: 10 });
    service.addItem({ productId: '2', quantity: 1, price: 20 });
    expect(service.total()).toBe(40);
    expect(service.itemCount()).toBe(2);
  });

  it('should remove items correctly', () => {
    service.addItem({ productId: '1', quantity: 1, price: 10 });
    service.removeItem('1');
    expect(service.itemCount()).toBe(0);
  });
});
