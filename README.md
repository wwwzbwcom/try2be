# Try2be: Try-catch wrapper for better javascript error handling

[TOC]

- Build with Typescript, ship with Built-in TypeDefinitions
- Handle `Promise` and async Function
- Zero dependencies

## Installation

Just use npm to install the library, bring with built-in type definitions:

```bash
npm i try2be
```

## Usage

### `try2Arr`

Convert a try-catch style code to result and error in array (Go-style, Best with array destruction)

```ts
import { try2Arr } from "try2be";

const [ret, err] = try2Arr(() => {
  return "tom";
});
// ret = 1;

const [ret, err] = try2Arr(() => {
  throw "jerry";
});
// err = 'jerry';
```

```ts
import { try2Arr } from "try2Arr";

const [ret, err] = try2Arr(() => {
  return "tom";
});
// ret = 1;

const [ret, err] = try2Arr(() => {
  throw "jerry";
});
// err = 'jerry';
```

### `try2Obj`

Convert a try-catch style code to result and error in object (Best with object desctruction)

```ts
import { try2Obj } from "try2be";

const { ret, err } = try2Obj(() => {
  return "tom";
});
// ret = 1;

const { ret, err } = try2Obj(() => {
  throw "jerry";
});
// err = 'jerry';
```

```ts
import { try2Arr } from "try2Obj";

const { ret, err } = try2Obj(() => {
  return "tom";
});
// ret = 1;

const { ret, err } = try2Obj(() => {
  throw "jerry";
});
// err = 'jerry';
```

### `try2Ignore`

Convert a try-catch code to just ignore throw error

```ts
import { try2Ignore } from 'try2Be'

const res = try2Ignore(() => {
    return "tom";
})
// res = "tom";

const res = try2Ignore(() => {
    return "jerry";
})
// res = undefined;
```

### Work well with `Promise` and `async` Function

```ts
import { try2Arr } from "try2Arr";

const [ret, err] = await try2Arr(async () => {
  return "tom";
}) // Type: Promise<[string, any]>;
// ret = "tom";

const [ret, err] = await try2Arr(async () => {
  throw "jerry";
}); // Type: Promise<[undefined, any]>;
// err = "jerry";
```

### Use with CommonJS

```js
const { try2Arr } = require('try2Arr');
```