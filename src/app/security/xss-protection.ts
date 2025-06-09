export function sanitizeHtml(html: string): string {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
}

export function sanitizeUrl(url: string): string {
  try {
    new URL(url);
    return url;
  } catch {
    return '';
  }
}
