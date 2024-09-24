import { join as lodashJoin } from "lodash-es";
import { type Join } from "type-fest";

// Strongly typed join
export const join = <const T extends string, const D extends string>(
  x: T[],
  delimiter: D,
) => lodashJoin(x, delimiter) as Join<typeof x, typeof delimiter>;
