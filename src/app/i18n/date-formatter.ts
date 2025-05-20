export function formatDate(date: Date, locale: string): string {
  return date.toLocaleDateString(locale);
}

export function formatTime(date: Date, locale: string): string {
  return date.toLocaleTimeString(locale);
}
