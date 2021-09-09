# API reference

## [Validation result](/api-reference/validation-result)

All validation tests yield one of two results: `valid` and `invalid`. Both are objects.

## [Validation error message](/api-reference/validation-error-message)

The `message` argument in the validation tests must be a static string, a template string, or a function returning a string.

## [Validation types](/api-reference/validation-types)

A **validation type** is expected to parse and prepare the value for the provided validation tests. For example, the `string` validation type ensures the provided value is a string, `null` or `undefined`. It must be a function that takes a value of any type and returns a promise which resolves to a validation result (see above).

## [Validation tests](/api-reference/validation-tests)

A **validation test** is a simplified version of a validation type. It accepts a value of a specific type including `null` and `undefined` and then returns a promise that resolves to a validation result. You can use a validation test directly without the validation type, but it's not recommended as you lose the parsing step and you can't apply multiple tests to the same field as easily.
