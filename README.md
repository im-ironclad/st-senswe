# Package Sorter

Sorts packages into dispatch stacks based on volume, dimensions, and mass.

## Prerequisites

- Node.js >= 18

## Usage

```js
const { sort } = require("./index");

sort(width, height, length, mass);
// width, height, length in cm — mass in kg
// Returns: "STANDARD", "SPECIAL", or "REJECTED"
```

## Sorting Rules

| Condition | Stack |
|---|---|
| Neither bulky nor heavy | `STANDARD` |
| Bulky or heavy (not both) | `SPECIAL` |
| Both bulky and heavy | `REJECTED` |

- **Bulky**: volume >= 1,000,000 cm^3 or any dimension >= 150 cm
- **Heavy**: mass >= 20 kg

## Tests

```sh
node --test
```
