import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
    
    return next.handle(apiReq).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP Error:', error.status);
        if (error.status === 401) {
          this.handleUnauthorized();
        }
        return throwError(() => error);
      })
    );
  }
  
  private getToken(): string {
    return localStorage.getItem('auth_token') || '';
  }
  
  private handleUnauthorized(): void {
    localStorage.removeItem('auth_token');
    window.location.href = '/login';
  }
}
