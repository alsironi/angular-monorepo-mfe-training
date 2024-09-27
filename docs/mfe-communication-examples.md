# MFE Communication Examples

## Event Bus Usage

### Product Selected Event
```typescript
// In Products MFE
this.mfeBus.emit('products-mfe', 'product-selected', { id: '123', name: 'Product' });

// In Cart MFE (listening)
this.mfeBus.onEvent('product-selected').subscribe(event => {
  console.log('Product selected:', event.payload);
});
```

### Cart Updated Event
```typescript
// In Cart MFE
this.mfeBus.emit('cart-mfe', 'cart-updated', { itemCount: 5 });

// In Shell (listening)
this.mfeBus.onEvent('cart-updated').subscribe(event => {
  this.updateCartBadge(event.payload.itemCount);
});
```

## Shared State Usage

```typescript
constructor(private sharedCart: SharedCartService) {}

addToCart(product: Product): void {
  this.sharedCart.addItem({
    id: product.id,
    name: product.name,
    quantity: 1,
    price: product.price
  });
  
  // Listen to cart changes
  this.cartCount$ = this.sharedCart.itemCount;
}
```

## Performance Monitoring

```typescript
this.perf.markStart('api-call', 'products-mfe');
await this.productService.getProducts().toPromise();
this.perf.markEnd('api-call', 'products-mfe');
this.perf.measure('api-call', 'products-mfe');
```
