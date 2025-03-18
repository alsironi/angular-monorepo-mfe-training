import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class VirtualizationService {
  calculateVisibleRange(scrollOffset: number, containerHeight: number, itemHeight: number) {
    return {
      start: Math.floor(scrollOffset / itemHeight),
      end: Math.ceil((scrollOffset + containerHeight) / itemHeight)
    };
  }
}
