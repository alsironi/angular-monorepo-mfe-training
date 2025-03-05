import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModuleLoaderService {
  private loadedModules = new Set<string>();

  loadModule(name: string): void {
    if (!this.loadedModules.has(name)) {
      this.loadedModules.add(name);
    }
  }
}
