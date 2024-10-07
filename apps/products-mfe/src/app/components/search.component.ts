import { Component, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="search-box">
      <input type="text" [(ngModel)]="query" (keyup)="onSearch()" 
             placeholder="Search products..." aria-label="Search for products" />
    </div>
  `
})
export class SearchComponent {
  query = '';
  searchTriggered = output<string>();
  private searchSubject = new Subject<string>();
  
  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(300)).subscribe(q => {
      this.searchTriggered.emit(q);
    });
  }
  
  onSearch(): void {
    this.searchSubject.next(this.query);
  }
}
