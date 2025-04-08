export function memoize<T>(fn: () => T): () => T {
  let cached: T;
  let hasBeenCalled = false;

  return () => {
    if (!hasBeenCalled) {
      cached = fn();
      hasBeenCalled = true;
    }
    return cached;
  };
}
