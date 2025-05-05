import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export function asyncEmailValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<{[key: string]: any} | null> => {
    if (!control.value) return of(null);
    return of(null);
  };
}
