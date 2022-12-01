---
id: alert
title: toBeAccessibleAlert()
---

import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

import { ExampleContainer } from '../components/ExampleContainer'

import { Alert } from '../components/alert/DocsAlert'

<div className="intro-text">An <strong>alert </strong> is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task.</div>

<ExampleContainer size={4}>
  <Alert />
</ExampleContainer>

## Usage

### Syntax

<Tabs>
<TabItem label="Vanilla JS" value="js">

```js
test('alert', () => {
  document.body.innerHTML = '<div id="alert" role="alert">Hey, listen!</div>'

  expect(document.getElementById('alert')).toBeAccessibleAlert()
})
```

</TabItem>
<TabItem default label="React + Testing Library" value="rtl">

```jsx
import { render, screen } from '@testing-library/react'

test('alert', () => {
  render(
    <div data-testid="alert" role="alert">
      Hey, listen!
    </div>,
  )

  expect(screen.getByTestId('alert')).toBeAccessibleAlert()
})
```

</TabItem>
</Tabs>

## Test Summary

The `toBeAccessibleAlert` matcher tests the following:

```html
<!-- test-pass -->
✓ element has role alert
```

### WAI-ARIA Roles, States, and Properties

#### 1. The widget has a `role` of `alert`.

```html
<!-- ✓ element has role alert -->
<div role="alert">hey, listen!</div>

<!-- ❌ element has role alert -->
<span>hey, listen!</span>
```

### Keyboard Interaction

Because alerts are intended to provide important and potentially time-sensitive information without interfering with the user's ability to continue working, it is crucial they do not affect keyboard focus. The [alert dialog](/matchers/alertdialog) is designed for situations where interrupting work flow is necessary.

:::caution Coming Soon

#### 1. 🚧 The widget should not be in the tab sequence

:::

## External Resources

#### Web Accessibility Initiative

- [WAI Alert Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)
- [Alert Example](https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html)
