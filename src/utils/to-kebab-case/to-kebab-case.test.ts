import { describe, expect, it } from "vitest";
import { toKebabCase } from "./to-kebab-case";

describe("toKebabCase", () => {
  it("should convert camelCase to kebab-case", () => {
    expect(toKebabCase("camelCase")).toBe("camel-case");
  });

  it("should convert PascalCase to kebab-case", () => {
    expect(toKebabCase("PascalCase")).toBe("pascal-case");
  });

  it("should convert snake_case to kebab-case", () => {
    expect(toKebabCase("snake_case")).toBe("snake-case");
  });

  it("should convert space separated words to kebab-case", () => {
    expect(toKebabCase("space separated words")).toBe("space-separated-words");
  });

  it("should convert mixed case to kebab-case", () => {
    expect(toKebabCase("mixedCASEString")).toBe("mixed-case-string");
  });

  it("should handle single word", () => {
    expect(toKebabCase("word")).toBe("word");
  });

  it("should handle empty string", () => {
    expect(toKebabCase("")).toBe("");
  });

  it("should handle string with numbers", () => {
    expect(toKebabCase("stringWith123Numbers")).toBe("string-with-123-numbers");
  });

  it("should handle string with special characters", () => {
    expect(toKebabCase("stringWith!@#Special$%^Characters")).toBe(
      "string-with-special-characters",
    );
  });

  it("should handle string with leading and trailing spaces", () => {
    expect(toKebabCase("  leading and trailing  ")).toBe(
      "leading-and-trailing",
    );
  });

  it("should handle string with multiple spaces", () => {
    expect(toKebabCase("multiple   spaces")).toBe("multiple-spaces");
  });

  it("should handle string with hyphens", () => {
    expect(toKebabCase("string-with-hyphens")).toBe("string-with-hyphens");
  });
});
