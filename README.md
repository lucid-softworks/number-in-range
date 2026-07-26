# `@lucid-softworks/number-in-range`

Check a half-open numeric interval regardless of bound order. The lower bound
is included and the upper bound is excluded.

```ts
import { inRange } from "@lucid-softworks/number-in-range";

inRange(2, 1, 3); // true
inRange(3, 1, 3); // false
```
