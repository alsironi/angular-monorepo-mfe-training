import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-image-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-image-gallery.component.html',
  styleUrls: ['./product-image-gallery.component.scss']
})
export class ProductImageGalleryComponent {
  images = input.required<string[]>();
  currentIndex = signal(0);
  
  selectImage(index: number): void {
    if (index >= 0 && index < this.images().length) {
      this.currentIndex.set(index);
    }
  }
  
  next(): void {
    const next = (this.currentIndex() + 1) % this.images().length;
    this.currentIndex.set(next);
  }
  
  prev(): void {
    const prev = this.currentIndex() === 0 ? this.images().length - 1 : this.currentIndex() - 1;
    this.currentIndex.set(prev);
  }
}
