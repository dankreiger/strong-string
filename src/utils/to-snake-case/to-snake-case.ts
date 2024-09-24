import { snakeCase } from 'lodash-es';
import { type SnakeCase } from 'type-fest';

// Strongly typed to snake case
export const toSnakeCase = <const T extends string>(x: T) => snakeCase(x) as SnakeCase<typeof x>;