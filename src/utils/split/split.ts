import { split as lodashSplit } from "lodash-es";
import { type Split } from "type-fest";

// Strongly typed split
export const split = <const T extends string, const D extends string>(
  x: T,
  delimiter: D,
) => lodashSplit(x, delimiter) as Split<typeof x, typeof delimiter>;
