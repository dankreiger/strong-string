import { describe, expect, it } from "vitest";
import { split } from "lodash-es";

describe("split", () => {
  it("should work", () => {
    expect(true).toBe(true);
  });
});
describe("split", () => {
  it("should split a string by a single character delimiter", () => {
    const result = split("a,b,c", ",");
    expect(result).toEqual(["a", "b", "c"]);
  });

  it("should split a string by a multi-character delimiter", () => {
    const result = split("a--b--c", "--");
    expect(result).toEqual(["a", "b", "c"]);
  });

  it("should return the original string in an array if delimiter is not found", () => {
    const result = split("abc", ",");
    expect(result).toEqual(["abc"]);
  });

  it("should handle an empty string", () => {
    const result = split("", ",");
    expect(result).toEqual([""]);
  });

  it("should handle a string with no delimiters", () => {
    const result = split("abc", ",");
    expect(result).toEqual(["abc"]);
  });

  it("should handle a string that starts with the delimiter", () => {
    const result = split(",a,b,c", ",");
    expect(result).toEqual(["", "a", "b", "c"]);
  });

  it("should handle a string that ends with the delimiter", () => {
    const result = split("a,b,c,", ",");
    expect(result).toEqual(["a", "b", "c", ""]);
  });

  it("should handle consecutive delimiters", () => {
    const result = split("a,,b,c", ",");
    expect(result).toEqual(["a", "", "b", "c"]);
  });

  it("should handle a string with only delimiters", () => {
    const result = split(",,,", ",");
    expect(result).toEqual(["", "", "", ""]);
  });

  it("should handle a string with spaces and delimiters", () => {
    const result = split("a, b, c", ",");
    expect(result).toEqual(["a", " b", " c"]);
  });

  it("should handle a string with special characters as delimiters", () => {
    const result = split("a$b$c", "$");
    expect(result).toEqual(["a", "b", "c"]);
  });

  it("should handle a string with numeric characters as delimiters", () => {
    const result = split("a1b1c", "1");
    expect(result).toEqual(["a", "b", "c"]);
  });

  it("should handle a string with mixed character delimiters", () => {
    const result = split("a1b2c3d", /\d/);
    expect(result).toEqual(["a", "b", "c", "d"]);
  });

  it("should handle a string with regex special characters as delimiters", () => {
    const result = split("a.b.c", ".");
    expect(result).toEqual(["a", "b", "c"]);
  });

  it("should handle a string with multiple different delimiters", () => {
    const result = split("a,b;c.d", /[,;.]/);
    expect(result).toEqual(["a", "b", "c", "d"]);
  });

  it("should handle a string with unicode characters as delimiters", () => {
    const result = split("a\u2028b\u2028c", "\u2028");
    expect(result).toEqual(["a", "b", "c"]);
  });

  it("should handle a string with emoji characters as delimiters", () => {
    const result = split("a😊b😊c", "😊");
    expect(result).toEqual(["a", "b", "c"]);
  });

  it("should handle a string with escape sequences as delimiters", () => {
    const result = split("a\\nb\\nc", "\\n");
    expect(result).toEqual(["a", "b", "c"]);
  });

  it("should handle a string with mixed case delimiters", () => {
    const result = split("aAbAcA", "A");
    expect(result).toEqual(["a", "b", "c", ""]);
  });

  it("should handle a string with delimiters at the start and end", () => {
    const result = split(",a,b,c,", ",");
    expect(result).toEqual(["", "a", "b", "c", ""]);
  });
});
