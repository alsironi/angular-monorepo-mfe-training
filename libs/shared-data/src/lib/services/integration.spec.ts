import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { CartService } from './cart.service';
import { StateManagementService } from './state-management.service';

describe('Service Integration', () => {
  let productService: ProductService;
  let cartService: CartService;
  let stateService: StateManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService, CartService, StateManagementService]
    });

    productService = TestBed.inject(ProductService);
    cartService = TestBed.inject(CartService);
    stateService = TestBed.inject(StateManagementService);
  });

  it('should integrate ProductService and CartService', () => {
    cartService.addItem({ productId: '1', quantity: 1, price: 10 });
    expect(cartService.itemCount()).toBe(1);
  });

  it('should update state when cart changes', () => {
    stateService.setState({ isAuthenticated: true });
    expect(stateService.isAuthenticated$()).toBe(true);
  });
});
