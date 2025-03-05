import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LazyLoaderService {
  loadModule(path: string): Promise<any> {
    return import(path);
  }
}
