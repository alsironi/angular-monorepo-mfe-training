import { Injectable, signal } from '@angular/core';

export interface AppState {
  currentUser: any;
  isAuthenticated: boolean;
  selectedProductId: string | null;
}

@Injectable({ providedIn: 'root' })
export class StateManagementService {
  private state = signal<AppState>({
    currentUser: null,
    isAuthenticated: false,
    selectedProductId: null
  });
  
  public getState() {
    return this.state.asReadonly();
  }
  
  public setState(updates: Partial<AppState>): void {
    this.state.update(current => ({ ...current, ...updates }));
  }
}
