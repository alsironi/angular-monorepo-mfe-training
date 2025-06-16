export function isNullable<T>(value: Nullable<T>): value is null {
  return value === null;
}

export function isUndefined<T>(value: Optional<T>): value is undefined {
  return value === undefined;
}
