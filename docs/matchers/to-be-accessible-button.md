---
id: button
title: toBeAccessibleButton()
---

A button is a widget that enables users to trigger an action or event, such as submitting a form,
opening a dialog, canceling an action, or performing a delete operation.

- [WAI Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- [Button Example](https://www.w3.org/WAI/ARIA/apg/example-index/button/button.html)

## Syntax

```js
import { screen } from '@testing-library/dom'

test('button', () => {
  document.body.innerHTML = '<button data-testid="btn">👍</button>'

  expect(screen.getByTestId('btn')).toBeAccessibleButton()
})
```

## Button Examples

### WAI-ARIA Roles, States, and Properties

#### 1. The button has `role` of `button`.

```html
<!-- ✅ PASS - role is implicit -->
<button>👍</button>

<!-- ✅ PASS - role is set with attribute -->
<div role="button">👍</div>

<!-- ❌ FAIL - role is not set or implicit -->
<span>👎</span>
```

#### 2. The button has an accessible label.

By default, the accessible name is computed from any text content inside the button element.
However, it can also be provided with `aria-labelledby` or `aria-label`.

```html
<!-- ✅ PASS - accessible name is text content -->
<button>👍</button>

<!-- ✅ PASS - accessible name is set with `aria-label` -->
<button aria-label="👍" />

<!-- ✅ PASS - accessible name is set with `aria-labelledby` -->
<body>
  <label id="the-label">OK?</label>
  <button aria-labelledby="the-label">👍</button>
</body>

<!-- ❌ FAIL - accessible name is not set or implicit -->
<button />
```

### Keyboard Interaction

#### 1. The `space` or `enter` keys activate the button.

```js
// ✅ PASS - button will activate
test('button keyboard interaction', () => {
  document.body.innerHTML = '<button>click me!</button>'

  expect(screen.getByRole('button')).toBeAccessibleButton()
})

// ❌ FAIL - button will not activate
test('button keyboard interaction', () => {
  document.body.innerHTML = '<button disabled>click me!</button>'

  expect(screen.getByRole('button')).toBeAccessibleButton()
})
```
