import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { AuthenticationService, UserAuthData, AuthState } from './authentication.service';

/**
 * Test suite for AuthenticationService
 * Tests all authentication functionality including login, logout, and session management
 */
describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    // Create spy for Router
    routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        { provide: Router, useValue: routerSpy }
      ]
    });

    service = TestBed.inject(AuthenticationService);
  });

  afterEach(() => {
    // Clear localStorage after each test
    localStorage.clear();
  });

  describe('Service Creation', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
      expect(service).toBeInstanceOf(AuthenticationService);
    });

    it('should have all required methods', () => {
      expect(typeof service.setPassword).toBe('function');
      expect(typeof service.getPassword).toBe('function');
      expect(typeof service.setIslogin).toBe('function');
      expect(typeof service.getIslogin).toBe('function');
      expect(typeof service.setUseremail).toBe('function');
      expect(typeof service.getUseremail).toBe('function');
      expect(typeof service.setUsername).toBe('function');
      expect(typeof service.getUsername).toBe('function');
      expect(typeof service.setLoginmode).toBe('function');
      expect(typeof service.getLoginmode).toBe('function');
      expect(typeof service.isLoggedIn).toBe('function');
      expect(typeof service.setFirsttimelogin).toBe('function');
      expect(typeof service.getFirsttimelogin).toBe('function');
      expect(typeof service.logout).toBe('function');
      expect(typeof service.login).toBe('function');
    });
  });

  describe('Password Management', () => {
    it('should set and get password correctly', () => {
      const password = 'testPassword123';
      
      service.setPassword(password);
      const retrievedPassword = service.getPassword();
      
      expect(retrievedPassword).toBe(password);
    });

    it('should throw error when setting empty password', () => {
      expect(() => service.setPassword('')).toThrowError('Password must be a non-empty string');
    });

    it('should throw error when setting null password', () => {
      expect(() => service.setPassword(null as any)).toThrowError('Password must be a non-empty string');
    });

    it('should return null when password is not set', () => {
      const password = service.getPassword();
      expect(password).toBeNull();
    });
  });

  describe('Login Status Management', () => {
    it('should set and get login status correctly', () => {
      service.setIslogin('true');
      expect(service.getIslogin()).toBe('true');
      
      service.setIslogin('false');
      expect(service.getIslogin()).toBe('false');
    });

    it('should throw error when setting invalid login status', () => {
      expect(() => service.setIslogin('invalid')).toThrowError('Login status must be "true" or "false"');
    });

    it('should return null when login status is not set', () => {
      expect(service.getIslogin()).toBeNull();
    });

    it('should correctly identify logged in state', () => {
      expect(service.isLoggedIn()).toBe(false);
      
      service.setIslogin('true');
      expect(service.isLoggedIn()).toBe(true);
      
      service.setIslogin('false');
      expect(service.isLoggedIn()).toBe(false);
    });
  });

  describe('User Email Management', () => {
    it('should set and get user email correctly', () => {
      const email = 'test@example.com';
      
      service.setUseremail(email);
      const retrievedEmail = service.getUseremail();
      
      expect(retrievedEmail).toBe(email);
    });

    it('should throw error when setting empty email', () => {
      expect(() => service.setUseremail('')).toThrowError('User email must be a non-empty string');
    });

    it('should return null when email is not set', () => {
      expect(service.getUseremail()).toBeNull();
    });
  });

  describe('Username Management', () => {
    it('should set and get username correctly', () => {
      const username = 'testuser';
      
      service.setUsername(username);
      const retrievedUsername = service.getUsername();
      
      expect(retrievedUsername).toBe(username);
    });

    it('should throw error when setting empty username', () => {
      expect(() => service.setUsername('')).toThrowError('Username must be a non-empty string');
    });

    it('should return null when username is not set', () => {
      expect(service.getUsername()).toBeNull();
    });
  });

  describe('Login Mode Management', () => {
    it('should set and get login mode correctly', () => {
      const loginMode = 'student';
      
      service.setLoginmode(loginMode);
      const retrievedLoginMode = service.getLoginmode();
      
      expect(retrievedLoginMode).toBe(loginMode);
    });

    it('should throw error when setting empty login mode', () => {
      expect(() => service.setLoginmode('')).toThrowError('Login mode must be a non-empty string');
    });

    it('should return null when login mode is not set', () => {
      expect(service.getLoginmode()).toBeNull();
    });
  });

  describe('First Time Login Management', () => {
    it('should set and get first time login status correctly', () => {
      service.setFirsttimelogin('true');
      expect(service.getFirsttimelogin()).toBe('true');
      
      service.setFirsttimelogin('false');
      expect(service.getFirsttimelogin()).toBe('false');
    });

    it('should throw error when setting invalid first time login status', () => {
      expect(() => service.setFirsttimelogin('invalid')).toThrowError('First time login status must be "true" or "false"');
    });

    it('should return null when first time login status is not set', () => {
      expect(service.getFirsttimelogin()).toBeNull();
    });

    it('should correctly identify first time login', () => {
      expect(service.isFirstTimeLogin()).toBe(false);
      
      service.setFirsttimelogin('true');
      expect(service.isFirstTimeLogin()).toBe(true);
      
      service.setFirsttimelogin('false');
      expect(service.isFirstTimeLogin()).toBe(false);
    });
  });

  describe('Authentication State Management', () => {
    it('should initialize with correct default state', () => {
      const authState = service.getAuthState();
      
      expect(authState.isAuthenticated).toBe(false);
      expect(authState.user).toBeNull();
      expect(authState.loginMode).toBeNull();
    });

    it('should update auth state when user logs in', () => {
      service.setUsername('testuser');
      service.setUseremail('test@example.com');
      service.setLoginmode('student');
      service.setIslogin('true');
      service.setFirsttimelogin('true');

      const authState = service.getAuthState();
      
      expect(authState.isAuthenticated).toBe(true);
      expect(authState.user).toBeTruthy();
      expect(authState.user?.username).toBe('testuser');
      expect(authState.user?.useremail).toBe('test@example.com');
      expect(authState.user?.loginmode).toBe('student');
      expect(authState.user?.isLoggedIn).toBe(true);
      expect(authState.user?.isFirstTimeLogin).toBe(true);
      expect(authState.loginMode).toBe('student');
    });

    it('should return current user data', () => {
      service.setUsername('testuser');
      service.setUseremail('test@example.com');
      service.setLoginmode('student');
      service.setIslogin('true');

      const currentUser = service.getCurrentUser();
      
      expect(currentUser).toBeTruthy();
      expect(currentUser?.username).toBe('testuser');
      expect(currentUser?.useremail).toBe('test@example.com');
      expect(currentUser?.loginmode).toBe('student');
    });

    it('should return null for current user when not logged in', () => {
      const currentUser = service.getCurrentUser();
      expect(currentUser).toBeNull();
    });
  });

  describe('Login Functionality', () => {
    it('should perform successful login', (done) => {
      const username = 'testuser';
      const password = 'testpass';
      const useremail = 'test@example.com';
      const loginmode = 'student';

      service.login(username, password, useremail, loginmode).subscribe({
        next: (response) => {
          expect(response.success).toBe(true);
          expect(response.name).toBe(username);
          expect(response.email).toBe(useremail);
          expect(response.message).toBe('Login successful');
          
          // Verify data is stored
          expect(service.getUsername()).toBe(username);
          expect(service.getUseremail()).toBe(useremail);
          expect(service.getLoginmode()).toBe(loginmode);
          expect(service.isLoggedIn()).toBe(true);
          expect(service.isFirstTimeLogin()).toBe(true);
          
          done();
        },
        error: done.fail
      });
    });

    it('should handle login with missing parameters', (done) => {
      service.login('', 'password', 'email', 'mode').subscribe({
        next: () => done.fail('Should have thrown error'),
        error: (error) => {
          expect(error.message).toBe('All login parameters are required');
          done();
        }
      });
    });

    it('should handle login with null parameters', (done) => {
      service.login(null as any, 'password', 'email', 'mode').subscribe({
        next: () => done.fail('Should have thrown error'),
        error: (error) => {
          expect(error.message).toBe('All login parameters are required');
          done();
        }
      });
    });
  });

  describe('Logout Functionality', () => {
    it('should perform logout and clear all data', () => {
      // Set up some data
      service.setUsername('testuser');
      service.setUseremail('test@example.com');
      service.setPassword('password');
      service.setLoginmode('student');
      service.setIslogin('true');
      service.setFirsttimelogin('true');

      // Perform logout
      service.logout();

      // Verify all data is cleared
      expect(service.getUsername()).toBeNull();
      expect(service.getUseremail()).toBeNull();
      expect(service.getPassword()).toBeNull();
      expect(service.getLoginmode()).toBeNull();
      expect(service.getIslogin()).toBeNull();
      expect(service.getFirsttimelogin()).toBeNull();
      expect(service.isLoggedIn()).toBe(false);

      // Verify navigation
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
    });

    it('should handle logout errors gracefully', () => {
      // Mock localStorage to throw error
      spyOn(localStorage, 'removeItem').and.throwError('Storage error');

      // Should not throw error and should still navigate
      expect(() => service.logout()).not.toThrow();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
    });
  });

  describe('Auth State Validation', () => {
    it('should validate stored auth data correctly', () => {
      expect(service.validateStoredAuth()).toBe(false);

      service.setUsername('testuser');
      service.setUseremail('test@example.com');
      service.setIslogin('true');

      expect(service.validateStoredAuth()).toBe(true);
    });

    it('should return false for invalid auth data', () => {
      service.setUsername('testuser');
      // Missing email and login status
      expect(service.validateStoredAuth()).toBe(false);

      service.setUseremail('test@example.com');
      service.setIslogin('false'); // Not logged in
      expect(service.validateStoredAuth()).toBe(false);
    });
  });

  describe('Reactive State Management', () => {
    it('should emit auth state changes', (done) => {
      service.authState$.subscribe({
        next: (authState: AuthState) => {
          expect(authState.isAuthenticated).toBe(true);
          expect(authState.user).toBeTruthy();
          expect(authState.user?.username).toBe('testuser');
          done();
        },
        error: done.fail
      });

      // Trigger state change
      service.setUsername('testuser');
      service.setUseremail('test@example.com');
      service.setLoginmode('student');
      service.setIslogin('true');
    });

    it('should update signal state', () => {
      service.setUsername('testuser');
      service.setUseremail('test@example.com');
      service.setLoginmode('student');
      service.setIslogin('true');

      const authState = service.authState();
      
      expect(authState.isAuthenticated).toBe(true);
      expect(authState.user).toBeTruthy();
      expect(authState.user?.username).toBe('testuser');
    });
  });

  describe('Error Handling', () => {
    it('should handle localStorage errors gracefully', () => {
      // Mock localStorage to throw error
      spyOn(localStorage, 'getItem').and.throwError('Storage error');

      expect(service.getUsername()).toBeNull();
      expect(service.getUseremail()).toBeNull();
      expect(service.getPassword()).toBeNull();
    });

    it('should handle localStorage set errors', () => {
      // Mock localStorage to throw error
      spyOn(localStorage, 'setItem').and.throwError('Storage error');

      expect(() => service.setUsername('test')).toThrowError('Storage error');
    });
  });

  describe('Edge Cases', () => {
    it('should handle special characters in stored data', () => {
      const specialUsername = 'user@#$%^&*()';
      const specialEmail = 'test+tag@example.com';
      
      service.setUsername(specialUsername);
      service.setUseremail(specialEmail);
      
      expect(service.getUsername()).toBe(specialUsername);
      expect(service.getUseremail()).toBe(specialEmail);
    });

    it('should handle very long strings', () => {
      const longString = 'a'.repeat(10000);
      
      service.setUsername(longString);
      service.setUseremail(longString);
      
      expect(service.getUsername()).toBe(longString);
      expect(service.getUseremail()).toBe(longString);
    });

    it('should handle unicode characters', () => {
      const unicodeUsername = '用户123🚀';
      const unicodeEmail = 'test@测试.com';
      
      service.setUsername(unicodeUsername);
      service.setUseremail(unicodeEmail);
      
      expect(service.getUsername()).toBe(unicodeUsername);
      expect(service.getUseremail()).toBe(unicodeEmail);
    });
  });
});
