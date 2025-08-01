import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PerfTuningService {
  applyOptimizations(): void {
    this.optimizeBundles();
    this.enableCaching();
    this.compressAssets();
  }

  private optimizeBundles(): void {}
  private enableCaching(): void {}
  private compressAssets(): void {}
}
