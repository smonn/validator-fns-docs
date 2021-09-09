# Validation types

- `array(config?, itemValidator, ...arrayValidators)`
- `boolean(config?, ...validators)`
- `date(config?, ...validators)`
- `number(config?, ...validators)`
- `object(schema)`
- `string(config?, ...validators)`

<section id="api-reference-validation-types-array">

## array(config?, itemValidator, ...arrayValidators)

Casts value to an array, `null` or `undefined` if using the default array parser.

`config` is optional and may include the following properties:

- `parser` can be set to customize how to parse and transform the value being validated.
- `default` to be used as the fallback value in case the parser returns `undefined`.

`itemValidator` is the validator to be applied on each value within the array and may be any type validator:

- `array`
- `boolean`
- `date`
- `number`
- `object`
- `string`

`arrayValidators` are the remaining checks to be applied to the array as a whole and can be any of the following validation tests:

- `max`
- `min`
- `required`

</section>

<section id="api-reference-validation-types-boolean">

## boolean(config?, ...validators)

Casts value to a boolean, `null` or `undefined` if using the default boolean parser.

`config` is optional and may include the following properties:

- `parser` can be set to customize how to parse and transform the value being validated.
- `default` to be used as the fallback value in case the parser returns `undefined`.

`validators` may be any of the following validation tests:

- `oneOf`
- `required`

</section>

<section id="api-reference-validation-types-date">

## date(config?, ...validators)

Casts value to a date, `null` or `undefined` if using the default date parser.

`config` is optional and may include the following properties:

- `parser` can be set to customize how to parse and transform the value being validated.

  The default parser only accepts dates, numbers, and a subset of [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted strings (excludes week formats). If you want to allow other or more complex formats you should use a third-party library such as [date-fns](https://date-fns.org/) or [Day.js](https://day.js.org/).

- `default` to be used as the fallback value in case the parser returns `undefined`.

`validators` may be any of the following validation tests:

- `maxDate`
- `minDate`
- `oneOf`
- `required`

</section>

<section id="api-reference-validation-types-number">

## number(config?, ...validators)

Casts value to a number, `null` or `undefined` if using the default number parser.

`config` is optional and may include the following properties:

- `parser` can be set to customize how to parse and transform the value being validated.
- `default` to be used as the fallback value in case the parser returns `undefined`.
- `round` sets which, if any, rounding method to use. Must be one of `nearest`, `ceil`, or `floor`. If not set, no rounding is applied.

`validators` may be any of the following validation tests:

- `exact`
- `integer`
- `max`
- `min`
- `oneOf`
- `required`

</section>

<section id="api-reference-validation-types-object">

## object(schema)

The only validation type that does not cast the entered value, meaning it does not use a parser. There's also no default fallback value option here. Instead, the schema is an object where its properties are validation types such as `string`, `array`, `number`, etc. Nested object validators are allowed, but not recommended due to their complexity and potential performance hit.

For invalid results, errors are in the `errors` property. It matches the provided object with the same keys and strings or string records as values that contain the error messages.

Unlike Yup, this API does not (yet at least) have a ref option.

To use this with a library such as [Formik](https://formik.org/), you can use the resulting `errors` property. It is a key-value structure with the schema property keys and their validation errors if any. Besides that, the object validation results are the same as described above.

</section>

<section id="api-reference-validation-types-string">

## string(config?, ...validators)

Casts value to a string, `null` or `undefined` if using the default string parser.

`config` is optional and may include the following properties:

- `parser` can be set to customize how to parse and transform the value being validated.
- `default` to be used as the fallback value in case the parser returns `undefined`.
- `trim` will strip the whitespace from the start and end of the string when set to `true`. Defaults to `false`.

`validators` may be any of the following validation tests:

- `email`
- `exact`
- `matches`
- `max`
- `min`
- `oneOf`
- `required`
- `url`

</section>
