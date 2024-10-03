import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [CartItemComponent]
    });
    
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
  });

  it('should emit removeItem when remove is clicked', () => {
    spyOn(component.removeItem, 'emit');
    component.onRemove();
    expect(component.removeItem.emit).toHaveBeenCalled();
  });
});
