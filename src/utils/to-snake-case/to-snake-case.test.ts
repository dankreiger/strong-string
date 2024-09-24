import { describe, expect, it } from "vitest";
import { toSnakeCase } from "../..";

describe("toSnakeCase", () => {
  it("should convert camelCase to snake_case", () => {
    expect(toSnakeCase("camelCase")).toBe("camel_case");
  });

  it("should convert PascalCase to snake_case", () => {
    expect(toSnakeCase("PascalCase")).toBe("pascal_case");
  });

  it("should convert kebab-case to snake_case", () => {
    expect(toSnakeCase("kebab-case")).toBe("kebab_case");
  });

  it("should convert space separated words to snake_case", () => {
    expect(toSnakeCase("space separated words")).toBe("space_separated_words");
  });

  it("should convert mixedCase to snake_case", () => {
    expect(toSnakeCase("mixedCaseString")).toBe("mixed_case_string");
  });

  it("should handle single word", () => {
    expect(toSnakeCase("word")).toBe("word");
  });

  it("should handle empty string", () => {
    expect(toSnakeCase("")).toBe("");
  });

  it("should handle strings with numbers", () => {
    expect(toSnakeCase("stringWith123Numbers")).toBe("string_with_123_numbers");
  });

  it("should handle strings with special characters", () => {
    expect(toSnakeCase("stringWith!@#Special")).toBe("string_with_special");
  });

  it("should handle strings with underscores", () => {
    expect(toSnakeCase("string_with_underscores")).toBe(
      "string_with_underscores",
    );
  });

  it("should handle strings with multiple spaces", () => {
    expect(toSnakeCase("string  with  multiple  spaces")).toBe(
      "string_with_multiple_spaces",
    );
  });

  it("should handle strings with leading and trailing spaces", () => {
    expect(toSnakeCase("  leading and trailing  ")).toBe(
      "leading_and_trailing",
    );
  });

  it("should handle strings with mixed separators", () => {
    expect(toSnakeCase("mixed-separators_and spaces")).toBe(
      "mixed_separators_and_spaces",
    );
  });

  it("should handle strings with uppercase letters", () => {
    expect(toSnakeCase("UPPERCASE")).toBe("uppercase");
  });

  it("should handle strings with lowercase letters", () => {
    expect(toSnakeCase("lowercase")).toBe("lowercase");
  });

  it("should handle strings with mixed case letters", () => {
    expect(toSnakeCase("MixedCASE")).toBe("mixed_case");
  });

  it("should handle strings with numbers only", () => {
    expect(toSnakeCase("12345")).toBe("12345");
  });

  it("should handle strings with special characters only", () => {
    expect(toSnakeCase("!@#$%^")).toBe("");
  });

  it("should handle strings with mixed alphanumeric and special characters", () => {
    expect(toSnakeCase("abc123!@#")).toBe("abc_123");
  });
});
