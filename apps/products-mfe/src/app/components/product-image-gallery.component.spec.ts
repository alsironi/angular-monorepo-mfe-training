import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductImageGalleryComponent } from './product-image-gallery.component';

describe('ProductImageGalleryComponent', () => {
  let component: ProductImageGalleryComponent;
  let fixture: ComponentFixture<ProductImageGalleryComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ProductImageGalleryComponent]
    });
    
    fixture = TestBed.createComponent(ProductImageGalleryComponent);
    component = fixture.componentInstance;
  });

  it('should navigate through images', () => {
    expect(component.currentIndex()).toBe(0);
    component.next();
    expect(component.currentIndex()).toBe(1);
  });
});
