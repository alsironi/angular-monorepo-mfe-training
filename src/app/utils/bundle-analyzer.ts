import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BundleAnalyzer {
  analyzeBundles(bundles: any[]): any {
    return {
      total: bundles.length,
      size: bundles.reduce((sum, b) => sum + (b.size || 0), 0),
      modules: bundles.map(b => b.name)
    };
  }
}
