export function detectLanguage(): string {
  const browserLang = navigator.language.split('-')[0];
  const supportedLangs = ['en', 'es', 'fr', 'de'];
  return supportedLangs.includes(browserLang) ? browserLang : 'en';
}
