---
id: alertdialog
title: toBeAccessibleAlertDialog()
---

import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

<div className="intro-text">An <strong>alert dialog</strong> is a modal dialog that interrupts the user's workflow to communicate an important message and acquire a response.</div>

Examples include action confirmation prompts and error message confirmations.

- [WAI Alert Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/)
- [Alert Dialog Example](https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/alertdialog.html)

## Usage

### Syntax

<Tabs>
<TabItem label="Vanilla JS" value="js">

```js
test('alertdialog', () => {
  document.body.innerHTML = '<div aria-label="modal" id="dlg" role="alertdialog">👍</div>'

  expect(document.getElementById('dlg')).toBeAccessibleAlertDialog()
})
```

</TabItem>
<TabItem default label="React + Testing Library" value="rtl">

```jsx
import { render, screen } from '@testing-library/react'

test('alertdialog', () => {
  render(
    <div data-testid="alertdialog" role="alertdialog">
      Hey, listen!
    </div>,
  )

  expect(screen.getByTestId('alertdialog')).toBeAccessibleAlertDialog()
})
```

</TabItem>
</Tabs>

## Test Summary

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

- A value for `aria-labelledby` that refers to the element containing the title of the dialog if the dialog has a visible label.
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
