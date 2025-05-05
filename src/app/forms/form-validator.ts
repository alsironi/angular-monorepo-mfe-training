import { AbstractControl } from '@angular/forms';

export function emailValidator(control: AbstractControl): {[key: string]: any} | null {
  const email = control.value;
  if (!email) return null;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? null : { invalidEmail: true };
}
