export function handleEdgeCase(value: any): any {
  if (value === null || value === undefined) {
    return 'N/A';
  }
  if (Array.isArray(value) && value.length === 0) {
    return 'Empty';
  }
  return value;
}
