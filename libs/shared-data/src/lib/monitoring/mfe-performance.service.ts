import { Injectable } from '@angular/core';

export interface MFEMetric {
  name: string;
  duration: number;
  mfe: string;
  timestamp: Date;
}

@Injectable({ providedIn: 'root' })
export class MFEPerformanceService {
  private metrics: MFEMetric[] = [];
  
  markStart(name: string, mfe: string): PerformanceMark {
    return performance.mark(`${mfe}-${name}-start`);
  }
  
  markEnd(name: string, mfe: string): PerformanceMark {
    return performance.mark(`${mfe}-${name}-end`);
  }
  
  measure(name: string, mfe: string): PerformanceMeasure {
    const measure = performance.measure(
      `${mfe}-${name}`,
      `${mfe}-${name}-start`,
      `${mfe}-${name}-end`
    );
    
    this.metrics.push({
      name,
      duration: measure.duration,
      mfe,
      timestamp: new Date()
    });
    
    return measure;
  }
  
  getMetrics(): MFEMetric[] {
    return [...this.metrics];
  }
}
