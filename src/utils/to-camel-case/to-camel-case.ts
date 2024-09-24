import { camelCase } from 'lodash-es';
import { type CamelCase } from 'type-fest';

// Strongly typed to camel case
export const toCamelCase = <const T extends string>(x: T) => camelCase(x) as CamelCase<typeof x>;