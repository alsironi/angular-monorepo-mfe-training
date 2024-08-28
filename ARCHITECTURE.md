# Architecture Overview

## Module Federation Structure

### Shell Application (Host)
- Main entry point
- Routes orchestration
- Shared dependencies management
- Global styles and theming

### Remote Applications (MFEs)
1. **Products MFE** - Product catalog, search, filtering
2. **Cart MFE** - Shopping cart management
3. **Checkout MFE** - Payment and order completion

## Shared Libraries
- shared-ui: Reusable Angular components
- shared-data: API services, models, state management
- shared-utils: Helper functions, validators
- shared-styles: Global styles, Tailwind configuration

## Technology Stack
- Angular 17 (migrating to 18)
- NX monorepo
- Webpack Module Federation
- TypeScript 5.2
- Jest for unit testing
- Cypress for E2E testing
- NgRx for state management
