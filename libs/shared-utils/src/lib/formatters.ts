export function formatCurrency(value: number): string {
  return `$${value.toFixed(2)}`;
}

export function formatProductName(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
