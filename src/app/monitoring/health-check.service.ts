import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HealthCheckService {
  async checkHealth(): Promise<{status: string}> {
    return { status: 'healthy' };
  }
}
