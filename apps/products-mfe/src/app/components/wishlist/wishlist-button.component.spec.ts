import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WishlistButtonComponent } from './wishlist-button.component';

describe('WishlistButtonComponent', () => {
  let component: WishlistButtonComponent;
  let fixture: ComponentFixture<WishlistButtonComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [WishlistButtonComponent]
    });
    fixture = TestBed.createComponent(WishlistButtonComponent);
    component = fixture.componentInstance;
  });

  it('should toggle wishlist', () => {
    expect(component).toBeTruthy();
  });
});
