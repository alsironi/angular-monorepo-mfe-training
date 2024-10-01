import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../../shared/services/product.service';
import { of } from 'rxjs';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ProductListComponent]
    });
    
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
  });

  it('should load products on init', () => {
    spyOn(productService, 'getProducts').and.returnValue(of([
      { id: '1', name: 'Product 1', price: 100 }
    ]));
    
    component.ngOnInit();
    expect(component.products().length).toBe(1);
  });
});
