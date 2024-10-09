import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendedProductsComponent } from './recommended-products.component';

describe('RecommendedProductsComponent', () => {
  let component: RecommendedProductsComponent;
  let fixture: ComponentFixture<RecommendedProductsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RecommendedProductsComponent]
    });
    fixture = TestBed.createComponent(RecommendedProductsComponent);
    component = fixture.componentInstance;
  });

  it('should load recommendations', () => {
    expect(component).toBeTruthy();
  });
});
