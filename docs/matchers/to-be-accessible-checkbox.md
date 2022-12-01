---
id: checkbox
title: toBeAccessibleCheckbox()
---

<div className="intro-text">A <strong>checkbox</strong> is a widget that allows the user to toggle between choices -- checked, not checked and, in a tri-state checkbox, partially checked.</div>

There are two types of checkbox widgets:

- **Dual-state:** The most common type of checkbox, it allows the user to toggle between two choices -- checked and not checked.
- **Tri-state:** This type of checkbox supports an additional third state known as partially checked.

#### Other Resources

- [WAI Checkbox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)
- [Checkbox Pattern Examples](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html)

## Usage

### Syntax

```js
import { screen } from '@testing-library/dom'

test('button', () => {
  document.body.innerHTML = '<input aria-label="Remind me" data-testid="chbx" type="checkbox" />'

  expect(screen.getByTestId('chbx')).toBeAccessibleCheckbox()
})
```

## Test Summary

### WAI-ARIA Roles, States, and Properties

#### 1. The checkbox has `role` of `checkbox`.

```html
<!-- ✓ role is implicit -->
<input type="checkbox" />

<!-- ✓ role is set with attribute -->
<div role="checkbox">✔</div>

<!-- ❌ FAIL - role is not set or implicit -->
<span>✔</span>
```

#### 2. The checkbox has an accessible label.

The checkbox has an accessible label provided by one of the following:

- Visible text content contained within the element with role checkbox.
- A visible label referenced by the value of `aria-labelledby` set on the element with role checkbox.
- `aria-label` set on the element with role checkbox.

```html
<!-- ✓ accessible label is contained within -->
<div role="checkbox">Remind me</div>

<!-- ✓ accessible label is referenced with aria-labelledby -->
<body>
  <label id="the-label">Remind me</label>
  <input aria-labelledby="the-label" type="checkbox" />
</body>

<!-- ✓ accessible label is set with aria-label -->
<input aria-label="Remind me" type="checkbox" />

<!-- ❌ FAIL - accessible label is not set or implicit -->
<div><input type="checkbox" /> Remind me</div>
```

### Keyboard Interaction

#### 1. When the checkbox has focus, pressing the <kbd>Space</kbd> key changes the state of the checkbox.
