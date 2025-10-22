import '@angular/compiler';
import { enableProdMode, importProvidersFrom, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideRouter, withRouterConfig } from '@angular/router';
import { routes } from './app/app-routing.module';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi, withFetch } from '@angular/common/http';
// import { provideClientHydration } from '@angular/platform-browser';
import { provideServiceWorker } from '@angular/service-worker';
import { DatePipe } from '@angular/common';
// Angular Forms and Common
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Angular Material Modules (core only)
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';

// App Modules
import { EcommerceModule } from './app/component/ECommerce/ecommerce.module';

// Services
import { RestapiService } from './app/service/restapi.service';
import { SnackbaralertService } from './app/service/snackbaralert.service';
import { LoggerService } from './app/service/logger.service';
import { GlobalService } from './app/service/global.service';
import { LoginService } from './app/service/auth/login.service';
import { ApiService } from './app/service/backendgameapi/api.service';
import { SheetdataService } from './app/service/sheet/sheetdata.service';
import { SpeechService } from './app/service/speech/SpeechService';
import { CapitalBudgetingService } from './app/shared/services/capital-budgeting.service';

// Error handling and logging
import { ErrorHandler } from '@angular/core';

// Type declarations for global objects
declare global {
  interface Window {
    angular17Ready?: boolean;
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Custom error handler for better error management
class CustomErrorHandler implements ErrorHandler {
  handleError(error: Error): void {
    // Log to console in development
    if (isDevMode()) {
      console.error('Application Error:', error);
    }
    
    // In production, you might want to send to a logging service
    if (environment.production) {
      // Send to external logging service (e.g., Sentry, LogRocket)
      console.error('Production Error:', error.message);
    }
    
    // Prevent the default error handling
    // This allows us to handle errors gracefully
  }
}

// Enable production mode if in production environment
if (environment.production) {
  enableProdMode();
}

// Performance monitoring
const startTime = performance.now();

// Bootstrap the application with comprehensive configuration
bootstrapApplication(AppComponent, {
  providers: [
    DatePipe,
    // Router configuration with enhanced options
    provideRouter(routes, withRouterConfig({
      onSameUrlNavigation: 'reload',
      paramsInheritanceStrategy: 'always',
      urlUpdateStrategy: 'deferred',
      canceledNavigationResolution: 'replace'
    })),
    
    // Animation providers - use noop animations in SSR or when animations are disabled
    provideAnimations(),
    
    // HTTP client with interceptors and fetch support
    provideHttpClient(
      withInterceptorsFromDi(),
      withFetch()
    ),
    
    // Client hydration for SSR (disabled in development to avoid warnings)
    // provideClientHydration(),
    
    // Service Worker for PWA functionality
    provideServiceWorker('ngsw-worker.js'),
    
    // Custom error handler
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    
    // Angular Forms and Common modules
    importProvidersFrom(
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ),
    
    // Core Angular Material Modules (essential for login)
    importProvidersFrom(
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      MatProgressSpinnerModule,
      MatSnackBarModule
    ),
    
    // App Modules - Loaded lazily to improve startup performance
    // EcommerceModule and other heavy modules should be loaded via lazy loading
    // Use SharedMaterialModule for additional Material components when needed
    
    // App Modules
    importProvidersFrom(
      EcommerceModule
    ),
    
    // App-wide services with proper dependency injection
    RestapiService,
    SnackbaralertService,
    LoggerService,
    GlobalService,
    LoginService,
    ApiService,
    SheetdataService,
    SpeechService,
    CapitalBudgetingService
  ]
}).then(() => {
  // Application successfully bootstrapped
  const loadTime = performance.now() - startTime;
  
  if (isDevMode()) {
    console.log(`🚀 Angular 17 application bootstrapped successfully in ${loadTime.toFixed(2)}ms`);
  }
  
  // Mark Angular app as ready for the loading indicator
  if (typeof window !== 'undefined') {
    window.angular17Ready = true;
    
    // Trigger loading indicator removal
    const event = new CustomEvent('angular-ready');
    window.dispatchEvent(event);
  }
  
  // Performance tracking
  if (environment.production && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'angular_bootstrap_complete', {
      'event_category': 'performance',
      'event_label': 'bootstrap_time',
      'value': Math.round(loadTime)
    });
  }
}).catch((error: Error) => {
  // Enhanced error handling for bootstrap failures
  console.error('❌ Failed to bootstrap Angular application:', error);
  
  // Show user-friendly error message
  const errorContainer = document.createElement('div');
  errorContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f44336;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    padding: 20px;
  `;
  
  errorContainer.innerHTML = `
    <h1>⚠️ Application Error</h1>
    <p>We're sorry, but the application failed to start properly.</p>
    <p>Please try refreshing the page or contact support if the problem persists.</p>
    <button onclick="window.location.reload()" style="
      background: white;
      color: #f44336;
      border: none;
      padding: 12px 24px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 20px;
    ">Refresh Page</button>
  `;
  
  document.body.appendChild(errorContainer);
  
  // Log detailed error for debugging
  if (isDevMode()) {
    console.group('Bootstrap Error Details');
    console.error('Error:', error);
    console.error('Stack:', error.stack);
    console.error('Environment:', environment);
    console.groupEnd();
  }
  
  // Send error to analytics in production
  if (environment.production && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'exception', {
      'description': error.message,
      'fatal': true
    });
  }
});

// Global error handling for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
  
  if (environment.production && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'exception', {
      'description': 'Unhandled Promise Rejection: ' + event.reason,
      'fatal': false
    });
  }
  
  // Prevent the default browser behavior
  event.preventDefault();
});

// Performance monitoring for long tasks (only in development)
if (isDevMode() && 'PerformanceObserver' in window) {
  let longTaskCount = 0;
  const maxLongTasks = 1; // Reduced to 1 to minimize console noise
  
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.duration > 1000 && longTaskCount < maxLongTasks) { // Increased threshold to 1000ms
        console.warn('Long task detected:', entry);
        longTaskCount++;
        
        if (longTaskCount >= maxLongTasks) {
          console.warn('Long task monitoring paused - too many warnings');
          observer.disconnect();
        }
      }
    }
  });
  
  observer.observe({ entryTypes: ['longtask'] });
}

// Service Worker update handling
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.log('Service Worker updated - reloading for new version');
    window.location.reload();
  });
  
  // Handle service worker registration errors
  navigator.serviceWorker.register('ngsw-worker.js').catch((error) => {
    console.warn('Service Worker registration failed:', error);
  });
}

// Handle manifest loading errors
if ('serviceWorker' in navigator && 'manifest' in document.createElement('link')) {
  const manifestLink = document.querySelector('link[rel="manifest"]');
  if (manifestLink) {
    manifestLink.addEventListener('error', (event) => {
      console.warn('Manifest loading error:', event);
    });
  }
}
