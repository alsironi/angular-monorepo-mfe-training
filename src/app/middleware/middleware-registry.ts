import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MiddlewareRegistry {
  private middlewares: Map<string, any> = new Map();

  register(name: string, middleware: any): void {
    this.middlewares.set(name, middleware);
  }

  getMiddleware(name: string): any {
    return this.middlewares.get(name);
  }
}
