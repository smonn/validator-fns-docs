# Validation tests

<section id="api-reference-validation-tests-email">

### email(message)

Ensures the value follows an email address format. Wraps the `matches` validation test. Only works with the `string` validation type.

`message` is a string or function returning a string with the validation error message.

</section>

<section id="api-reference-validation-tests-exact">

### exact(limit, message)

Ensures value is of an exact size. Works with `string`, `array`, and `number` validation types and verifies string length, array length, and numeric value respectively. An additional `amount` field representing the size is passed to the validation error message.

`limit` is the string length, array length, or numeric value to compare against. It's passed to the validation error message and also aliased as `exact` for convenience.

`message` is a string or function returning a string with the validation error message.

</section>

<section id="api-reference-validation-tests-integer">

### integer(message)

Ensures value is an integer number. Only works with the `number` validation type.

`message` is a string or function returning a string with the validation error message.

</section>

<section id="api-reference-validation-tests-matches">

### matches(pattern, message)

Ensures value matches the specified pattern. Only works with the `string` validation type.

`pattern` is the regular expression to match against.

`message` is a string or function returning a string with the validation error message.

</section>

<section id="api-reference-validation-tests-max">

### max(limit, message, exclusive?)

Ensures value is of at most a certain size. Works with `string`, `array`, and `number` validation types and verifies string length, array length, and numeric value respectively. An additional `amount` field representing the size is passed to the validation error message.

`limit` is the string length, array length, or numeric value to compare against. It's passed to the validation error message and also aliased as `max` for convenience.

`message` is a string or function returning a string with the validation error message.

`exclusive` makes the comparison exclusive instead of exclusive when `true`. Defaults to `false`.

</section>

<section id="api-reference-validation-tests-max-date">

### maxDate(limit, message, exclusive?)

Ensures value is on or before the specified date. Only works with the `date` validation type.

`limit` is the date to compare against. May be a `Date`, `number`, or ISO date string. It's passed to the validation error message and also aliased as `max` for convenience. Uses the internal date parser.

`message` is a string or function returning a string with the validation error message.

`exclusive` makes the comparison exclusive instead of exclusive when `true`. Defaults to `false`.

</section>

<section id="api-reference-validation-tests-min">

### min(limit, message, exclusive?)

Ensures value is of at least a certain size. Works with `string`, `array`, and `number` validation types and verifies string length, array length, and numeric value respectively. An additional `amount` field representing the size is passed to the validation error message.

`limit` is the string length, array length, or numeric value to compare against. It's passed to the validation error message and also aliased as `min` for convenience.

`message` is a string or function returning a string with the validation error message.

`exclusive` makes the comparison exclusive instead of exclusive when `true`. Defaults to `false`.

</section>

<section id="api-reference-validation-tests-min-date">

### minDate(limit, message, exclusive?)

Ensures value is on or after the specified date. Only works with the `date` validation type.

`limit` is the date to compare against. May be a `Date`, `number`, or ISO date string. It's passed to the validation error message and also aliased as `min` for convenience. Uses the internal date parser.

`message` is a string or function returning a string with the validation error message.

`exclusive` makes the comparison exclusive instead of exclusive when `true`. Defaults to `false`.

</section>

<section id="api-reference-validation-tests-one-of">

### oneOf(values, message)

Ensures value is one of the provided values. Works with `string`, `date`, `number`, and `boolean` validation types.

`values` should be an array of allowed values. May be strings, dates, numbers, or booleans.

`message` is a string or function returning a string with the validation error message.

</section>

<section id="api-reference-validation-tests-required">

### required(message, nullable?)

Ensures value is not one of: `undefined`, `null`, `NaN`, an empty string, or an invalid date. Works with all types.

`message` is a string or function returning a string with the validation error message.

`nullable` allows `null` to be a valid value when `true`. Defaults to `false`.

</section>

<section id="api-reference-validation-tests-url">

### url(message, protocols?)

Ensures value is a valid URL. Only works with the `string` validation type.

`message` is a string or function returning a string with the validation error message.

`protocols` may be an array of allowed URL protocols, e.g. `https:`, `mailto:`.

</section>
