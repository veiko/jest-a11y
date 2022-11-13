import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

Inside your project directory, install `jest-a11y` by running either of the following:

<Tabs>
  <TabItem value="npm">

```sh
npm install --save-dev jest-a11y
```

  </TabItem>
  <TabItem default value="yarn">

```sh
yarn add -D jest-a11y
```

  </TabItem>
</Tabs>

Import `jest-a11y` once (for instance in your tests setup file) and you're good to go:

```js
// In your own jest-setup.js (or any other name)
import 'jest-a11y'

// In jest.config.js add (if you haven't already)
setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
```

## With Typescript

If you're using TypeScript, make sure your setup file is a `.ts` and not a `.js` to include the necessary types.

You will also need to include your setup file in your tsconfig.json if you haven't already:

```json
  // In tsconfig.json
  "include": [
    "./jest-setup.ts"
  ],
```

You're ready to start using `jest-a11y` matchers in your tests:

```js
import { screen } from '@testing-library/dom'

test('uses jest-a11y', () => {
  document.body.innerHTML = '<button>click me</button>'

  expect(screen.queryByRole('button')).toBeAccessibleButton()
})
```
