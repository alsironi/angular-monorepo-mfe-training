import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadBalancer {
  selectService(services: any[]): any {
    return services[Math.floor(Math.random() * services.length)];
  }
}
