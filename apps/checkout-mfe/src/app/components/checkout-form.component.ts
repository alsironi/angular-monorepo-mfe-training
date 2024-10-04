import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MFEBusService } from '../../../shared/communication/mfe-bus.service';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout-form.component.html'
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm: FormGroup;
  submitting = signal(false);
  
  private fb = inject(FormBuilder);
  private mfeBus = inject(MFEBusService);
  
  ngOnInit(): void {
    this.initForm();
  }
  
  private initForm(): void {
    this.checkoutForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.minLength(16)]]
    });
  }
  
  submit(): void {
    if (this.checkoutForm.valid) {
      this.submitting.set(true);
      
      setTimeout(() => {
        this.mfeBus.emit('checkout-mfe', 'checkout-completed', {
          formData: this.checkoutForm.value
        });
        this.submitting.set(false);
      }, 1000);
    }
  }
}
