import { describe, expect, it } from 'vitest';
import { toCapitalize } from '../..';

describe('toCapitalize', () => {
  it('should capitalize a single lowercase word', () => {
    expect(toCapitalize('hello')).toBe('Hello');
  });

  it('should capitalize a single uppercase word', () => {
    expect(toCapitalize('HELLO')).toBe('Hello');
  });

  it('should capitalize a single mixed-case word', () => {
    expect(toCapitalize('hElLo')).toBe('Hello');
  });

  it('should capitalize a single letter', () => {
    expect(toCapitalize('a')).toBe('A');
  });

  it('should handle an already capitalized word', () => {
    expect(toCapitalize('Hello')).toBe('Hello');
  });

  it('should handle an empty string', () => {
    expect(toCapitalize('')).toBe('');
  });

  it('should handle a string with leading spaces', () => {
    expect(toCapitalize('  hello')).toBe('  hello');
  });

  it('should handle a string with trailing spaces', () => {
    expect(toCapitalize('hello  ')).toBe('Hello  ');
  });

  it('should handle a string with leading and trailing spaces', () => {
    expect(toCapitalize('  hello  ')).toBe('  hello  ');
  });

  it('should handle a string with multiple words', () => {
    expect(toCapitalize('hello world')).toBe('Hello world');
  });

  it('should handle a string with punctuation', () => {
    expect(toCapitalize('hello, world!')).toBe('Hello, world!');
  });

  it('should handle a string with numbers', () => {
    expect(toCapitalize('hello123')).toBe('Hello123');
  });

  it('should handle a string with special characters', () => {
    expect(toCapitalize('hello@world')).toBe('Hello@world');
  });

  it('should handle a string with mixed numbers and letters', () => {
    expect(toCapitalize('123hello')).toBe('123hello');
  });

  it('should handle a string with mixed special characters and letters', () => {
    expect(toCapitalize('@hello')).toBe('@hello');
  });

  it('should handle a string with mixed punctuation and letters', () => {
    expect(toCapitalize('!hello')).toBe('!hello');
  });

  it('should handle a string with mixed spaces and letters', () => {
    expect(toCapitalize('  hello')).toBe('  hello');
  });

  it('should handle a string with mixed tabs and letters', () => {
    expect(toCapitalize('\thello')).toBe('\thello');
  });

  it('should handle a string with mixed newlines and letters', () => {
    expect(toCapitalize('\nhello')).toBe('\nhello');
  });

  it('should handle a string with mixed carriage returns and letters', () => {
    expect(toCapitalize('\rhello')).toBe('\rhello');
  });
});
