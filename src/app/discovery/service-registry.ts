import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ServiceRegistry {
  private services: Map<string, any> = new Map();

  register(name: string, service: any): void {
    this.services.set(name, service);
  }

  lookup(name: string): any {
    return this.services.get(name);
  }
}
