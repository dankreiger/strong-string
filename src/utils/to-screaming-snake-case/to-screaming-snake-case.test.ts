import { describe, expect, it } from 'vitest';
import { toScreamingSnakeCase } from './to-screaming-snake-case';

describe('toScreamingSnakeCase', () => {
  it('should convert camelCase to SCREAMING_SNAKE_CASE', () => {
    expect(toScreamingSnakeCase('camelCase')).toBe('CAMEL_CASE');
  });

  it('should convert PascalCase to SCREAMING_SNAKE_CASE', () => {
    expect(toScreamingSnakeCase('PascalCase')).toBe('PASCAL_CASE');
  });

  it('should convert kebab-case to SCREAMING_SNAKE_CASE', () => {
    expect(toScreamingSnakeCase('kebab-case')).toBe('KEBAB_CASE');
  });

  it('should convert snake_case to SCREAMING_SNAKE_CASE', () => {
    expect(toScreamingSnakeCase('snake_case')).toBe('SNAKE_CASE');
  });

  it('should convert space separated to SCREAMING_SNAKE_CASE', () => {
    expect(toScreamingSnakeCase('space separated')).toBe('SPACE_SEPARATED');
  });

  it('should handle single word', () => {
    expect(toScreamingSnakeCase('word')).toBe('WORD');
  });

  it('should handle empty string', () => {
    expect(toScreamingSnakeCase('')).toBe('');
  });

  it('should handle string with numbers', () => {
    expect(toScreamingSnakeCase('string123')).toBe('STRING_123');
  });

  it('should handle string with mixed separators', () => {
    expect(toScreamingSnakeCase('mixed_separators-case')).toBe(
      'MIXED_SEPARATORS_CASE'
    );
  });

  it('should handle string with leading and trailing spaces', () => {
    expect(toScreamingSnakeCase('  leading and trailing  ')).toBe(
      'LEADING_AND_TRAILING'
    );
  });

  it('should handle string with multiple spaces', () => {
    expect(toScreamingSnakeCase('multiple   spaces')).toBe('MULTIPLE_SPACES');
  });

  it('should handle string with underscores', () => {
    expect(toScreamingSnakeCase('with_underscores')).toBe('WITH_UNDERSCORES');
  });

  it('should handle string with hyphens', () => {
    expect(toScreamingSnakeCase('with-hyphens')).toBe('WITH_HYPHENS');
  });

  it('should handle string with mixed case', () => {
    expect(toScreamingSnakeCase('MixedCASEString')).toBe('MIXED_CASE_STRING');
  });

  it('should handle string with numbers and letters', () => {
    expect(toScreamingSnakeCase('abc123def')).toBe('ABC_123_DEF');
  });

  it('should handle string with leading numbers', () => {
    expect(toScreamingSnakeCase('123leading')).toBe('123_LEADING');
  });

  it('should handle string with trailing numbers', () => {
    expect(toScreamingSnakeCase('trailing123')).toBe('TRAILING_123');
  });
});
