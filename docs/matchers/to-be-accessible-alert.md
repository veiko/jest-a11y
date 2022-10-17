---
id: alert
title: toBeAccessibleAlert()
---

An alert is an element that displays a brief, important message in a way that attracts the user's
attention without interrupting the user's task.

- [WAI Alert Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)
- [Alert Example](https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html)

## Syntax

```js
import { screen } from '@testing-library/dom'

test('alert', () => {
  document.body.innerHTML = '<div data-testid="alert" role="alert">Hey, listen!</div>'

  expect(screen.getByTestId('alert')).toBeAccessibleAlert()
})
```

## What is tested

### WAI-ARIA Roles, States, and Properties

#### 1. The widget has a `role` of `alert`.

```html
// ✅ role is set correctly
<div role="alert">hey, listen!</div>

// ❌ role is not set or implicit
<span>hey, listen!</span>
```

### Keyboard Interaction

Because alerts are intended to provide important and potentially time-sensitive information without
interfering with the user's ability to continue working, it is crucial they do not affect keyboard
focus. The [alert dialog](/matchers/alertdialog) is designed for situations where interrupting work
flow is necessary.

:::caution Coming Soon

#### 1. 🚧 The widget should not be in the tab sequence

:::
