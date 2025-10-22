import { TestBed } from '@angular/core/testing';
import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapitalizePipe]
    });
    pipe = TestBed.inject(CapitalizePipe);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should capitalize the first letter of each word in a string', () => {
      const input = 'hello world';
      const expected = 'Hello World';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle single word strings', () => {
      const input = 'angular';
      const expected = 'Angular';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with multiple spaces', () => {
      const input = 'hello   world   test';
      const expected = 'Hello   World   Test';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings that are already capitalized', () => {
      const input = 'Hello World Test';
      const expected = 'Hello World Test';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle mixed case strings', () => {
      const input = 'hElLo WoRlD';
      const expected = 'HElLo WoRlD';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle empty string', () => {
      const input = '';
      const expected = '';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with only spaces', () => {
      const input = '   ';
      const expected = '   ';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with special characters', () => {
      const input = 'hello-world test_case';
      const expected = 'Hello-world Test_case';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with numbers', () => {
      const input = 'hello 123 world';
      const expected = 'Hello 123 World';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with punctuation', () => {
      const input = 'hello, world! test.';
      const expected = 'Hello, World! Test.';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with leading and trailing spaces', () => {
      const input = '  hello world  ';
      const expected = '  Hello World  ';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle single character strings', () => {
      const input = 'a';
      const expected = 'A';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with single characters as words', () => {
      const input = 'a b c d';
      const expected = 'A B C D';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with all uppercase letters', () => {
      const input = 'HELLO WORLD';
      const expected = 'HELLO WORLD';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with all lowercase letters', () => {
      const input = 'hello world test';
      const expected = 'Hello World Test';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with accented characters', () => {
      const input = 'café résumé naïve';
      const expected = 'Café Résumé Naïve';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with emojis', () => {
      const input = 'hello 😀 world 🌍';
      const expected = 'Hello 😀 World 🌍';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with tabs and newlines', () => {
      const input = 'hello\tworld\ntest';
      const expected = 'Hello\tWorld\nTest';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle very long strings', () => {
      const input = 'this is a very long string with many words that should all be capitalized properly';
      const expected = 'This Is A Very Long String With Many Words That Should All Be Capitalized Properly';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with consecutive uppercase letters', () => {
      const input = 'hello WORLD test';
      const expected = 'Hello WORLD Test';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with numbers at the beginning of words', () => {
      const input = 'hello 123world test';
      const expected = 'Hello 123world Test';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with symbols at the beginning of words', () => {
      const input = 'hello @world #test';
      const expected = 'Hello @world #test';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle null input gracefully', () => {
      const input = null as any;
      expect(() => pipe.transform(input)).toThrow();
    });

    it('should handle undefined input gracefully', () => {
      const input = undefined as any;
      expect(() => pipe.transform(input)).toThrow();
    });

    it('should handle non-string input gracefully', () => {
      const input = 123 as any;
      expect(() => pipe.transform(input)).toThrow();
    });

    it('should handle boolean input gracefully', () => {
      const input = true as any;
      expect(() => pipe.transform(input)).toThrow();
    });

    it('should handle object input gracefully', () => {
      const input = {} as any;
      expect(() => pipe.transform(input)).toThrow();
    });

    it('should handle array input gracefully', () => {
      const input = [] as any;
      expect(() => pipe.transform(input)).toThrow();
    });

    it('should ignore additional arguments', () => {
      const input = 'hello world';
      const expected = 'Hello World';
      expect(pipe.transform(input, 'extra', 'args')).toBe(expected);
    });

    it('should handle strings with only special characters', () => {
      const input = '!@#$%^&*()';
      const expected = '!@#$%^&*()';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with only numbers', () => {
      const input = '123 456 789';
      const expected = '123 456 789';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with only spaces and special characters', () => {
      const input = ' ! @ # ';
      const expected = ' ! @ # ';
      expect(pipe.transform(input)).toBe(expected);
    });
  });

  describe('performance', () => {
    it('should handle large strings efficiently', () => {
      const input = 'word '.repeat(1000);
      const startTime = performance.now();
      pipe.transform(input);
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      
      // Should complete within 100ms for 1000 words
      expect(executionTime).toBeLessThan(100);
    });

    it('should handle repeated transformations consistently', () => {
      const input = 'hello world test';
      const expected = 'Hello World Test';
      
      // Transform the same string multiple times
      for (let i = 0; i < 100; i++) {
        expect(pipe.transform(input)).toBe(expected);
      }
    });
  });

  describe('edge cases', () => {
    it('should handle strings with only one character', () => {
      const input = 'a';
      const expected = 'A';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with only one word', () => {
      const input = 'hello';
      const expected = 'Hello';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with only spaces and one character', () => {
      const input = '   a   ';
      const expected = '   A   ';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with unicode characters', () => {
      const input = 'café résumé naïve';
      const expected = 'Café Résumé Naïve';
      expect(pipe.transform(input)).toBe(expected);
    });

    it('should handle strings with zero-width characters', () => {
      const input = 'hello\u200Bworld';
      const expected = 'Hello\u200Bworld';
      expect(pipe.transform(input)).toBe(expected);
    });
  });
});
