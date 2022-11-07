---
id: welcome
title: Welcome
---

import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

# <div style={{ WebkitTextFillColor: 'white', fontWeight: 500, marginBottom: '60px', marginTop: '40px' }}><img src="./img/logo.svg" style={{float: 'left', height: '80px'}} /> &nbsp;jest-a11y</div>

<div className="intro-text">
  The <code>jest-a11y</code> project aims to provide a set of jest matchers that will check whether the provided DOM element has the correct ARIA roles and
  supports keyboard navigation.
</div>

## Overview

Framer Motion is a production-ready motion library for React from Framer.

It's simple yet powerful, allowing you to express complex user interactions with robust, semantic markup.

### Installation

Install `jest-a11y` from npm.

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

Then follow usage section from `jest-a11y`'s documentation to add the matchers to Jest.

```js
import 'jest-a11y/matchers'
```

```js
import { screen } from '@testing-library/dom'

test('uses jest-a11y', () => {
  document.body.innerHTML = '<button>click me</button>'

  expect(screen.queryByRole('button')).toBeAccessibleButton()
})
```

:::info This project does not guarantee what you build is accessible.

The GDS Accessibility team found that **only ~30% of issues are found by automated testing.** This tool may help you identify common issues but cannot guarantee what you build works for users.

You'll also need to test your interface with the assistive technologies that real users use.

:::

Check out jest-a11y's documentation for a full list of available matchers.

- [`jest-a11y` on Github](https://github.com/veiko/jest-a11y)
