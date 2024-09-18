# Micro Frontend Architecture

## Overview
This document outlines the Module Federation architecture for the e-commerce platform.

## MFE Structure

### Shell (Main Host)
- Port: 4200
- Responsibilities: Main navigation, routing orchestration
- Exposes: Shared services, state management

### Products MFE
- Port: 4201
- Responsibilities: Product catalog, filtering, search
- Exposes: ProductsModule, ProductsRoutes

### Cart MFE
- Port: 4202
- Responsibilities: Shopping cart management
- Exposes: CartModule, CartRoutes

### Checkout MFE
- Port: 4203
- Responsibilities: Order processing
- Exposes: CheckoutModule, CheckoutRoutes

## Communication Patterns

### Event Bus
Use MFEBusService for pub/sub communication:
- Event types: product-selected, cart-updated, checkout-started
- Listeners can subscribe to specific event types

### Shared State
SharedCartService provides cross-MFE cart state using Signals.

### Shared Services
Common services exposed through Webpack shared config:
- ProductService
- CartService
- StateManagementService
- AccessibilityService

## Performance Considerations
- Lazy loading of remote modules
- Shared Angular dependencies (singleton pattern)
- MFE performance monitoring
- Bundle analysis and optimization
