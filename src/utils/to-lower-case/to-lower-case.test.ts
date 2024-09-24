import { describe, expect, it } from "vitest";
import { toLowerCase } from "./to-lower-case";

describe("toLowerCase", () => {
  it("should convert uppercase letters to lowercase", () => {
    expect(toLowerCase("HELLO")).toBe("hello");
  });

  it("should convert mixed case letters to lowercase", () => {
    expect(toLowerCase("HeLLo")).toBe("hello");
  });

  it("should keep lowercase letters as lowercase", () => {
    expect(toLowerCase("hello")).toBe("hello");
  });

  it("should handle empty strings", () => {
    expect(toLowerCase("")).toBe("");
  });

  it("should handle strings with numbers", () => {
    expect(toLowerCase("Hello123")).toBe("hello123");
  });

  it("should handle strings with special characters", () => {
    expect(toLowerCase("Hello!@#")).toBe("hello!@#");
  });

  it("should handle strings with spaces", () => {
    expect(toLowerCase("Hello World")).toBe("hello world");
  });

  it("should handle strings with tabs", () => {
    expect(toLowerCase("Hello\tWorld")).toBe("hello\tworld");
  });

  it("should handle strings with newlines", () => {
    expect(toLowerCase("Hello\nWorld")).toBe("hello\nworld");
  });

  it("should handle strings with mixed whitespace", () => {
    expect(toLowerCase("Hello \t\nWorld")).toBe("hello \t\nworld");
  });

  it("should handle strings with leading whitespace", () => {
    expect(toLowerCase("  Hello")).toBe("  hello");
  });

  it("should handle strings with trailing whitespace", () => {
    expect(toLowerCase("Hello  ")).toBe("hello  ");
  });

  it("should handle strings with leading and trailing whitespace", () => {
    expect(toLowerCase("  Hello  ")).toBe("  hello  ");
  });

  it("should handle strings with only whitespace", () => {
    expect(toLowerCase("   ")).toBe("   ");
  });

  it("should handle strings with only numbers", () => {
    expect(toLowerCase("123")).toBe("123");
  });

  it("should handle strings with only special characters", () => {
    expect(toLowerCase("!@#")).toBe("!@#");
  });

  it("should handle strings with mixed numbers and special characters", () => {
    expect(toLowerCase("123!@#")).toBe("123!@#");
  });

  it("should handle strings with mixed letters, numbers, and special characters", () => {
    expect(toLowerCase("Hello123!@#")).toBe("hello123!@#");
  });

  it("should handle strings with non-Latin characters", () => {
    expect(toLowerCase("Привет")).toBe("привет");
  });

  it("should handle strings with emoji", () => {
    expect(toLowerCase("Hello😊")).toBe("hello😊");
  });
});
