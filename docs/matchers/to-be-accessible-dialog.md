---
id: dialog
title: toBeAccessibleDialog()
---

import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

<div className="intro-text">A <strong>dialog</strong> is a window overlaid on either the primary window or another dialog window.</div>

Windows under a modal dialog are inert. That is, users cannot interact with content outside an active dialog window. Inert content outside an active dialog is typically visually obscured or dimmed so it is difficult to discern, and in some implementations, attempts to interact with the inert content cause the dialog to close.

Like non-modal dialogs, modal dialogs contain their tab sequence. That is, <kbd>Tab</kbd> and <kbd>Shift + Tab</kbd> do not move focus outside the dialog. However, unlike most non-modal dialogs, modal dialogs do not provide means for moving keyboard focus outside the dialog window without closing the dialog.

- [WAI Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/)
- [Modal Dialog Example](https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/dialog.html)

#### Related

> The [`alertdialog`](/matchers/alertdialog) role is a special-case dialog role designed specifically for dialogs that divert users' attention to a brief, important message.

## Usage

### Syntax

<Tabs>
<TabItem label="Vanilla JS" value="js">

```js
test('dialog', () => {
  document.body.innerHTML = '<div aria-label="modal" aria-modal="true" id="dialog" role="dialog">👍</div>'

  expect(element.getElementById('dialog')).toBeAccessibleDialog()
})
```

</TabItem>
<TabItem default label="React + Testing Library" value="rtl">

```jsx
import { render, screen } from '@testing-library/react'

test('dialog', () => {
  render(
    <div data-testid="dialog" role="dialog">
      Hey, listen!
    </div>,
  )

  expect(screen.getByTestId('dialog')).toBeAccessibleDialog()
})
```

</TabItem>
</Tabs>

## Test Summary

The `toBeAccessibleDialog` matcher tests the following:

```html
<!-- test-pass -->
✓ dialog container element has role dialog
<!-- test-pass -->
✓ dialog container element has aria-modal="true"
<!-- test-pass -->
✓ dialog container element has accessible label
<!-- test-pass -->
✓ dialog container element traps focus
```

Other functionality called out by WAI that is not tested:

```html
<!-- test-caution -->
⚠ all elements required to operate the dialog are descendants of the element that has role dialog
<!-- test-caution -->
⚠ when a dialog opens, focus moves to an element inside the dialog
```

### WAI-ARIA Roles, States, and Properties

#### 1. The element that serves as the dialog container has a `role` of `dialog`.

```html
<!-- ✓ role is set with attribute -->
<div role="dialog">Hey, listen!</div>

<!-- ❌ role is not set or implicit -->
<span>Hey, listen!</span>
```

#### 2. The element that serves as the dialog container has attribute `aria-modal` set to `"true"`.

```html
<!-- ✓ attribute aria-modal is set to "true" -->
<div aria-modal="true" role="dialog">Hey, listen!</div>

<!-- ❌ attribute aria-modal is set to "true" -->
<span>Hey, listen!</span>
```

#### 3. The dialog has an accessible label.

The element with role `dialog` has either:

- A value for `aria-labelledby` that refers to the element containing the title of the dialog if the dialog has a visible label.
- A value for `aria-label` if the dialog does not have a visible label.

```html
<!-- ✓ accessible name is set by aria-labelledby -->
<div aria-labelledby="the-label" role="alertdialog">
  <h3 id="the-label">Sorry Mario.</h3>
  <p>But the princess is in another castle!</p>
</div>

<!-- ✓ accessible name is set by aria-label -->
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
