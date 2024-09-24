import { describe, expect, it } from 'vitest';
import { toDelimiterCase } from '../..';

describe('toDelimiterCase', () => {
  it('should convert space to hyphen', () => {
    expect(toDelimiterCase('hello world', '-')).toBe('hello-world');
  });

  it('should convert space to underscore', () => {
    expect(toDelimiterCase('hello world', '_')).toBe('hello_world');
  });

  it('should convert space to dot', () => {
    expect(toDelimiterCase('hello world', '.')).toBe('hello.world');
  });

  it('should handle empty string', () => {
    expect(toDelimiterCase('', '-')).toBe('');
  });

  it('should handle single word', () => {
    expect(toDelimiterCase('hello', '-')).toBe('hello');
  });

  it('should handle multiple spaces', () => {
    expect(toDelimiterCase('hello   world', '-')).toBe('hello---world');
  });

  it('should handle leading spaces', () => {
    expect(toDelimiterCase('  hello world', '-')).toBe('--hello-world');
  });

  it('should handle trailing spaces', () => {
    expect(toDelimiterCase('hello world  ', '-')).toBe('hello-world--');
  });

  it('should handle multiple words', () => {
    expect(toDelimiterCase('hello world from typescript', '-')).toBe(
      'hello-world-from-typescript'
    );
  });

  it('should handle special characters', () => {
    expect(toDelimiterCase('hello @ world!', '-')).toBe('hello-@-world!');
  });

  it('should handle numbers', () => {
    expect(toDelimiterCase('hello 123 world', '-')).toBe('hello-123-world');
  });

  it('should handle mixed case', () => {
    expect(toDelimiterCase('Hello World', '-')).toBe('Hello-World');
  });

  it('should handle non-latin characters', () => {
    expect(toDelimiterCase('こんにちは 世界', '-')).toBe('こんにちは-世界');
  });

  it('should handle different delimiters', () => {
    expect(toDelimiterCase('hello world', '|')).toBe('hello|world');
  });

  it('should handle delimiter as space', () => {
    expect(toDelimiterCase('hello world', ' ')).toBe('hello world');
  });

  it('should handle delimiter as empty string', () => {
    expect(toDelimiterCase('hello world', '')).toBe('helloworld');
  });

  it('should handle delimiter as multiple characters', () => {
    expect(toDelimiterCase('hello world', '---')).toBe('hello---world');
  });

  it('should handle delimiter as special characters', () => {
    expect(toDelimiterCase('hello world', '@')).toBe('hello@world');
  });

  it('should handle delimiter as numbers', () => {
    expect(toDelimiterCase('hello world', '123')).toBe('hello123world');
  });

  it('should handle delimiter as mixed characters', () => {
    expect(toDelimiterCase('hello world', 'a1@')).toBe('helloa1@world');
  });
});
