# Service Usage Examples

## ProductService Example
```typescript
constructor(private productService: ProductService) {}

loadProducts() {
  this.productService.getProducts(1).subscribe(data => {
    console.log('Products:', data);
  });
}
```

## CartService Example
```typescript
constructor(private cartService: CartService) {}

addToCart() {
  this.cartService.addItem({
    productId: '123',
    quantity: 1,
    price: 29.99
  });
}
```

## AccessibilityService Example
```typescript
constructor(private a11y: AccessibilityService) {}

notifyUser() {
  this.a11y.announceToScreenReader('Item added to cart', 'polite');
}
```
