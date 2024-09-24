# strong-string

## Overview

**strong-string** is a TypeScript utility package that provides strongly typed string manipulation functions. Unlike native `String.prototype` methods or traditional utility libraries, **strong-string** offers compile-time type safety, ensuring that string transformations like `camelCase`, `snakeCase`, `toUpperCase`, and others are fully type-checked by TypeScript.

By leveraging TypeScript’s type inference, **strong-string** allows you to perform string manipulations with complete confidence, ensuring that both runtime behavior and types remain predictable and safe.

## Features

- **Compile-time type safety** for string manipulations.
- Fully typed transformations, ensuring TypeScript infers the result correctly.
- No external setup—ready to use out of the box.
- Simple, lightweight, and designed to integrate seamlessly with TypeScript projects.

## Installation

To install the package, use `npm`, `yarn`, `pnpm`, or `bun`:

```bash
npm install strong-string
```

or

```bash
yarn add strong-string
```

or

```bash
pnpm add strong-string
```

or

```bash
bun add strong-string
```

## Usage

You can import and use any of the available functions with full TypeScript type inference.

```typescript
import {
  toCamelCase,
  toSnakeCase,
  toUpperCase,
  toKebabCase,
  toScreamingSnakeCase,
  toCapitalize,
  toDelimiterCase,
  split,
  join,
} from 'strong-string';

const myString = 'hello world';

// Strongly typed string transformations
const camelCased = toCamelCase(myString); // "helloWorld" - TypeScript infers CamelCase<'hello world'>
const snakeCased = toSnakeCase(myString); // "hello_world" - Inferred as SnakeCase<'hello world'>
const upperCased = toUpperCase(myString); // "HELLO WORLD" - Result as Uppercase<'hello world'>
const kebabCased = toKebabCase(myString); // "hello-world" - Inferred as KebabCase<'hello world'>
const screamingSnakeCased = toScreamingSnakeCase(myString); // "HELLO_WORLD" as ScreamingSnakeCase<'hello world'>
const capitalized = toCapitalize(myString); // "Hello world" - Capitalize<'hello world'>

// Delimited transformations
const delimiterCased = toDelimiterCase(myString, '-'); // "hello-world" - DelimiterCase<'hello world', '-'>

// Split and Join with strong types
const splitString = split(myString, ' '); // ["hello", "world"] as Split<'hello world', ' '>
const joinedString = join(['hello', 'world'], '-'); // "hello-world" as Join<['hello', 'world'], '-'>
```

## Available Functions

### `toUpperCase`

Converts a string to uppercase with compile-time TypeScript guarantees.

```typescript
const result = toUpperCase('hello world'); // "HELLO WORLD" as Uppercase<'hello world'>
```

### `toLowercase`

Converts a string to lowercase with compile-time type inference.

```typescript
const result = toLowercase('HELLO WORLD'); // "hello world" as Lowercase<'HELLO WORLD'>
```

### `toCapitalize`

Capitalizes the first letter of the string, with TypeScript inferring the result as `Capitalize<string>`.

```typescript
const result = toCapitalize('hello world'); // "Hello world" as Capitalize<'hello world'>
```

### `toCamelCase`

Converts a string to camelCase with full compile-time type inference.

```typescript
const result = toCamelCase('hello world'); // "helloWorld" as CamelCase<'hello world'>
```

### `toSnakeCase`

Converts a string to snake_case, ensuring TypeScript correctly infers the result.

```typescript
const result = toSnakeCase('hello world'); // "hello_world" as SnakeCase<'hello world'>
```

### `toKebabCase`

Converts a string to kebab-case with compile-time guarantees.

```typescript
const result = toKebabCase('hello world'); // "hello-world" as KebabCase<'hello world'>
```

### `toScreamingSnakeCase`

Converts a string to SCREAMING_SNAKE_CASE, fully typed at compile-time.

```typescript
const result = toScreamingSnakeCase('hello world'); // "HELLO_WORLD" as ScreamingSnakeCase<'hello world'>
```

### `toDelimiterCase`

Converts a string to a delimited case, using a specified delimiter, with full compile-time safety.

```typescript
const result = toDelimiterCase('hello world', '-'); // "hello-world" as DelimiterCase<'hello world', '-'>
```

### `split`

Splits a string by a specified delimiter, ensuring type inference and compile-time safety.

```typescript
const result = split('hello-world', '-'); // ["hello", "world"] as Split<'hello-world', '-'>
```

### `join`

Joins an array of strings into a single string with a given delimiter, preserving type safety.

```typescript
const result = join(['hello', 'world'], '-'); // "hello-world" as Join<['hello', 'world'], '-'>
```

## Type Safety and Compile-Time Guarantees

Unlike `String.prototype` methods or typical utility libraries, **strong-string** provides both runtime string manipulation and compile-time guarantees through TypeScript. With strong typing, **strong-string** ensures that transformations are **interpreted at compile-time**, allowing TypeScript to infer the result types accurately.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! If you find an issue or have a feature request, feel free to submit a pull request or file an issue on the GitHub repository.
