export function addCustomHeaders(headers: any): any {
  return {
    ...headers,
    'X-Request-ID': generateRequestId()
  };
}

function generateRequestId(): string {
  return `req_${Date.now()}`;
}
