# DefaultValue

The default value for the input field if one is provided. This can be a string, number,
boolean, object, or array. If no value is provided during the trigger, the workflow may
use this default value.



## Supported Types

### `string`

```typescript
const value: string = "";
```

### `number`

```typescript
const value: number = NaN;
```

### `boolean`

```typescript
const value: boolean = true;
```

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "key": "<value>",
  "key1": "<value>",
  "key2": "<value>",
};
```

### `any[]`

```typescript
const value: any[] = [
  "",
];
```

