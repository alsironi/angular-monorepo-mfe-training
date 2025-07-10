export interface BalancingStrategy {
  select(services: any[]): any;
}

export class RoundRobinStrategy implements BalancingStrategy {
  private currentIndex = 0;

  select(services: any[]): any {
    const service = services[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % services.length;
    return service;
  }
}
