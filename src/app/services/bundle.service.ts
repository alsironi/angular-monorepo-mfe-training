import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BundleService {
  getStats(): any {
    return { chunks: 5, size: 250000 };
  }
}
