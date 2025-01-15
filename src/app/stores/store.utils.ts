export function mergeState<T>(state: T, updates: Partial<T>): T {
  return { ...state, ...updates };
}

export function immutableUpdate<T>(state: T, path: string, value: any): T {
  return { ...state, [path]: value };
}
