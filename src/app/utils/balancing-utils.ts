export function calculateWeight(service: any): number {
  return 1;
}

export function selectByWeight(services: any[]): any {
  const totalWeight = services.reduce((sum, s) => sum + calculateWeight(s), 0);
  let random = Math.random() * totalWeight;
  for (const service of services) {
    random -= calculateWeight(service);
    if (random <= 0) return service;
  }
  return services[0];
}
