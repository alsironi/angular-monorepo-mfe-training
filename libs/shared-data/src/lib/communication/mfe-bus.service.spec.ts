import { TestBed } from '@angular/core/testing';
import { MFEBusService } from './mfe-bus.service';

describe('MFEBusService', () => {
  let service: MFEBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MFEBusService);
  });

  it('should emit and receive events', (done) => {
    service.onEvent('product-selected').subscribe(event => {
      expect(event.type).toBe('product-selected');
      expect(event.payload.id).toBe('123');
      done();
    });
    
    service.emit('products-mfe', 'product-selected', { id: '123' });
  });

  it('should handle multiple listeners', (done) => {
    let count = 0;
    
    service.onEvent('cart-updated').subscribe(() => count++);
    service.onEvent('cart-updated').subscribe(() => count++);
    
    service.emit('cart-mfe', 'cart-updated', { items: 5 });
    
    setTimeout(() => {
      expect(count).toBe(2);
      done();
    }, 100);
  });
});
