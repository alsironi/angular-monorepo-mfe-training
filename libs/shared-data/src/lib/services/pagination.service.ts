import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PaginationService {
  private currentPage = signal(1);
  private pageSize = signal(10);
  private totalItems = signal(0);
  
  public pages = computed(() => Math.ceil(this.totalItems() / this.pageSize()));
  public canNextPage = computed(() => this.currentPage() < this.pages());
  public canPrevPage = computed(() => this.currentPage() > 1);
  
  nextPage(): void {
    if (this.canNextPage()) {
      this.currentPage.update(p => p + 1);
    }
  }
  
  prevPage(): void {
    if (this.canPrevPage()) {
      this.currentPage.update(p => p - 1);
    }
  }
  
  setPage(page: number): void {
    if (page >= 1 && page <= this.pages()) {
      this.currentPage.set(page);
    }
  }
}
