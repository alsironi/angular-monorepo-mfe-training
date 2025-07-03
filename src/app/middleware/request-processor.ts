import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RequestProcessor {
  process(request: any): Promise<any> {
    return Promise.resolve(request);
  }
}
