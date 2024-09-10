import { Injectable } from '@angular/core';
import { NgModuleFactory, NgModuleRef, Injector } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MFELoaderService {
  private loadedModules = new Map<string, any>();
  
  async loadRemoteModule(remoteEntry: string, moduleName: string): Promise<any> {
    if (this.loadedModules.has(moduleName)) {
      return this.loadedModules.get(moduleName);
    }
    
    const script = document.createElement('script');
    script.src = remoteEntry;
    script.type = 'text/javascript';
    
    return new Promise((resolve, reject) => {
      script.onload = () => {
        const container = (window as any)[moduleName];
        const factory = container.ɵcmp;
        this.loadedModules.set(moduleName, factory);
        resolve(factory);
      };
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }
}
