import { Validators } from '@angular/forms';

export function createValidators(rules: any): any[] {
  const validators = [];
  if (rules.required) validators.push(Validators.required);
  if (rules.minLength) validators.push(Validators.minLength(rules.minLength));
  if (rules.maxLength) validators.push(Validators.maxLength(rules.maxLength));
  return validators;
}
