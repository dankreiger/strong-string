import { describe, expect, it } from "vitest";
import { toUpperCase } from "./to-upper-case";

describe("toUpperCase", () => {
  it("should work", () => {
    expect(true).toBe(true);
  });
});
describe("toUpperCase", () => {
  it("should convert lowercase letters to uppercase", () => {
    expect(toUpperCase("hello")).toBe("HELLO");
  });

  it("should convert mixed case letters to uppercase", () => {
    expect(toUpperCase("HeLLo")).toBe("HELLO");
  });

  it("should convert uppercase letters to uppercase", () => {
    expect(toUpperCase("HELLO")).toBe("HELLO");
  });

  it("should handle empty strings", () => {
    expect(toUpperCase("")).toBe("");
  });

  it("should handle strings with numbers", () => {
    expect(toUpperCase("hello123")).toBe("HELLO123");
  });

  it("should handle strings with special characters", () => {
    expect(toUpperCase("hello!@#")).toBe("HELLO!@#");
  });

  it("should handle strings with spaces", () => {
    expect(toUpperCase("hello world")).toBe("HELLO WORLD");
  });

  it("should handle strings with tabs", () => {
    expect(toUpperCase("hello\tworld")).toBe("HELLO\tWORLD");
  });

  it("should handle strings with newlines", () => {
    expect(toUpperCase("hello\nworld")).toBe("HELLO\nWORLD");
  });

  it("should handle strings with mixed whitespace", () => {
    expect(toUpperCase("hello \t\nworld")).toBe("HELLO \t\nWORLD");
  });

  it("should handle single character strings", () => {
    expect(toUpperCase("a")).toBe("A");
  });

  it("should handle single uppercase character strings", () => {
    expect(toUpperCase("A")).toBe("A");
  });

  it("should handle strings with leading spaces", () => {
    expect(toUpperCase("  hello")).toBe("  HELLO");
  });

  it("should handle strings with trailing spaces", () => {
    expect(toUpperCase("hello  ")).toBe("HELLO  ");
  });

  it("should handle strings with leading and trailing spaces", () => {
    expect(toUpperCase("  hello  ")).toBe("  HELLO  ");
  });

  it("should handle strings with only spaces", () => {
    expect(toUpperCase("     ")).toBe("     ");
  });

  it("should handle strings with only special characters", () => {
    expect(toUpperCase("!@#$%^&*()")).toBe("!@#$%^&*()");
  });

  it("should handle strings with only numbers", () => {
    expect(toUpperCase("1234567890")).toBe("1234567890");
  });

  it("should handle strings with mixed numbers and special characters", () => {
    expect(toUpperCase("123!@#")).toBe("123!@#");
  });

  it("should handle strings with mixed letters, numbers, and special characters", () => {
    expect(toUpperCase("a1!B2@c3#")).toBe("A1!B2@C3#");
  });
});
