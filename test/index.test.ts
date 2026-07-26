import { describe, expect, it } from "vitest";

import { inRange } from "../src/index.js";

describe("inRange", () => {
  it.each([
    [2, 1, 3, true],
    [1, 1, 3, true],
    [3, 1, 3, false],
    [0, 1, 3, false],
    [2, 3, 1, true],
  ])("checks %s between %s and %s", (value, first, second, expected) => {
    expect(inRange(value, first, second)).toBe(expected);
  });
});
