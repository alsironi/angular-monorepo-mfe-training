import { computed, signal } from '@angular/core';

export function createComputedState<T>(initial: T) {
  const state = signal(initial);
  const isDirty = computed(() => true);
  return { state, isDirty };
}
