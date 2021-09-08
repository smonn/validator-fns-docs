# API reference

## [Validation types](/api-reference/validation-types)

A **validation type** is expected to parse and prepare the value for the provided validation tests. For example, the `string` validation type ensures the provided value is a string, `null` or `undefined`. It must be a function that takes a value of any type and returns a promise which resolves to a validation result (see above).

- `array(config?, itemValidator, ...arrayValidators)`
- `boolean(config?, ...validators)`
- `date(config?, ...validators)`
- `number(config?, ...validators)`
- `object(schema)`
- `string(config?, ...validators)`

## [Validation tests](/api-reference/validation-tests)

A **validation test** is a simplified version of a validation type. It accepts a value of a specific type including `null` and `undefined` and then returns a promise that resolves to a validation result. You can use a validation test directly without the validation type, but it's not recommended as you lose the parsing step and you can't apply multiple tests to the same field as easily.

- `email(message)`
- `exact(limit, message)`
- `integer(message)`
- `matches(pattern, message)`
- `max(limit, message, exclusive?)`
- `maxDate(limit, message, exclusive?)`
- `min(limit, message, exclusive?)`
- `minDate(limit, message, exclusive?)`
- `oneOf(values, message)`
- `required(message, nullable?)`
- `url(message, protocols?)`
