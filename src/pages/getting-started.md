# Getting started

Install via npm or yarn:

```bash
npm install validator-fns
# or
yarn add validator-fns
```

Import everything:

```js
import * as V from 'validator-fns';
```

Or just what you need (all examples in these docs will use this style):

```js
import { string, required, email } from 'validator-fns';
```

Combine functions to create your validator:

```js
const validateRequiredEmail = string(
  required('Email address is required.'),
  email('Must be a valid email address.')
);
```

Later, execute validator:

```js
// Via async/await
const result = await validateRequiredEmail('test@example.com');

// Or via Promise
validateRequiredEmail('test@example.com').then((result) => {
  // Process result here
});
```

Finally, take action on the validation result:

```js
if (result.state === 'valid') {
  submitResult({
    // It's recommended to use the value from the result
    // as transforms will be applied based on the type.
    email: result.value,
  });
} else {
  showError({
    // The message is the first matching one based on the
    // triggered validation error.
    email: result.message,
  });
}
```
