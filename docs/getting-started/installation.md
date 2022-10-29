---
id: installation
sidebar_position: 1
title: Installation
---

To use `jest-a11y` in your project, run one of the following commands in your terminal:

```bash
npm i --save-dev jest-a11y @testing-library/dom @testing-library/user-events@13
```

```bash
yarn add -D jest-a11y @testing-library/dom @testing-library/user-events@13
```

After installing `jest-a11y`, you need to add the matchers during your test setup.

```ts
// In your own jest-setup.js (or any other name)
import 'jest-a11y/matchers'

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
