# Services Architecture

## Overview
This document outlines the core services architecture for the monorepo MFE application.

## Core Services

### ProductService
- Handles product queries and caching
- Implements Signal-based reactive state
- Provides filtering and pagination

### CartService  
- Manages shopping cart state
- Uses Signals for reactivity
- Handles add/remove/update operations

### AccessibilityService
- Ensures WCAG 2.1 AA compliance
- Manages screen reader announcements
- Handles user preference detection

### StateManagementService
- Centralized state management using Signals
- Reactive updates for app-wide state

## HTTP Communication
All HTTP communication goes through the ApiInterceptor which handles:
- Authentication token injection
- Error handling
- Request/response logging
