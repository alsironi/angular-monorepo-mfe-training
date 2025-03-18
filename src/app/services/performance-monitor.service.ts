import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PerformanceMonitorService {
  private metrics: Map<string, number> = new Map();

  mark(name: string): void {
    this.metrics.set(name, performance.now());
  }

  measure(name: string, startMark: string): number {
    const start = this.metrics.get(startMark) || 0;
    return performance.now() - start;
  }
}
