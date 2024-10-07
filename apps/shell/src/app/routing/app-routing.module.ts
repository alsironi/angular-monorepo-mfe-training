import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('products-mfe/ProductsModule').then(m => m.ProductsModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('cart-mfe/CartModule').then(m => m.CartModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('checkout-mfe/CheckoutModule').then(m => m.CheckoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
