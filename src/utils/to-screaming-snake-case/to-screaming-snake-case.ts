import { snakeCase, toUpper } from "lodash-es";
import { type ScreamingSnakeCase } from "type-fest";

// Strongly typed to screaming snake case
export const toScreamingSnakeCase = <const T extends string>(x: T) =>
  toUpper(snakeCase(x)) as ScreamingSnakeCase<typeof x>;
