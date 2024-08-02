# Angular Monorepo MFE Training

A comprehensive training project replicating enterprise e-commerce migration to Angular 18 with Module Federation and NX monorepo architecture.

## Project Overview

**Training Scope**: Migrating a monolithic e-commerce platform (Telcom Company e-commerce, 39M customers) to a scalable micro-frontend architecture using Webpack Module Federation + NX.

**Status**: 🔄 In Progress
**Technology**: Angular 17→18, NX, Module Federation, TypeScript, Jest, Cypress

## Architecture

```
apps/
├── shell (MFE Host - Main e-commerce app)
├── products-mfe (Remote - Product Catalog)
├── cart-mfe (Remote - Shopping Cart)
└── checkout-mfe (Remote - Checkout Flow)

libs/
├── shared-ui (Reusable UI components)
├── shared-data (Services, models, types)
├── shared-utils (Helpers, validators)
└── shared-styles (Tailwind, CSS variables)
```

## Key Learning Areas

- ✅ NX Workspace Management
- ✅ Webpack Module Federation
- ✅ Scalable Architecture Patterns
- ✅ Angular 17→18 Migration
- ✅ Angular Signals & RxJS
- ✅ Testing Strategy (Jest >85% coverage)
- ✅ E2E Testing (Cypress)
- ✅ Performance Optimization
- ✅ CI/CD Pipelines

## Getting Started

```bash
npm install
nx serve shell
```


Álvaro León - Senior Frontend Developer

## Author

Álvaro León - Senior Frontend Developer
