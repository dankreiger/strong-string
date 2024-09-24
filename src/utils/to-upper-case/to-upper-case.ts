import { toUpper } from "lodash-es";

// Strongly typed to uppercase
export const toUpperCase = <const T extends string>(x: T) =>
  toUpper(x) as Uppercase<typeof x>;
