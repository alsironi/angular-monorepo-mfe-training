import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface MFEEvent {
  source: string;
  type: string;
  payload: any;
  timestamp: Date;
}

@Injectable({ providedIn: 'root' })
export class MFEBusService {
  private eventBus = new BehaviorSubject<MFEEvent | null>(null);
  public events$: Observable<MFEEvent> = this.eventBus.asObservable().pipe(
    filter(event => event !== null)
  );
  
  private listeners = new Map<string, Subject<MFEEvent>>();
  
  emit(source: string, type: string, payload: any): void {
    const event: MFEEvent = {
      source,
      type,
      payload,
      timestamp: new Date()
    };
    this.eventBus.next(event);
    
    if (this.listeners.has(type)) {
      this.listeners.get(type)!.next(event);
    }
  }
  
  onEvent(type: string): Observable<MFEEvent> {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, new Subject<MFEEvent>());
    }
    return this.listeners.get(type)!.asObservable();
  }
}
