export function immutableUpdate<T>(state: T, updates: Partial<T>): T {
  return { ...state, ...updates };
}

export function selectField<T, K extends keyof T>(state: T, field: K): T[K] {
  return state[field];
}
