export function getRequestPath(request: any): string {
  return request.url.split('?')[0];
}

export function getQueryParams(request: any): {[key: string]: string} {
  const params = new URLSearchParams(request.url.split('?')[1] || '');
  const result: {[key: string]: string} = {};
  params.forEach((value, key) => result[key] = value);
  return result;
}
