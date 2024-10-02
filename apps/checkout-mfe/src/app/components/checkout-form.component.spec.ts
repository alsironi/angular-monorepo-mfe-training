import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutFormComponent } from './checkout-form.component';

describe('CheckoutFormComponent', () => {
  let component: CheckoutFormComponent;
  let fixture: ComponentFixture<CheckoutFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [CheckoutFormComponent, ReactiveFormsModule]
    });
    
    fixture = TestBed.createComponent(CheckoutFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should validate required fields', () => {
    const form = component.checkoutForm;
    expect(form.valid).toBeFalsy();
  });
});
