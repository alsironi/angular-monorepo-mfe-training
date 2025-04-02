import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ServiceFactory {
  createService(type: string): any {
    switch (type) {
      case 'api':
        return {};
      default:
        return {};
    }
  }
}
