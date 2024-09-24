import {
  camelCase,
  capitalize,
  kebabCase,
  join as lodashJoin,
  split as lodashSplit,
  snakeCase,
  toLower,
  toUpper,
} from "lodash-es";
import {
  type CamelCase,
  type DelimiterCase,
  type Join,
  type KebabCase,
  type ScreamingSnakeCase,
  type SnakeCase,
  type Split,
} from "type-fest";

// Strongly typed to uppercase
export const toUpperCase = <const T extends string>(x: T) =>
  toUpper(x) as Uppercase<typeof x>;

// Strongly typed to lowercase
export const toLowercase = <const T extends string>(x: T) =>
  toLower(x) as Lowercase<typeof x>;

// Strongly typed to capitalize
export const toCapitalize = <const T extends string>(x: T) =>
  capitalize(x) as Capitalize<typeof x>;

// Strongly typed to kebab case
export const toKebabCase = <const T extends string>(x: T) =>
  kebabCase(x) as KebabCase<typeof x>;

// Strongly typed to snake case
export const toSnakeCase = <const T extends string>(x: T) =>
  snakeCase(x) as SnakeCase<typeof x>;

// Strongly typed to camel case
export const toCamelCase = <const T extends string>(x: T) =>
  camelCase(x) as CamelCase<typeof x>;

// Strongly typed to screaming snake case
export const toScreamingSnakeCase = <const T extends string>(x: T) =>
  toUpper(snakeCase(x)) as ScreamingSnakeCase<typeof x>;

// Strongly typed to delimiter case
export const toDelimiterCase = <const T extends string>(
  x: T,
  delimiter: string,
) =>
  lodashJoin(lodashSplit(x, " "), delimiter) as DelimiterCase<
    typeof x,
    typeof delimiter
  >;

// Strongly typed split
export const split = <const T extends string, const D extends string>(
  x: T,
  delimiter: D,
) => lodashSplit(x, delimiter) as Split<typeof x, typeof delimiter>;

// Strongly typed join
export const join = <const T extends string, const D extends string>(
  x: T[],
  delimiter: D,
) => lodashJoin(x, delimiter) as Join<typeof x, typeof delimiter>;
