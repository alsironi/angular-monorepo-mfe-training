import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Product } from '../models/product.model';

export class LoadProducts {
  static readonly type = '[Product] Load Products';
}

@State<Product[]>({
  name: 'products',
  defaults: []
})
@Injectable()
export class ProductState {
  @Selector()
  static products(state: Product[]) {
    return state;
  }

  @Action(LoadProducts)
  loadProducts(ctx: StateContext<Product[]>) {
    // Implementation will be added
  }
}
