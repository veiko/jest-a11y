---
id: button
title: toBeAccessibleButton()
---

import { StackBlitzEditor } from '../../src/docs/StackBlitzEditor'

<div className="intro-text">A <strong>button</strong> is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.</div>

- [WAI Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- [Button Example](https://www.w3.org/WAI/ARIA/apg/example-index/button/button.html)

## Usage

### Syntax

```js
import { screen } from '@testing-library/dom'

test('button', () => {
  document.body.innerHTML = '<button data-testid="btn">👍</button>'

  expect(screen.getByTestId('btn')).toBeAccessibleButton()
})
```

## Test Summary

The matcher tests the following:

```html
<!-- test-pass -->
✓ element has role button
<!-- test-pass -->
✓ element has accessible label
<!-- test-pass -->
✓ element activated on Space
<!-- test-pass -->
✓ element activated on Enter
```

## DOM Examples

### WAI-ARIA Roles, States, and Properties

#### 1. The button has `role` of `button`.

```html
<!-- ✓ role is implicit -->
<button>👍</button>

<!-- ✓ role is set with attribute -->
<div role="button">👍</div>

<!-- ❌ FAIL - role is not set or implicit -->
<span>👎</span>
```

#### 2. The button has an accessible label.

By default, the accessible name is computed from any text content inside the button element. However, it can also be provided with `aria-labelledby` or `aria-label`.

```html
<!-- ✓ accessible name is text content -->
<button>👍</button>

<!-- ✓ accessible name is set with `aria-label` -->
<button aria-label="👍" />

<!-- ✓ accessible name is set with `aria-labelledby` -->
<body>
  <label id="the-label">OK?</label>
  <button aria-labelledby="the-label">👍</button>
</body>

<!-- ❌ FAIL - accessible name is not set or implicit -->
<button />
```

### Keyboard Interaction

#### 1. The <kbd>Space</kbd> or <kbd>Enter</kbd> keys activate the button.

```html
<!-- ✓ HTMLButtonElement will activate -->
<button>👍</button>

<!-- ✓ HTMLDivElement handles onkeydown -->
<div onkeydown="javascript: customHandler" role="button">👍</div>

<!-- ❌ FAIL - HTMLDivElement will need Javascript -->
<div>click me</div>
```

## Playground

<StackBlitzEditor />
