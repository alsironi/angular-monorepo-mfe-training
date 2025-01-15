import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EffectManager {
  private effects = new Map();

  registerEffect(key: string, effect: any): void {
    this.effects.set(key, effect);
  }

  getEffect(key: string): any {
    return this.effects.get(key);
  }
}
