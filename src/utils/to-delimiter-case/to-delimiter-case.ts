import { join as lodashJoin, split as lodashSplit } from 'lodash-es';
import { type DelimiterCase } from 'type-fest';

// Strongly typed to delimiter case
export const toDelimiterCase = <const T extends string>(
  x: T,
  delimiter: string,
) =>
  lodashJoin(lodashSplit(x, ' '), delimiter) as DelimiterCase<
    typeof x,
    typeof delimiter
  >;
