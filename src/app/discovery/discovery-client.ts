import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DiscoveryClient {
  async discoverServices(): Promise<any[]> {
    return [];
  }
}
