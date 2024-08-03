import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch products', () => {
    service.getProducts().subscribe(data => {
      expect(data.length).toBeGreaterThan(0);
    });
    const req = httpMock.expectOne('/api/products?page=1');
    expect(req.request.method).toBe('GET');
    req.flush([{ id: 1, name: 'Product 1' }]);
  });
});
