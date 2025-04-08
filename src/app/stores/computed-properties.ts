import { computed, signal } from '@angular/core';

export function createComputedProperty<T>(getter: () => T) {
  return computed(getter);
}
