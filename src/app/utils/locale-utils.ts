export function getNumberFormat(locale: string) {
  return new Intl.NumberFormat(locale);
}

export function getCurrencyFormat(locale: string, currency: string) {
  return new Intl.NumberFormat(locale, { style: 'currency', currency });
}
