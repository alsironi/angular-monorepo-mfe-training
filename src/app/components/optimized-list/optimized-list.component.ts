import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-optimized-list',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="list" *ngFor="let item of items">{{ item }}</div>`
})
export class OptimizedListComponent {
  items: any[] = [];
}
