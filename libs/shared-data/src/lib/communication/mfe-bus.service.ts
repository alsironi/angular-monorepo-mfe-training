import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface MFEEvent {
  source: string;
  type: string;
  payload: any;
  timestamp: Date;
}

@Injectable({ providedIn: 'root' })
export class MFEBusService {
  private eventBus = new Subject<MFEEvent>();
  public events$: Observable<MFEEvent> = this.eventBus.asObservable();
  
  emit(source: string, type: string, payload: any): void {
    this.eventBus.next({
      source,
      type,
      payload,
      timestamp: new Date()
    });
  }
  
  onEvent(type: string): Observable<MFEEvent> {
    return this.events$.pipe(
      // filter(e => e.type === type)
    );
  }
}
