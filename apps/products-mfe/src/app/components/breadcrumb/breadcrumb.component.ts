import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li *ngFor="let item of items(); let last = last">
          <a *ngIf="!last" [routerLink]="item.path">{{ item.label }}</a>
          <span *ngIf="last" [attr.aria-current]="'page'">{{ item.label }}</span>
        </li>
      </ol>
    </nav>
  `
})
export class BreadcrumbComponent {
  items = input<any[]>([]);
}
