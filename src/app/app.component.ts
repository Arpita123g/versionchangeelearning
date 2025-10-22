import { Component, inject, OnInit, OnDestroy, signal, computed, effect, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subject, timer, fromEvent, merge, Subscription } from 'rxjs';
// import { LoginService } from 'src/app/service/auth/login.service';
// import { Subscription, timer } from "rxjs";

// Enhanced types for better type safety
interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  timestamp: Date;
  persistent?: boolean;
}

interface AppState {
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
  showSkipLink: boolean;
  showKeyboardNavIndicator: boolean;
  isOnline: boolean;
  theme: 'light' | 'dark' | 'auto';
}

interface KeyboardEvent {
  code: string;
  key: string;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
}

// Constants for better maintainability
const KEYBOARD_NAVIGATION_KEYS = ['Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'Space'] as const;
const TOAST_DEFAULT_DURATION = 5000;
const KEYBOARD_INDICATOR_TIMEOUT = 3000;
const APP_INITIALIZATION_DELAY = 100; // Reduced from 1000ms to 100ms for faster startup
const TIME_UPDATE_INTERVAL = 5000; // Reduced frequency from 1s to 5s to improve performance

declare var gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush // OnPush for better performance
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'elearning';
  time = new Date();
  rxTime = new Date();
  
  // Angular 17 Signals for reactive state management
  private readonly _destroy$ = new Subject<void>();
  private readonly subscriptions = new Subscription();
  
  // Application state signals
  public readonly isLoading = signal<boolean>(false);
  public readonly hasError = signal<boolean>(false);
  public readonly errorMessage = signal<string>('');
  public readonly showSkipLink = signal<boolean>(false);
  public readonly showKeyboardNavIndicator = signal<boolean>(false);
  public readonly isOnline = signal<boolean>(navigator.onLine);
  public readonly theme = signal<'light' | 'dark' | 'auto'>('auto');
  
  // Toast notifications with enhanced features
  public readonly toasts = signal<Toast[]>([]);
  
  // Computed properties with enhanced state
  public readonly appState = computed<AppState>(() => ({
    isLoading: this.isLoading(),
    hasError: this.hasError(),
    errorMessage: this.errorMessage(),
    showSkipLink: this.showSkipLink(),
    showKeyboardNavIndicator: this.showKeyboardNavIndicator(),
    isOnline: this.isOnline(),
    theme: this.theme()
  }));

  // Performance optimizations
  public readonly hasActiveToasts = computed(() => this.toasts().length > 0);
  public readonly hasErrors = computed(() => this.hasError() || this.toasts().some(t => t.type === 'error'));

  // Dependency injection
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);
  
  constructor(
    // private _login: LoginService,
    ) {
    // Setup Google Analytics tracking
    this.setupAnalytics();
    
    // Setup accessibility features
    this.setupAccessibility();
    
    // Setup network status monitoring
    this.setupNetworkMonitoring();
    
    // Setup theme detection
    this.setupThemeDetection();
    
    // Setup effects for reactive behavior
    this.setupEffects();
  }

  ngOnInit(): void {
    // Initialize application state
    this.initializeApp();
    
    // Start time updates
    this.startTimeUpdates();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
    this.subscriptions.unsubscribe();
  }

  /**
   * Setup Google Analytics tracking with error handling
   */
  private setupAnalytics(): void {
    this.subscriptions.add(
      this.router.events.pipe(
        filter(e => e instanceof NavigationEnd)
      ).subscribe({
        next: (e: any) => {
          try {
            gtag('config', 'G-69F19D3J2J', {'page_path': e.urlAfterRedirects});
          } catch (error) {
            console.warn('Google Analytics tracking failed:', error);
          }
        },
        error: (error) => {
          console.warn('Router events subscription error:', error);
        }
      })
    );
  }

  /**
   * Setup accessibility features
   */
  private setupAccessibility(): void {
    // Keyboard navigation detection with debouncing
    const keyboardEvents$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      debounceTime(100),
      distinctUntilChanged((prev, curr) => prev.code === curr.code)
    );

    const mouseEvents$ = fromEvent<MouseEvent>(document, 'mousedown');

    this.subscriptions.add(
      merge(keyboardEvents$, mouseEvents$).subscribe((event) => {
        if (event instanceof KeyboardEvent) {
          this.handleKeyboardEvent(event);
        } else {
          this.handleMouseEvent();
        }
      })
    );
  }

  /**
   * Setup network status monitoring
   */
  private setupNetworkMonitoring(): void {
    this.subscriptions.add(
      fromEvent(window, 'online').subscribe(() => {
        this.isOnline.set(true);
        this.showSuccess('Connection restored');
      })
    );

    this.subscriptions.add(
      fromEvent(window, 'offline').subscribe(() => {
        this.isOnline.set(false);
        this.showWarning('Connection lost');
      })
    );
  }

  /**
   * Setup theme detection
   */
  private setupThemeDetection(): void {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateTheme = () => {
      if (this.theme() === 'auto') {
        document.documentElement.setAttribute('data-theme', mediaQuery.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', updateTheme);
    updateTheme(); // Initial setup
  }

  /**
   * Setup reactive effects
   */
  private setupEffects(): void {
    // Effect to handle error state changes
    effect(() => {
      const hasError = this.hasError();
      const errorMessage = this.errorMessage();
      
      if (hasError && errorMessage) {
        console.error('Application Error:', errorMessage);
        // Could trigger error reporting service here
      }
    });

    // Effect to handle loading state changes
    effect(() => {
      const isLoading = this.isLoading();
      if (isLoading) {
        // Could trigger loading analytics here
        console.log('Application loading started');
      } else {
        console.log('Application loading completed');
      }
    });

    // Effect to handle toast changes
    effect(() => {
      const toasts = this.toasts();
      if (toasts.length > 0) {
        // Could trigger toast analytics here
        console.log(`Active toasts: ${toasts.length}`);
      }
    });
  }

  /**
   * Handle keyboard events with enhanced detection
   */
  private handleKeyboardEvent(event: KeyboardEvent): void {
    if (KEYBOARD_NAVIGATION_KEYS.includes(event.code as any)) {
      this.showKeyboardNavIndicator.set(true);
      
      // Special handling for Tab key
      if (event.code === 'Tab') {
        this.showSkipLink.set(true);
      }
      
      // Hide indicator after timeout
      setTimeout(() => {
        this.showKeyboardNavIndicator.set(false);
      }, KEYBOARD_INDICATOR_TIMEOUT);
    }
  }

  /**
   * Handle mouse events
   */
  private handleMouseEvent(): void {
    this.showKeyboardNavIndicator.set(false);
    this.showSkipLink.set(false);
  }

  /**
   * Initialize application state and services
   */
  private initializeApp(): void {
    this.isLoading.set(true);
    
    // Simulate app initialization with better error handling
    this.subscriptions.add(
      timer(APP_INITIALIZATION_DELAY).subscribe({
        next: () => {
          this.isLoading.set(false);
          this.showSuccess('Application loaded successfully');
        },
        error: (error) => {
          this.isLoading.set(false);
          this.showError('Failed to initialize application');
          console.error('App initialization error:', error);
        }
      })
    );
  }

  /**
   * Start time updates for clock functionality
   */
  private startTimeUpdates(): void {
    this.subscriptions.add(
      timer(0, TIME_UPDATE_INTERVAL).subscribe({
        next: () => {
          this.time = new Date();
          this.rxTime = new Date();
          this.cdr.markForCheck(); // Trigger change detection
        },
        error: (error) => {
          console.error('Time update error:', error);
        }
      })
    );
  }

  /**
   * Retry operation when error occurs
   */
  public retryOperation(): void {
    this.hasError.set(false);
    this.errorMessage.set('');
    this.initializeApp();
  }

  /**
   * Add a new toast notification with enhanced features
   */
  public addToast(
    message: string, 
    type: Toast['type'] = 'info', 
    duration: number = TOAST_DEFAULT_DURATION,
    persistent: boolean = false
  ): void {
    const toast: Toast = {
      id: this.generateId(),
      message,
      type,
      duration: persistent ? 0 : duration,
      timestamp: new Date(),
      persistent
    };

    this.toasts.update(toasts => [...toasts, toast]);

    // Auto-dismiss toast after duration (unless persistent)
    if (duration > 0 && !persistent) {
      this.subscriptions.add(
        timer(duration).subscribe(() => {
          this.dismissToast(toast.id);
        })
      );
    }
  }

  /**
   * Dismiss a toast notification
   */
  public dismissToast(id: string): void {
    this.toasts.update(toasts => toasts.filter(toast => toast.id !== id));
  }

  /**
   * Dismiss all toasts
   */
  public dismissAllToasts(): void {
    this.toasts.set([]);
  }

  /**
   * Track toast by ID for performance
   */
  public trackToast(index: number, toast: Toast): string {
    return toast.id;
  }

  /**
   * Show global error with enhanced error handling
   */
  public showError(message: string, error?: Error): void {
    this.hasError.set(true);
    this.errorMessage.set(message);
    
    if (error) {
      console.error('Application Error:', error);
      // Could send to error reporting service
    }
  }

  /**
   * Hide global error
   */
  public hideError(): void {
    this.hasError.set(false);
    this.errorMessage.set('');
  }

  /**
   * Set loading state
   */
  public setLoading(loading: boolean): void {
    this.isLoading.set(loading);
  }

  /**
   * Generate unique ID for toasts with improved uniqueness
   */
  private generateId(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 15);
    const perfTime = performance.now().toString(36).replace('.', '');
    return `${timestamp}-${random}-${perfTime}`;
  }

  /**
   * Show success toast
   */
  public showSuccess(message: string, persistent: boolean = false): void {
    this.addToast(message, 'success', TOAST_DEFAULT_DURATION, persistent);
  }

  /**
   * Show error toast
   */
  public showErrorToast(message: string, persistent: boolean = false): void {
    this.addToast(message, 'error', TOAST_DEFAULT_DURATION, persistent);
  }

  /**
   * Show warning toast
   */
  public showWarning(message: string, persistent: boolean = false): void {
    this.addToast(message, 'warning', TOAST_DEFAULT_DURATION, persistent);
  }

  /**
   * Show info toast
   */
  public showInfo(message: string, persistent: boolean = false): void {
    this.addToast(message, 'info', TOAST_DEFAULT_DURATION, persistent);
  }

  /**
   * Set theme preference
   */
  public setTheme(theme: 'light' | 'dark' | 'auto'): void {
    this.theme.set(theme);
    
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      document.documentElement.setAttribute('data-theme', mediaQuery.matches ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  /**
   * Get current theme
   */
  public getCurrentTheme(): string {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }

  /**
   * Check if user is online
   */
  public getOnlineStatus(): boolean {
    return this.isOnline();
  }

  /**
   * Force refresh application state
   */
  public refreshApp(): void {
    this.isLoading.set(true);
    this.hasError.set(false);
    this.errorMessage.set('');
    this.dismissAllToasts();
    
    setTimeout(() => {
      this.isLoading.set(false);
      this.showSuccess('Application refreshed successfully');
    }, 500);
  }
}
