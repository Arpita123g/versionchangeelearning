import { Injectable, inject, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Interface for user email state
 */
export interface UserEmailState {
  email: string | null;
  isValid: boolean;
  lastUpdated: Date | null;
}

/**
 * Service for managing user email state
 * Provides reactive state management for user email with validation
 * and Angular 17 signal-based reactivity
 */
@Injectable({
  providedIn: 'root'
})
export class UserEmailService {
  // Angular 17 signal for user email state
  public readonly userEmailState = signal<UserEmailState>({
    email: null,
    isValid: false,
    lastUpdated: null
  });

  // BehaviorSubject for backward compatibility
  private readonly userEmailSubject = new BehaviorSubject<string | null>(null);
  public readonly userEmail$ = this.userEmailSubject.asObservable();

  /**
   * Sets user email and updates reactive state
   * @param email - User email to set
   */
  public setUserEmail(email: string | null): void {
    try {
      const isValid = this.validateEmail(email);
      const lastUpdated = new Date();

      const state: UserEmailState = {
        email,
        isValid,
        lastUpdated
      };

      // Update signal state
      this.userEmailState.set(state);
      
      // Update BehaviorSubject for backward compatibility
      this.userEmailSubject.next(email);

    } catch (error) {
      console.error('Error setting user email:', error);
      // Set invalid state
      this.userEmailState.set({
        email,
        isValid: false,
        lastUpdated: new Date()
      });
      this.userEmailSubject.next(email);
    }
  }

  /**
   * Gets current user email from signal state
   * @returns Current user email or null
   */
  public getUserEmail(): string | null {
    return this.userEmailState().email;
  }

  /**
   * Gets current user email from BehaviorSubject (backward compatibility)
   * @returns Current user email or null
   */
  public getUserEmailValue(): string | null {
    return this.userEmailSubject.value;
  }

  /**
   * Gets current user email state
   * @returns Current user email state
   */
  public getUserEmailState(): UserEmailState {
    return this.userEmailState();
  }

  /**
   * Checks if current email is valid
   * @returns True if email is valid, false otherwise
   */
  public isEmailValid(): boolean {
    return this.userEmailState().isValid;
  }

  /**
   * Gets the last time email was updated
   * @returns Last update timestamp or null
   */
  public getLastUpdated(): Date | null {
    return this.userEmailState().lastUpdated;
  }

  /**
   * Validates email format
   * @param email - Email to validate
   * @returns True if email is valid, false otherwise
   */
  public validateEmail(email: string | null): boolean {
    if (!email || typeof email !== 'string') {
      return false;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  /**
   * Clears user email and resets state
   */
  public clearUserEmail(): void {
    this.setUserEmail(null);
  }

  /**
   * Updates email validation without changing the email
   * Useful when validation rules change
   */
  public updateEmailValidation(): void {
    const currentState = this.userEmailState();
    const isValid = this.validateEmail(currentState.email);
    
    this.userEmailState.set({
      ...currentState,
      isValid,
      lastUpdated: new Date()
    });
  }

  /**
   * Checks if email has been set
   * @returns True if email is set, false otherwise
   */
  public hasEmail(): boolean {
    return this.userEmailState().email !== null;
  }

  /**
   * Gets email domain if email is set
   * @returns Email domain or null
   */
  public getEmailDomain(): string | null {
    const email = this.userEmailState().email;
    if (!email || !this.validateEmail(email)) {
      return null;
    }

    try {
      return email.split('@')[1] || null;
    } catch (error) {
      console.error('Error extracting email domain:', error);
      return null;
    }
  }

  /**
   * Gets email username part if email is set
   * @returns Email username or null
   */
  public getEmailUsername(): string | null {
    const email = this.userEmailState().email;
    if (!email || !this.validateEmail(email)) {
      return null;
    }

    try {
      return email.split('@')[0] || null;
    } catch (error) {
      console.error('Error extracting email username:', error);
      return null;
    }
  }

  /**
   * Checks if email is from a specific domain
   * @param domain - Domain to check
   * @returns True if email is from the specified domain
   */
  public isEmailFromDomain(domain: string): boolean {
    const emailDomain = this.getEmailDomain();
    return emailDomain?.toLowerCase() === domain.toLowerCase();
  }

  /**
   * Checks if email is from common domains
   * @returns True if email is from a common domain
   */
  public isEmailFromCommonDomain(): boolean {
    const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    const emailDomain = this.getEmailDomain();
    return emailDomain ? commonDomains.includes(emailDomain.toLowerCase()) : false;
  }

  /**
   * Formats email for display (masks sensitive parts)
   * @param maskPercentage - Percentage of email to mask (0-100)
   * @returns Formatted email string
   */
  public getFormattedEmail(maskPercentage: number = 50): string {
    const email = this.userEmailState().email;
    if (!email || !this.validateEmail(email)) {
      return 'Invalid email';
    }

    try {
      const [username, domain] = email.split('@');
      const maskLength = Math.floor(username.length * (maskPercentage / 100));
      const maskedUsername = username.substring(0, username.length - maskLength) + '*'.repeat(maskLength);
      return `${maskedUsername}@${domain}`;
    } catch (error) {
      console.error('Error formatting email:', error);
      return email;
    }
  }

  /**
   * Resets service state to initial values
   */
  public reset(): void {
    const initialState: UserEmailState = {
      email: null,
      isValid: false,
      lastUpdated: null
    };

    this.userEmailState.set(initialState);
    this.userEmailSubject.next(null);
  }
} 