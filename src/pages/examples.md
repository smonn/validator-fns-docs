# Examples

<section id="object-validation">

## Object validation

This example shows a fairly thorough use case that validates some user input and upon success submits the data to some API.

```js
import { object, string, number, required, min, matches } from 'validation-fns';

const validateSignUp = object({
  username: string(
    required('Username is required.'),
    // Automatically use the provided min value using a template.
    min(2, 'Username must be at least {min} characters.'),
    // It is recommended to use simple regular expressions and as needed use
    // multiple matches validators when a single, simple one is not enough.
    // This way you can provide custom error messages for each regex.
    matches(/^[a-z]+$/, 'Only lowercase letters allowed.')
  ),
  password: string(
    required('Password is required.'),
    // Alternative 1, provide a function and use the configured min value.
    min(8, ({ min }) => `Password must be at least ${min} characters.`)
  ),
  age: number(
    required('Age is required.'),
    // Alternative 2, just use a fixed string.
    min(18, 'Must be at least 18 to sign up.')
  ),
});

async function signUp({ username, password, age } = {}) {
  const result = await validateSignUp({ username, password, age });
  if (result.state === 'valid') {
    const response = await fetch('/api/sign-up', {
      method: 'POST',
      body: JSON.stringify(result.value),
    });

    if (response.ok) {
      window.location.assign('/sign-up-success');
    } else {
      const { message } = await response.json();
      showErrorFromAPI(message);
    }
  } else {
    showErrors(result.errors);
  }
}

function showErrorFromAPI(message) {
  // Show error message from the API
  alert('API error: ' + message);
}

function showErrors({ username, password, age } = {}) {
  // Errors is an object matching the validation configuration. Each property is
  // a string with the corresponding error message, or undefined if no error.
  alert(`
    username: ${username}
    password: ${password}
    age: ${age}
  `);
}
```

</section>

<section id="custom-validator">

## Custom validator

This, to be fair, very trivial, example shows how you can implement your own validator function.

```js
// `valid` and `invalid` are helper functions that will create correct validation
// results.
import { valid, invalid, string } from 'validator-fns';

// Ensures the value equals the string "hello".
function mustEqualHello(message) {
  // It's not required to use a higher-order function and you could define
  // the validator without it. This style does let you provide some
  // configuration to your validator.
  //
  // `field` is only passed when in the context of an object validator and
  // refers to the configured property name.
  return (value, field) => {
    if (value === 'hello') {
      return valid({ value, field });
    }

    return invalid({
      message,
      value,
      field,
    });
  };
}

// Usage
const validateText = string(mustEqualHello('The string must be "hello".'));
```

</section>
