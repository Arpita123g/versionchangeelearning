import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';

// Mock Google Analytics
declare var gtag: any;
const mockGtag = jasmine.createSpy('gtag');

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let routerEvents: Subject<NavigationEnd>;

  beforeEach(async () => {
    routerEvents = new Subject<NavigationEnd>();
    
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        AppComponent
      ],
      providers: [
        {
          provide: Router,
          useValue: {
            events: routerEvents.asObservable()
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    
    // Mock gtag
    (global as any).gtag = mockGtag;
  });

  afterEach(() => {
    mockGtag.calls.reset();
  });

  describe('Component Creation and Basic Properties', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    it('should have correct title', () => {
      expect(component.title).toEqual('elearning');
    });

    it('should have initial time values', () => {
      expect(component.time).toBeInstanceOf(Date);
      expect(component.rxTime).toBeInstanceOf(Date);
    });

    it('should render router outlet', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('router-outlet')).toBeTruthy();
    });
  });

  describe('Signals and Reactive State', () => {
    it('should initialize signals with correct default values', () => {
      expect(component.isLoading()).toBe(false);
      expect(component.hasError()).toBe(false);
      expect(component.errorMessage()).toBe('');
      expect(component.showSkipLink()).toBe(false);
      expect(component.showKeyboardNavIndicator()).toBe(false);
      expect(component.toasts()).toEqual([]);
    });

    it('should have computed appState', () => {
      const appState = component.appState();
      expect(appState).toEqual({
        isLoading: false,
        hasError: false,
        errorMessage: '',
        showSkipLink: false,
        showKeyboardNavIndicator: false
      });
    });

    it('should update appState when signals change', () => {
      component.isLoading.set(true);
      component.hasError.set(true);
      component.errorMessage.set('Test error');
      
      const appState = component.appState();
      expect(appState.isLoading).toBe(true);
      expect(appState.hasError).toBe(true);
      expect(appState.errorMessage).toBe('Test error');
    });
  });

  describe('Loading State Management', () => {
    it('should set loading state', () => {
      component.setLoading(true);
      expect(component.isLoading()).toBe(true);
      
      component.setLoading(false);
      expect(component.isLoading()).toBe(false);
    });

    it('should initialize with loading state', fakeAsync(() => {
      component.ngOnInit();
      expect(component.isLoading()).toBe(true);
      
      tick(1000);
      expect(component.isLoading()).toBe(false);
    }));
  });

  describe('Error Handling', () => {
    it('should show error message', () => {
      const errorMessage = 'Test error message';
      component.showError(errorMessage);
      
      expect(component.hasError()).toBe(true);
      expect(component.errorMessage()).toBe(errorMessage);
    });

    it('should hide error message', () => {
      component.showError('Test error');
      component.hideError();
      
      expect(component.hasError()).toBe(false);
      expect(component.errorMessage()).toBe('');
    });

    it('should retry operation', fakeAsync(() => {
      component.showError('Test error');
      component.retryOperation();
      
      expect(component.hasError()).toBe(false);
      expect(component.errorMessage()).toBe('');
      
      tick(1000);
      expect(component.isLoading()).toBe(false);
    }));
  });

  describe('Toast Notifications', () => {
    it('should add toast notification', () => {
      const message = 'Test toast message';
      component.addToast(message, 'success');
      
      const toasts = component.toasts();
      expect(toasts.length).toBe(1);
      expect(toasts[0].message).toBe(message);
      expect(toasts[0].type).toBe('success');
      expect(toasts[0].id).toBeDefined();
      expect(toasts[0].timestamp).toBeInstanceOf(Date);
    });

    it('should add toast with custom duration', fakeAsync(() => {
      component.addToast('Test message', 'info', 1000);
      
      expect(component.toasts().length).toBe(1);
      
      tick(1000);
      expect(component.toasts().length).toBe(0);
    }));

    it('should add toast without auto-dismiss', () => {
      component.addToast('Test message', 'error', 0);
      
      expect(component.toasts().length).toBe(1);
      expect(component.toasts()[0].duration).toBe(0);
    });

    it('should dismiss toast by id', () => {
      component.addToast('Test message 1', 'success');
      component.addToast('Test message 2', 'error');
      
      const toasts = component.toasts();
      expect(toasts.length).toBe(2);
      
      component.dismissToast(toasts[0].id);
      expect(component.toasts().length).toBe(1);
      expect(component.toasts()[0].message).toBe('Test message 2');
    });

    it('should track toast by id', () => {
      component.addToast('Test message', 'info');
      const toast = component.toasts()[0];
      
      const trackResult = component.trackToast(0, toast);
      expect(trackResult).toBe(toast.id);
    });

    it('should show success toast', () => {
      component.showSuccess('Success message');
      
      const toasts = component.toasts();
      expect(toasts.length).toBe(1);
      expect(toasts[0].type).toBe('success');
      expect(toasts[0].message).toBe('Success message');
    });

    it('should show error toast', () => {
      component.showErrorToast('Error message');
      
      const toasts = component.toasts();
      expect(toasts.length).toBe(1);
      expect(toasts[0].type).toBe('error');
      expect(toasts[0].message).toBe('Error message');
    });

    it('should show warning toast', () => {
      component.showWarning('Warning message');
      
      const toasts = component.toasts();
      expect(toasts.length).toBe(1);
      expect(toasts[0].type).toBe('warning');
      expect(toasts[0].message).toBe('Warning message');
    });

    it('should show info toast', () => {
      component.showInfo('Info message');
      
      const toasts = component.toasts();
      expect(toasts.length).toBe(1);
      expect(toasts[0].type).toBe('info');
      expect(toasts[0].message).toBe('Info message');
    });
  });

  describe('Accessibility Features', () => {
    it('should show skip link on tab key', () => {
      const tabEvent = new KeyboardEvent('keydown', { key: 'Tab' });
      document.dispatchEvent(tabEvent);
      
      expect(component.showSkipLink()).toBe(true);
    });

    it('should hide skip link on click', () => {
      component.showSkipLink.set(true);
      
      const clickEvent = new MouseEvent('click');
      document.dispatchEvent(clickEvent);
      
      expect(component.showSkipLink()).toBe(false);
    });

    it('should show keyboard navigation indicator on keyboard use', () => {
      const arrowEvent = new KeyboardEvent('keydown', { code: 'ArrowUp' });
      document.dispatchEvent(arrowEvent);
      
      expect(component.showKeyboardNavIndicator()).toBe(true);
    });

    it('should hide keyboard navigation indicator on mouse use', () => {
      component.showKeyboardNavIndicator.set(true);
      
      const mouseEvent = new MouseEvent('mousedown');
      document.dispatchEvent(mouseEvent);
      
      expect(component.showKeyboardNavIndicator()).toBe(false);
    });
  });

  describe('Time Updates', () => {
    it('should update time values', fakeAsync(() => {
      const initialTime = component.time.getTime();
      
      tick(1000);
      
      expect(component.time.getTime()).toBeGreaterThan(initialTime);
      expect(component.rxTime.getTime()).toBeGreaterThan(initialTime);
    }));
  });

  describe('Google Analytics Integration', () => {
    it('should track navigation events', () => {
      const navigationEnd = new NavigationEnd(1, '/test', '/test');
      routerEvents.next(navigationEnd);
      
      expect(mockGtag).toHaveBeenCalledWith(
        'config', 
        'G-69F19D3J2J', 
        { 'page_path': '/test' }
      );
    });
  });

  describe('Template Rendering', () => {
    it('should render app container', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.app-container')).toBeTruthy();
    });

    it('should render main content area', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.app-main')).toBeTruthy();
    });

    it('should render loading indicator when loading', () => {
      component.isLoading.set(true);
      fixture.detectChanges();
      
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.global-loading')).toBeTruthy();
      expect(compiled.querySelector('.loading-spinner')).toBeTruthy();
      expect(compiled.querySelector('.spinner')).toBeTruthy();
      expect(compiled.querySelector('.loading-text')).toBeTruthy();
    });

    it('should not render loading indicator when not loading', () => {
      component.isLoading.set(false);
      fixture.detectChanges();
      
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.global-loading')).toBeFalsy();
    });

    it('should render error handler when error exists', () => {
      component.showError('Test error message');
      fixture.detectChanges();
      
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.global-error')).toBeTruthy();
      expect(compiled.querySelector('.error-container')).toBeTruthy();
      expect(compiled.querySelector('.error-icon')).toBeTruthy();
      expect(compiled.querySelector('.error-content')).toBeTruthy();
      expect(compiled.querySelector('.error-retry-btn')).toBeTruthy();
    });

    it('should not render error handler when no error', () => {
      component.hideError();
      fixture.detectChanges();
      
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.global-error')).toBeFalsy();
    });

    it('should render toast container', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.toast-container')).toBeTruthy();
    });

    it('should render toasts when they exist', () => {
      component.addToast('Test toast', 'success');
      fixture.detectChanges();
      
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.toast')).toBeTruthy();
      expect(compiled.querySelector('.toast-content')).toBeTruthy();
      expect(compiled.querySelector('.toast-message')).toBeTruthy();
      expect(compiled.querySelector('.toast-close')).toBeTruthy();
    });

    it('should render skip link when needed', () => {
      component.showSkipLink.set(true);
      fixture.detectChanges();
      
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.skip-link')).toBeTruthy();
    });

    it('should render keyboard navigation indicator when needed', () => {
      component.showKeyboardNavIndicator.set(true);
      fixture.detectChanges();
      
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.keyboard-nav-indicator')).toBeTruthy();
    });
  });

  describe('Component Lifecycle', () => {
    it('should initialize properly', fakeAsync(() => {
      component.ngOnInit();
      
      expect(component.isLoading()).toBe(true);
      
      tick(1000);
      expect(component.isLoading()).toBe(false);
    }));

    it('should clean up on destroy', () => {
      const destroySpy = spyOn(component['_destroy$'], 'next');
      const completeSpy = spyOn(component['_destroy$'], 'complete');
      
      component.ngOnDestroy();
      
      expect(destroySpy).toHaveBeenCalled();
      expect(completeSpy).toHaveBeenCalled();
    });
  });

  describe('Utility Functions', () => {
    it('should generate unique IDs', () => {
      const id1 = (component as any).generateId();
      const id2 = (component as any).generateId();
      
      expect(id1).toBeDefined();
      expect(id2).toBeDefined();
      expect(id1).not.toBe(id2);
      expect(typeof id1).toBe('string');
      expect(typeof id2).toBe('string');
    });
  });

  describe('Error Scenarios', () => {
    it('should handle multiple toasts', () => {
      component.addToast('Toast 1', 'success');
      component.addToast('Toast 2', 'error');
      component.addToast('Toast 3', 'warning');
      
      expect(component.toasts().length).toBe(3);
    });

    it('should handle rapid state changes', () => {
      component.setLoading(true);
      component.setLoading(false);
      component.setLoading(true);
      
      expect(component.isLoading()).toBe(true);
    });

    it('should handle multiple error states', () => {
      component.showError('Error 1');
      component.showError('Error 2');
      
      expect(component.hasError()).toBe(true);
      expect(component.errorMessage()).toBe('Error 2');
    });
  });
});
