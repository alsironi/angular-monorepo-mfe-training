import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({
      setHeaders: {
        'X-API-Version': '1.0',
        'Authorization': `Bearer ${this.getToken()}`
      }
    });
    return next.handle(apiReq);
  }
  
  private getToken(): string {
    return localStorage.getItem('auth_token') || '';
  }
}
