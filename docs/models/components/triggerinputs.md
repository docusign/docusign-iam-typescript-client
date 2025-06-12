# TriggerInputs

A key-value pair where the key is the `field_name` defined in the `trigger_input_schema` of the workflow definition,
and the value is the actual input data. Supported types include string, number, boolean, object, or array.



## Supported Types

### `string`

```typescript
const value: string = "John Doe";
```

### `number`

```typescript
const value: number = 30;
```

### `boolean`

```typescript
const value: boolean = true;
```

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "address": {
    "street": "123 Main St",
    "city": "Metropolis",
  },
};
```

### `any[]`

```typescript
const value: any[] = [
  "item1",
  "item2",
  "item3",
];
```

