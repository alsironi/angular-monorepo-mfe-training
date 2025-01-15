import { Injectable } from '@angular/core';
import { effect, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SignalEffectsService {
  private counter = signal(0);

  setupEffect(): void {
    effect(() => {
      const count = this.counter();
      console.log(`Counter changed to: ${count}`);
    });
  }

  increment(): void {
    this.counter.update(c => c + 1);
  }
}
