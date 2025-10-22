import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

/**
 * Interface for user authentication data
 */
export interface UserAuthData {
  username: string;
  useremail: string;
  loginmode: string;
  isLoggedIn: boolean;
  isFirstTimeLogin: boolean;
}

/**
 * Interface for login response
 */
export interface LoginResponse {
  name: string;
  email: string;
  success: boolean;
  message?: string;
}

/**
 * Interface for authentication state
 */
export interface AuthState {
  isAuthenticated: boolean;
  user: UserAuthData | null;
  loginMode: string | null;
}

/**
 * Service for managing user authentication and session data
 * Provides methods for login, logout, and session management
 * with secure localStorage handling and reactive state management
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly router = inject(Router);

  // Angular 17 signal for authentication state
  public readonly authState = signal<AuthState>({
    isAuthenticated: false,
    user: null,
    loginMode: null
  });

  // BehaviorSubject for reactive authentication state
  private readonly authStateSubject = new BehaviorSubject<AuthState>({
    isAuthenticated: false,
    user: null,
    loginMode: null
  });

  public readonly authState$ = this.authStateSubject.asObservable();

  // Storage keys for better maintainability
  private readonly STORAGE_KEYS = {
    USERNAME: 'username',
    USEREMAIL: 'useremail',
    USERPASSWORD: 'userpassword',
    ISLOGIN: 'islogin',
    LOGINMODE: 'loginmode',
    FIRSTTIMELOGIN: 'firstimelogin'
  } as const;

  constructor() {
    this.initializeAuthState();
  }

  /**
   * Initializes authentication state from localStorage
   */
  private initializeAuthState(): void {
    try {
      const isLoggedIn = this.getIslogin() === 'true';
      const user: UserAuthData | null = isLoggedIn ? {
        username: this.getUsername() || '',
        useremail: this.getUseremail() || '',
        loginmode: this.getLoginmode() || '',
        isLoggedIn: true,
        isFirstTimeLogin: this.getFirsttimelogin() === 'true'
      } : null;

      const authState: AuthState = {
        isAuthenticated: isLoggedIn,
        user,
        loginMode: this.getLoginmode()
      };

      this.authState.set(authState);
      this.authStateSubject.next(authState);
    } catch (error) {
      console.error('Error initializing auth state:', error);
      this.clearAuthState();
    }
  }

  /**
   * Sets user password in localStorage
   * @param userpassword - User password to store
   */
  public setPassword(userpassword: string): void {
    try {
      if (!userpassword || typeof userpassword !== 'string') {
        throw new Error('Password must be a non-empty string');
      }
      localStorage.setItem(this.STORAGE_KEYS.USERPASSWORD, userpassword);
    } catch (error) {
      console.error('Error setting password:', error);
      throw error;
    }
  }

  /**
   * Gets user password from localStorage
   * @returns User password or null if not found
   */
  public getPassword(): string | null {
    try {
      return localStorage.getItem(this.STORAGE_KEYS.USERPASSWORD);
    } catch (error) {
      console.error('Error getting password:', error);
      return null;
    }
  }

  /**
   * Sets login status in localStorage
   * @param islogin - Login status ('true' or 'false')
   */
  public setIslogin(islogin: string): void {
    try {
      if (!['true', 'false'].includes(islogin)) {
        throw new Error('Login status must be "true" or "false"');
      }
      localStorage.setItem(this.STORAGE_KEYS.ISLOGIN, islogin);
      this.updateAuthState();
    } catch (error) {
      console.error('Error setting login status:', error);
      throw error;
    }
  }

  /**
   * Gets login status from localStorage
   * @returns Login status or null if not found
   */
  public getIslogin(): string | null {
    try {
      return localStorage.getItem(this.STORAGE_KEYS.ISLOGIN);
    } catch (error) {
      console.error('Error getting login status:', error);
      return null;
    }
  }

  /**
   * Sets user email in localStorage
   * @param useremail - User email to store
   */
  public setUseremail(useremail: string): void {
    try {
      if (!useremail || typeof useremail !== 'string') {
        throw new Error('User email must be a non-empty string');
      }
      localStorage.setItem(this.STORAGE_KEYS.USEREMAIL, useremail);
      this.updateAuthState();
    } catch (error) {
      console.error('Error setting user email:', error);
      throw error;
    }
  }

  /**
   * Gets user email from localStorage
   * @returns User email or null if not found
   */
  public getUseremail(): string | null {
    try {
      return localStorage.getItem(this.STORAGE_KEYS.USEREMAIL);
    } catch (error) {
      console.error('Error getting user email:', error);
      return null;
    }
  }

  /**
   * Sets username in localStorage
   * @param username - Username to store
   */
  public setUsername(username: string): void {
    try {
      if (!username || typeof username !== 'string') {
        throw new Error('Username must be a non-empty string');
      }
      localStorage.setItem(this.STORAGE_KEYS.USERNAME, username);
      this.updateAuthState();
    } catch (error) {
      console.error('Error setting username:', error);
      throw error;
    }
  }

  /**
   * Gets username from localStorage
   * @returns Username or null if not found
   */
  public getUsername(): string | null {
    try {
      return localStorage.getItem(this.STORAGE_KEYS.USERNAME);
    } catch (error) {
      console.error('Error getting username:', error);
      return null;
    }
  }

  /**
   * Sets login mode in localStorage
   * @param loginmode - Login mode to store
   */
  public setLoginmode(loginmode: string): void {
    try {
      if (!loginmode || typeof loginmode !== 'string') {
        throw new Error('Login mode must be a non-empty string');
      }
      localStorage.setItem(this.STORAGE_KEYS.LOGINMODE, loginmode);
      this.updateAuthState();
    } catch (error) {
      console.error('Error setting login mode:', error);
      throw error;
    }
  }

  /**
   * Gets login mode from localStorage
   * @returns Login mode or null if not found
   */
  public getLoginmode(): string | null {
    try {
      return localStorage.getItem(this.STORAGE_KEYS.LOGINMODE);
    } catch (error) {
      console.error('Error getting login mode:', error);
      return null;
    }
  }

  /**
   * Checks if user is currently logged in
   * @returns True if user is logged in, false otherwise
   */
  public isLoggedIn(): boolean {
    try {
      return this.getIslogin() === 'true';
    } catch (error) {
      console.error('Error checking login status:', error);
      return false;
    }
  }

  /**
   * Sets first time login flag in localStorage
   * @param firstimelogin - First time login status ('true' or 'false')
   */
  public setFirsttimelogin(firstimelogin: string): void {
    try {
      if (!['true', 'false'].includes(firstimelogin)) {
        throw new Error('First time login status must be "true" or "false"');
      }
      localStorage.setItem(this.STORAGE_KEYS.FIRSTTIMELOGIN, firstimelogin);
      this.updateAuthState();
    } catch (error) {
      console.error('Error setting first time login status:', error);
      throw error;
    }
  }

  /**
   * Gets first time login flag from localStorage
   * @returns First time login status or null if not found
   */
  public getFirsttimelogin(): string | null {
    try {
      return localStorage.getItem(this.STORAGE_KEYS.FIRSTTIMELOGIN);
    } catch (error) {
      console.error('Error getting first time login status:', error);
      return null;
    }
  }

  /**
   * Performs user logout
   * Clears all authentication data and redirects to home page
   */
  public logout(): void {
    try {
      this.clearAuthState();
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Error during logout:', error);
      // Force navigation even if error occurs
      this.router.navigate(['/']);
    }
  }

  /**
   * Performs user login
   * @param username - User's username
   * @param password - User's password
   * @param useremail - User's email
   * @param loginmode - Login mode
   * @returns Observable with login response
   */
  public login(
    username: string, 
    password: string, 
    useremail: string, 
    loginmode: string
  ): Observable<LoginResponse> {
    try {
      // Validate input parameters
      if (!username || !password || !useremail || !loginmode) {
        return throwError(() => new Error('All login parameters are required'));
      }

      // Store authentication data
      this.setPassword(password);
      this.setUsername(username);
      this.setUseremail(useremail);
      this.setLoginmode(loginmode);
      this.setIslogin('true');
      this.setFirsttimelogin('true');

      // Update reactive state
      this.updateAuthState();

      // Return success response
      return of({
        name: username,
        email: useremail,
        success: true,
        message: 'Login successful'
      });
    } catch (error) {
      console.error('Error during login:', error);
      return throwError(() => new Error('Failed to login'));
    }
  }

  /**
   * Gets current authentication state
   * @returns Current authentication state
   */
  public getAuthState(): AuthState {
    return this.authState();
  }

  /**
   * Gets current user data
   * @returns Current user data or null if not authenticated
   */
  public getCurrentUser(): UserAuthData | null {
    return this.authState().user;
  }

  /**
   * Checks if this is the user's first time login
   * @returns True if first time login, false otherwise
   */
  public isFirstTimeLogin(): boolean {
    return this.getFirsttimelogin() === 'true';
  }

  /**
   * Updates authentication state and notifies subscribers
   */
  private updateAuthState(): void {
    try {
      const isLoggedIn = this.isLoggedIn();
      const user: UserAuthData | null = isLoggedIn ? {
        username: this.getUsername() || '',
        useremail: this.getUseremail() || '',
        loginmode: this.getLoginmode() || '',
        isLoggedIn: true,
        isFirstTimeLogin: this.isFirstTimeLogin()
      } : null;

      const authState: AuthState = {
        isAuthenticated: isLoggedIn,
        user,
        loginMode: this.getLoginmode()
      };

      this.authState.set(authState);
      this.authStateSubject.next(authState);
    } catch (error) {
      console.error('Error updating auth state:', error);
    }
  }

  /**
   * Clears all authentication data from localStorage and state
   */
  private clearAuthState(): void {
    try {
      Object.values(this.STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key);
      });

      const emptyState: AuthState = {
        isAuthenticated: false,
        user: null,
        loginMode: null
      };

      this.authState.set(emptyState);
      this.authStateSubject.next(emptyState);
    } catch (error) {
      console.error('Error clearing auth state:', error);
    }
  }

  /**
   * Validates if stored authentication data is valid
   * @returns True if authentication data is valid, false otherwise
   */
  public validateStoredAuth(): boolean {
    try {
      const username = this.getUsername();
      const useremail = this.getUseremail();
      const islogin = this.getIslogin();

      return !!(username && useremail && islogin === 'true');
    } catch (error) {
      console.error('Error validating stored auth:', error);
      return false;
    }
  }
}
