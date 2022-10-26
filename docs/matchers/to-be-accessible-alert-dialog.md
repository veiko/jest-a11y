---
id: alertdialog
title: toBeAccessibleAlertDialog()
---

An `alert dialog` is a modal dialog that interrupts the user's workflow to communicate an important
message and acquire a response. Examples include action confirmation prompts and error message
confirmations.

- [WAI Alert Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/)
- [Alert Dialog Example](https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/alertdialog.html)

## Syntax

```js
import { screen } from '@testing-library/dom'

test('alert dialog', () => {
  document.body.innerHTML = '<div data-testid="dlg" role="alertdialog">👍</div>'

  expect(screen.getByTestId('dlg')).toBeAccessibleDialog()
})
```

### WAI-ARIA Roles, States, and Properties

#### 1. The element that contains all elements of the dialog, including the alert message and any dialog buttons, has `role` of `alertdialog`.

```html
<!-- ✅ PASS - role is set with attribute -->
<div role="alertdialog">Hey, listen!</div>

<!-- ❌ FAIL - role is not set or implicit -->
<span>Hey, listen!</span>
```

#### 2. The alert dialog has an accessible label.

The element with role `alertdialog` has either:

- A value for `aria-labelledby` that refers to the element containing the title of the dialog if the
  dialog has a visible label.
- A value for `aria-label` if the dialog does not have a visible label.

```html
<!-- ✅ PASS - accessible name is set by aria-labelledby -->
<div aria-labelledby="the-label" role="alertdialog">
  <h3 id="the-label">Sorry Mario.</h3>
  <p>But the princess is in another castle!</p>
</div>

<!-- ✅ PASS - accessible name is set by aria-label -->
<div aria-label="Sorry Mario" role="alertdialog">
  <p>But the princess is in another castle!</p>
</div>

<!-- ❌ FAIL - accessible name is not set or implicit -->
<div role="alertdialog">
  <p>But the princess is in another castle!</p>
</div>
```

### Keyboard Interaction

See the keyboard interaction section for the modal dialog pattern.
