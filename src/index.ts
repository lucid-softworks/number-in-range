/** Check whether a number is in the half-open interval between two bounds. */
export function inRange(value: number, first: number, second: number): boolean {
  const lower = Math.min(first, second);
  const upper = Math.max(first, second);
  return value >= lower && value < upper;
}
