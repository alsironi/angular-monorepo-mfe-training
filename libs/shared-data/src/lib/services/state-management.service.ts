import { Injectable, signal, computed } from '@angular/core';

export interface AppState {
  currentUser: any;
  isAuthenticated: boolean;
  selectedProductId: string | null;
  loading: boolean;
}

@Injectable({ providedIn: 'root' })
export class StateManagementService {
  private state = signal<AppState>({
    currentUser: null,
    isAuthenticated: false,
    selectedProductId: null,
    loading: false
  });
  
  public state$ = this.state.asReadonly();
  public isAuthenticated$ = computed(() => this.state().isAuthenticated);
  public isLoading$ = computed(() => this.state().loading);
  
  public setState(updates: Partial<AppState>): void {
    this.state.update(current => ({ ...current, ...updates }));
  }
  
  public reset(): void {
    this.state.set({
      currentUser: null,
      isAuthenticated: false,
      selectedProductId: null,
      loading: false
    });
  }
}
