# Validation result

| property      | type    | description                                                                |
| :------------ | :------ | :------------------------------------------------------------------------- |
| `state`       | string  | Either `valid` or `invalid`.                                               |
| `field`       | string  | Either the field name or `undefined`.                                      |
| `value`       | any     | The parsed value.                                                          |
| `message`     | string  | The error message unless `state` is `valid`.                               |
| `errors`      | any     | Only if `state` is `invalid` and using the `object` or `array` validators. |
| ~~`isValid`~~ | boolean | Deprecated. Use `state` instead.                                           |
