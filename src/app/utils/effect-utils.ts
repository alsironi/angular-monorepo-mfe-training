import { effect } from '@angular/core';

export function createAutoEffect(fn: () => void) {
  return effect(fn);
}
