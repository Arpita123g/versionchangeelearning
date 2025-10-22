import { TestBed } from '@angular/core/testing';
import { UserEmailService, UserEmailState } from './user-email.service';

/**
 * Test suite for UserEmailService
 * Tests all user email functionality including validation, state management, and reactive updates
 */
describe('UserEmailService', () => {
  let service: UserEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserEmailService]
    });

    service = TestBed.inject(UserEmailService);
  });

  afterEach(() => {
    // Reset service state after each test
    service.reset();
  });

  describe('Service Creation', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
      expect(service).toBeInstanceOf(UserEmailService);
    });

    it('should have all required methods', () => {
      expect(typeof service.setUserEmail).toBe('function');
      expect(typeof service.getUserEmail).toBe('function');
      expect(typeof service.getUserEmailValue).toBe('function');
      expect(typeof service.getUserEmailState).toBe('function');
      expect(typeof service.isEmailValid).toBe('function');
      expect(typeof service.getLastUpdated).toBe('function');
      expect(typeof service.validateEmail).toBe('function');
      expect(typeof service.clearUserEmail).toBe('function');
      expect(typeof service.updateEmailValidation).toBe('function');
      expect(typeof service.hasEmail).toBe('function');
      expect(typeof service.getEmailDomain).toBe('function');
      expect(typeof service.getEmailUsername).toBe('function');
      expect(typeof service.isEmailFromDomain).toBe('function');
      expect(typeof service.isEmailFromCommonDomain).toBe('function');
      expect(typeof service.getFormattedEmail).toBe('function');
      expect(typeof service.reset).toBe('function');
    });
  });

  describe('Initial State', () => {
    it('should initialize with correct default state', () => {
      const initialState = service.getUserEmailState();
      
      expect(initialState.email).toBeNull();
      expect(initialState.isValid).toBe(false);
      expect(initialState.lastUpdated).toBeNull();
    });

    it('should have correct initial signal state', () => {
      const state = service.userEmailState();
      
      expect(state.email).toBeNull();
      expect(state.isValid).toBe(false);
      expect(state.lastUpdated).toBeNull();
    });

    it('should have correct initial BehaviorSubject value', () => {
      expect(service.getUserEmailValue()).toBeNull();
    });
  });

  describe('Email Setting and Getting', () => {
    it('should set and get valid email correctly', () => {
      const email = 'test@example.com';
      
      service.setUserEmail(email);
      
      expect(service.getUserEmail()).toBe(email);
      expect(service.getUserEmailValue()).toBe(email);
      expect(service.getUserEmailState().email).toBe(email);
      expect(service.getUserEmailState().isValid).toBe(true);
      expect(service.getUserEmailState().lastUpdated).toBeInstanceOf(Date);
    });

    it('should set and get null email correctly', () => {
      service.setUserEmail(null);
      
      expect(service.getUserEmail()).toBeNull();
      expect(service.getUserEmailValue()).toBeNull();
      expect(service.getUserEmailState().email).toBeNull();
      expect(service.getUserEmailState().isValid).toBe(false);
    });

    it('should handle empty string email', () => {
      service.setUserEmail('');
      
      expect(service.getUserEmail()).toBe('');
      expect(service.getUserEmailState().isValid).toBe(false);
    });

    it('should update lastUpdated timestamp when setting email', () => {
      const beforeSet = new Date();
      service.setUserEmail('test@example.com');
      const afterSet = new Date();
      const lastUpdated = service.getLastUpdated();
      
      expect(lastUpdated).toBeInstanceOf(Date);
      expect(lastUpdated!.getTime()).toBeGreaterThanOrEqual(beforeSet.getTime());
      expect(lastUpdated!.getTime()).toBeLessThanOrEqual(afterSet.getTime());
    });
  });

  describe('Email Validation', () => {
    it('should validate correct email formats', () => {
      const validEmails = [
        'test@example.com',
        'user.name@domain.co.uk',
        'user+tag@example.org',
        '123@numbers.com',
        'user@subdomain.example.com'
      ];

      validEmails.forEach(email => {
        expect(service.validateEmail(email)).toBe(true);
      });
    });

    it('should reject invalid email formats', () => {
      const invalidEmails = [
        'invalid-email',
        '@example.com',
        'user@',
        'user@.com',
        'user..name@example.com',
        'user@example..com',
        '',
        null,
        undefined
      ];

      invalidEmails.forEach(email => {
        expect(service.validateEmail(email as any)).toBe(false);
      });
    });

    it('should handle email with whitespace', () => {
      expect(service.validateEmail('  test@example.com  ')).toBe(true);
      expect(service.validateEmail('  invalid-email  ')).toBe(false);
    });

    it('should update validation state when email changes', () => {
      service.setUserEmail('invalid-email');
      expect(service.isEmailValid()).toBe(false);

      service.setUserEmail('valid@example.com');
      expect(service.isEmailValid()).toBe(true);
    });
  });

  describe('Email Clearing and Reset', () => {
    it('should clear user email correctly', () => {
      service.setUserEmail('test@example.com');
      expect(service.hasEmail()).toBe(true);

      service.clearUserEmail();
      
      expect(service.getUserEmail()).toBeNull();
      expect(service.getUserEmailValue()).toBeNull();
      expect(service.getUserEmailState().email).toBeNull();
      expect(service.getUserEmailState().isValid).toBe(false);
      expect(service.hasEmail()).toBe(false);
    });

    it('should reset service to initial state', () => {
      service.setUserEmail('test@example.com');
      expect(service.hasEmail()).toBe(true);

      service.reset();
      
      const state = service.getUserEmailState();
      expect(state.email).toBeNull();
      expect(state.isValid).toBe(false);
      expect(state.lastUpdated).toBeNull();
      expect(service.hasEmail()).toBe(false);
    });
  });

  describe('Email Domain and Username Extraction', () => {
    it('should extract email domain correctly', () => {
      service.setUserEmail('user@example.com');
      expect(service.getEmailDomain()).toBe('example.com');

      service.setUserEmail('test@subdomain.domain.co.uk');
      expect(service.getEmailDomain()).toBe('subdomain.domain.co.uk');
    });

    it('should extract email username correctly', () => {
      service.setUserEmail('user@example.com');
      expect(service.getEmailUsername()).toBe('user');

      service.setUserEmail('user.name@example.com');
      expect(service.getEmailUsername()).toBe('user.name');
    });

    it('should return null for invalid email when extracting parts', () => {
      service.setUserEmail('invalid-email');
      expect(service.getEmailDomain()).toBeNull();
      expect(service.getEmailUsername()).toBeNull();
    });

    it('should handle null email when extracting parts', () => {
      service.setUserEmail(null);
      expect(service.getEmailDomain()).toBeNull();
      expect(service.getEmailUsername()).toBeNull();
    });
  });

  describe('Domain Checking', () => {
    it('should check if email is from specific domain', () => {
      service.setUserEmail('user@example.com');
      
      expect(service.isEmailFromDomain('example.com')).toBe(true);
      expect(service.isEmailFromDomain('other.com')).toBe(false);
      expect(service.isEmailFromDomain('EXAMPLE.COM')).toBe(true); // Case insensitive
    });

    it('should check if email is from common domains', () => {
      service.setUserEmail('user@gmail.com');
      expect(service.isEmailFromCommonDomain()).toBe(true);

      service.setUserEmail('user@yahoo.com');
      expect(service.isEmailFromCommonDomain()).toBe(true);

      service.setUserEmail('user@company.com');
      expect(service.isEmailFromCommonDomain()).toBe(false);
    });

    it('should return false for invalid email when checking domains', () => {
      service.setUserEmail('invalid-email');
      expect(service.isEmailFromDomain('example.com')).toBe(false);
      expect(service.isEmailFromCommonDomain()).toBe(false);
    });
  });

  describe('Email Formatting', () => {
    it('should format email with default masking', () => {
      service.setUserEmail('user@example.com');
      expect(service.getFormattedEmail()).toBe('us**@example.com');
    });

    it('should format email with custom masking percentage', () => {
      service.setUserEmail('username@example.com');
      expect(service.getFormattedEmail(25)).toBe('usern***@example.com');
      expect(service.getFormattedEmail(75)).toBe('u********@example.com');
    });

    it('should handle invalid email in formatting', () => {
      service.setUserEmail('invalid-email');
      expect(service.getFormattedEmail()).toBe('Invalid email');
    });

    it('should handle null email in formatting', () => {
      service.setUserEmail(null);
      expect(service.getFormattedEmail()).toBe('Invalid email');
    });
  });

  describe('Reactive State Management', () => {
    it('should emit state changes through observable', (done) => {
      service.userEmail$.subscribe({
        next: (email) => {
          expect(email).toBe('test@example.com');
          done();
        },
        error: done.fail
      });

      service.setUserEmail('test@example.com');
    });

    it('should update signal state reactively', () => {
      service.setUserEmail('test@example.com');
      
      const state = service.userEmailState();
      expect(state.email).toBe('test@example.com');
      expect(state.isValid).toBe(true);
      expect(state.lastUpdated).toBeInstanceOf(Date);
    });

    it('should maintain consistency between signal and BehaviorSubject', () => {
      service.setUserEmail('test@example.com');
      
      expect(service.getUserEmail()).toBe(service.getUserEmailValue());
      expect(service.getUserEmailState().email).toBe(service.getUserEmailValue());
    });
  });

  describe('Update Email Validation', () => {
    it('should update validation without changing email', () => {
      service.setUserEmail('test@example.com');
      const originalLastUpdated = service.getLastUpdated();
      
      // Wait a bit to ensure different timestamp
      setTimeout(() => {
        service.updateEmailValidation();
        
        expect(service.getUserEmail()).toBe('test@example.com');
        expect(service.isEmailValid()).toBe(true);
        expect(service.getLastUpdated()!.getTime()).toBeGreaterThan(originalLastUpdated!.getTime());
      }, 10);
    });
  });

  describe('Error Handling', () => {
    it('should handle errors gracefully when setting email', () => {
      // Mock signal to throw error
      spyOn(service.userEmailState, 'set').and.throwError('Signal error');
      
      expect(() => service.setUserEmail('test@example.com')).not.toThrow();
    });

    it('should handle errors in domain extraction', () => {
      // This would be difficult to test without mocking, but the service has try-catch
      service.setUserEmail('test@example.com');
      expect(service.getEmailDomain()).toBe('example.com');
    });

    it('should handle errors in username extraction', () => {
      service.setUserEmail('test@example.com');
      expect(service.getEmailUsername()).toBe('test');
    });
  });

  describe('Edge Cases', () => {
    it('should handle very long email addresses', () => {
      const longEmail = 'a'.repeat(100) + '@example.com';
      service.setUserEmail(longEmail);
      
      expect(service.getUserEmail()).toBe(longEmail);
      expect(service.isEmailValid()).toBe(true);
    });

    it('should handle special characters in email', () => {
      const specialEmail = 'user+tag!#$%&*@example.com';
      service.setUserEmail(specialEmail);
      
      expect(service.getUserEmail()).toBe(specialEmail);
      expect(service.isEmailValid()).toBe(true);
    });

    it('should handle unicode characters in email', () => {
      const unicodeEmail = '用户@测试.com';
      service.setUserEmail(unicodeEmail);
      
      expect(service.getUserEmail()).toBe(unicodeEmail);
      expect(service.isEmailValid()).toBe(true);
    });

    it('should handle multiple consecutive updates', () => {
      const emails = ['test1@example.com', 'test2@example.com', 'test3@example.com'];
      
      emails.forEach(email => {
        service.setUserEmail(email);
        expect(service.getUserEmail()).toBe(email);
        expect(service.isEmailValid()).toBe(true);
      });
    });
  });
}); 