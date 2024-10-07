import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriceFilterComponent } from './price-filter.component';

describe('PriceFilterComponent', () => {
  let component: PriceFilterComponent;
  let fixture: ComponentFixture<PriceFilterComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [PriceFilterComponent]
    });
    fixture = TestBed.createComponent(PriceFilterComponent);
    component = fixture.componentInstance;
  });

  it('should emit price range', (done) => {
    component.priceRangeChanged.subscribe(range => {
      expect(range.min).toBe(100);
      expect(range.max).toBe(500);
      done();
    });
    
    component.minPrice = 100;
    component.maxPrice = 500;
    component.onFilter();
  });
});
