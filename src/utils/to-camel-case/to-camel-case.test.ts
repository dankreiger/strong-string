import { describe, expect, it } from 'vitest';
import { toCamelCase } from './to-camel-case';

describe('to-camel-case', () => {
  it('should convert snake_case to camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld');
  });

  it('should convert kebab-case to camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
  });

  it('should convert space separated words to camelCase', () => {
    expect(toCamelCase('hello world')).toBe('helloWorld');
  });

  it('should convert mixed separators to camelCase', () => {
    expect(toCamelCase('hello-world_foo bar')).toBe('helloWorldFooBar');
  });

  it('should handle single word', () => {
    expect(toCamelCase('hello')).toBe('hello');
  });

  it('should handle empty string', () => {
    expect(toCamelCase('')).toBe('');
  });

  it('should handle uppercase words', () => {
    expect(toCamelCase('HELLO_WORLD')).toBe('helloWorld');
  });

  it('should handle leading and trailing spaces', () => {
    expect(toCamelCase('  hello world  ')).toBe('helloWorld');
  });

  it('should handle leading and trailing underscores', () => {
    expect(toCamelCase('__hello_world__')).toBe('helloWorld');
  });

  it('should handle leading and trailing hyphens', () => {
    expect(toCamelCase('--hello-world--')).toBe('helloWorld');
  });

  it('should handle numbers in the string', () => {
    expect(toCamelCase('hello_world_123')).toBe('helloWorld123');
  });

  it('should handle special characters', () => {
    expect(toCamelCase('hello@world!')).toBe('helloWorld');
  });

  it('should handle multiple consecutive separators', () => {
    expect(toCamelCase('hello__world--foo  bar')).toBe('helloWorldFooBar');
  });

  it('should handle non-latin characters', () => {
    expect(toCamelCase('привет_мир')).toBe('приветМир');
  });

  it('should handle mixed non-latin and latin characters', () => {
    expect(toCamelCase('hello_мир')).toBe('helloМир');
  });

  it('should handle acronyms', () => {
    expect(toCamelCase('API_response')).toBe('apiResponse');
  });

  it('should handle camelCase input', () => {
    expect(toCamelCase('helloWorld')).toBe('helloWorld');
  });

  it('should handle PascalCase input', () => {
    expect(toCamelCase('HelloWorld')).toBe('helloWorld');
  });

  it('should handle mixed case input', () => {
    expect(toCamelCase('Hello_World')).toBe('helloWorld');
  });

  it('should handle input with numbers and special characters', () => {
    expect(toCamelCase('hello123_world!')).toBe('hello123World');
  });
});
