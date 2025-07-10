import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ServiceLocator {
  locate(serviceName: string): any {
    return {};
  }
}
