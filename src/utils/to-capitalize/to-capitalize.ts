import { capitalize } from 'lodash-es';

// Strongly typed to capitalize
export const toCapitalize = <const T extends string>(x: T) => capitalize(x) as Capitalize<typeof x>;