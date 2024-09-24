import { kebabCase } from 'lodash-es';
import { type KebabCase } from 'type-fest';

// Strongly typed to kebab case
export const toKebabCase = <const T extends string>(x: T) =>
  kebabCase(x) as KebabCase<typeof x>;
