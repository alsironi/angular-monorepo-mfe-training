import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MonitorService {
  recordMetric(name: string, value: number): void {
    console.log(`Metric ${name}: ${value}`);
  }

  recordEvent(name: string): void {
    console.log(`Event: ${name}`);
  }
}
