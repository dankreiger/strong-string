import { join } from "lodash-es";
import { describe, expect, it } from "vitest";

describe("join", () => {
  it("should join an array of strings with a delimiter", () => {
    const result = join(["a", "b", "c"], "-");
    expect(result).toBe("a-b-c");
  });
});

describe("join", () => {
  it("should join an array of strings with a comma delimiter", () => {
    const result = join(["a", "b", "c"], ",");
    expect(result).toBe("a,b,c");
  });

  it("should join an array of numbers with a dash delimiter", () => {
    const result = join(["1", "2", "3"], "-");
    expect(result).toBe("1-2-3");
  });

  it("should join an array of mixed strings and numbers with a pipe delimiter", () => {
    const result = join(["a", "1", "b", "2"], "|");
    expect(result).toBe("a|1|b|2");
  });

  it("should join an array of strings with a newline delimiter", () => {
    const result = join(["a", "b", "c"], "\n");
    expect(result).toBe("a\nb\nc");
  });

  it("should join an array of strings with a tab delimiter", () => {
    const result = join(["a", "b", "c"], "\t");
    expect(result).toBe("a\tb\tc");
  });

  it("should join an array of strings with a special character delimiter", () => {
    const result = join(["a", "b", "c"], "@");
    expect(result).toBe("a@b@c");
  });

  it("should join an array of strings with a multi-character delimiter", () => {
    const result = join(["a", "b", "c"], "---");
    expect(result).toBe("a---b---c");
  });

  it("should join an array of strings with a numeric string delimiter", () => {
    const result = join(["a", "b", "c"], "123");
    expect(result).toBe("a123b123c");
  });

  it("should join an array of strings with a boolean string delimiter", () => {
    const result = join(["a", "b", "c"], "true");
    expect(result).toBe("atruebtruec");
  });

  it("should join an array of strings with a mixed character delimiter", () => {
    const result = join(["a", "b", "c"], "a1!");
    expect(result).toBe("aa1!ba1!c");
  });

  it("should join an array of strings with a space and special character delimiter", () => {
    const result = join(["a", "b", "c"], " $ ");
    expect(result).toBe("a $ b $ c");
  });

  it("should join an array of strings with a delimiter containing spaces", () => {
    const result = join(["a", "b", "c"], " - ");
    expect(result).toBe("a - b - c");
  });

  it("should join an array of strings with a delimiter containing numbers and letters", () => {
    const result = join(["a", "b", "c"], "1a2");
    expect(result).toBe("a1a2b1a2c");
  });

  it("should join an array of strings with a delimiter containing punctuation", () => {
    const result = join(["a", "b", "c"], ".,");
    expect(result).toBe("a.,b.,c");
  });

  it("should join an array of strings with a delimiter containing emojis", () => {
    const result = join(["a", "b", "c"], "😊");
    expect(result).toBe("a😊b😊c");
  });

  it("should join an array of strings with a delimiter containing unicode characters", () => {
    const result = join(["a", "b", "c"], "\u2764");
    expect(result).toBe("a❤b❤c");
  });

  it("should join an array of strings with a delimiter containing escape sequences", () => {
    const result = join(["a", "b", "c"], "\\n");
    expect(result).toBe("a\\nb\\nc");
  });

  it("should join an array of strings with a delimiter containing quotes", () => {
    const result = join(["a", "b", "c"], '"');
    expect(result).toBe('a"b"c');
  });

  it("should join an array of strings with a delimiter containing backticks", () => {
    const result = join(["a", "b", "c"], "`");
    expect(result).toBe("a`b`c");
  });

  it("should join an array of strings with a delimiter containing brackets", () => {
    const result = join(["a", "b", "c"], "[]");
    expect(result).toBe("a[]b[]c");
  });
});
