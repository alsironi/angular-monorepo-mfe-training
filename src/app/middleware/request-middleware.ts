import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RequestMiddleware {
  process(request: any): any {
    request.headers = request.headers || {};
    request.headers['X-Request-ID'] = this.generateRequestId();
    return request;
  }

  private generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}
