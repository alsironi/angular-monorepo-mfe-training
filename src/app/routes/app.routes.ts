import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home.component').then(m => m.HomeComponent) },
  { path: 'products', loadComponent: () => import('./products.component').then(m => m.ProductsComponent) }
];
