import { toLower } from 'lodash-es';

// Strongly typed to lowercase
export const toLowerCase = <const T extends string>(x: T) =>
  toLower(x) as Lowercase<typeof x>;
