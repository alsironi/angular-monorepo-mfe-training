import { effect, signal } from '@angular/core';

export function createEffect(fn: () => void) {
  return effect(fn);
}
