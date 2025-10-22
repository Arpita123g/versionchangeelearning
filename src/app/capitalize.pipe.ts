import { Pipe, PipeTransform } from '@angular/core';

/**
 * CapitalizePipe - Transforms text by capitalizing the first letter of each word
 * 
 * @example
 * ```html
 * <p>{{ 'hello world' | capitalize }}</p>
 * <!-- Output: Hello World -->
 * ```
 */
@Pipe({
  name: 'capitalize',
  standalone: true,
  pure: true
})
export class CapitalizePipe implements PipeTransform {

  /**
   * Transforms a string by capitalizing the first letter of each word
   * 
   * @param value - The input string to capitalize
   * @param args - Additional arguments (ignored in this implementation)
   * @returns The capitalized string, or empty string if input is invalid
   * 
   * @throws {Error} When input is null, undefined, or not a string
   */
  transform(value: string | null | undefined, ...args: unknown[]): string {
    // Input validation
    if (value === null || value === undefined) {
      throw new Error('CapitalizePipe: Input value cannot be null or undefined');
    }

    if (typeof value !== 'string') {
      throw new Error(`CapitalizePipe: Expected string input, got ${typeof value}`);
    }

    // Handle empty string
    if (value.trim() === '') {
      return value;
    }

    // Split by spaces and capitalize each word
    const words = value.split(' ');
    
    const capitalizedWords = words.map(word => {
      // Handle empty words (multiple spaces)
      if (word.length === 0) {
        return word;
      }

      // Handle single character words
      if (word.length === 1) {
        return word.toUpperCase();
      }

      // Capitalize first letter and keep the rest unchanged
      const firstChar = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      
      return firstChar + restOfWord;
    });

    // Join words back together with original spacing
    return capitalizedWords.join(' ');
  }
}
