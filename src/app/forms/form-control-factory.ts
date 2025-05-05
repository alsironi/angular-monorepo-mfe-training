import { FormControl } from '@angular/forms';

export function createFormControl(value: any = '', validators: any = []): FormControl {
  return new FormControl(value, validators);
}
