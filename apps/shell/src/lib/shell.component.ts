import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav class="mfe-shell-nav" role="navigation" aria-label="Main navigation">
      <a href="/products" class="nav-link">Products</a>
      <a href="/cart" class="nav-link">Cart</a>
      <a href="/checkout" class="nav-link">Checkout</a>
    </nav>
    <main class="mfe-content" role="main">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; height: 100vh; }
    .mfe-shell-nav { display: flex; gap: 1rem; padding: 1rem; background: #f5f5f5; }
    .nav-link { color: #333; text-decoration: none; padding: 0.5rem 1rem; }
  `]
})
export class ShellComponent implements OnInit {
  ngOnInit(): void {
    console.log('Shell MFE initialized');
  }
}
