import { Component, Input, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-boundary',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content *ngIf="!hasError; else errorTemplate></ng-content>
             <ng-template #errorTemplate>
               <div class="error">{{ errorMessage }}</div>
             </ng-template>`
})
export class ErrorBoundaryComponent {
  @Input() hasError = false;
  @Input() errorMessage = 'An error occurred';
}
