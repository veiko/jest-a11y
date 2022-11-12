---
id: radiogroup
title: toBeAccessibleRadioGroup()
---

import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

<div className="intro-text">A <strong>radio group</strong> is a set of checkable buttons, known as radio buttons, where no more than one of the buttons can be checked at a time.</div>

- [WAI RadioGroup Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/)
- [RadioGroup Example](https://www.w3.org/WAI/ARIA/apg/example-index/radio/radio.html)

## Usage

### Syntax

<Tabs>
<TabItem label="Vanilla JS" value="js">

```js
test('radiogroup', () => {
  document.body.innerHTML = `
    <div aria-label="Delivery Method" id="radiogroup" role="radiogroup">
      <input aria-checked="true" aria-label="Pickup" type="radio" />
      <input aria-checked="true" aria-label="Delivery" type="radio" />
    </div>
  `

  expect(document.getElementById('radiogroup')).toBeAccessibleRadioGroup()
})
```

</TabItem>
<TabItem default label="React + Testing Library" value="rtl">

```jsx
import { render, screen } from '@testing-library/react'

test('radiogroup', () => {
  render(
    <div aria-label="Delivery Method" data-testid="radiogroup" role="radiogroup">
      <input aria-checked="true" aria-label="Pickup" type="radio" />
      <input aria-checked="true" aria-label="Delivery" type="radio" />
    </div>,
  )

  expect(screen.getByTestId('radiogroup')).toBeAccessibleRadioGroup()
})
```

</TabItem>
</Tabs>

## Test Summary

The matcher tests the following:

```html
<!-- test-pass -->
✓ container element has role radiogroup
<!-- test-pass -->
✓ container element has accessible label
<!-- test-pass -->
✓ radio button element has role radio
<!-- test-pass -->
✓ radio button element has accessible label
<!-- test-pass -->
✓ radio button element has aria-checked

<!-- See note below * -->
⚠️ (1) container element is part of tab sequence
<!-- See note below * -->
⚠️ (2)(3) navigates to each radio button with arrow keys and checks the next element
```

##### Notes

- (1) `jest-dom` does not focus on the checked element in a radio group when the group is tabbed to, so if the focus is not set with JavaScript this test simply tests whether any of the radio button elements gains focus
- (2) `jest-dom` does not focus the next element in a radio group when the element is navigated to with the arrow keys, the test currently only verifies that `aria-checked="true"` is set when the user navigates with the arrow keys
- (3) there are two different forms of arrow navigation for radio groups depending on whether the radio group is contained in a toolbar ([more info](https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/)). The current test is for radio groups _not_ in a toolbar.

### WAI-ARIA Roles, States, and Properties

#### 1. The container widget has a `role` of `radiogroup`.

```html
<!-- ✅ element has role radiogroup -->
<div aria-label="Delivery Method" role="radiogroup">
  <input aria-checked="true" aria-label="Pickup" type="radio" />
  <input aria-checked="true" aria-label="Delivery" type="radio" />
</div>

<!-- ❌ element is missing role radiogroup -->
<div>
  <input aria-checked="true" aria-label="Pickup" type="radio" />
  <input aria-checked="true" aria-label="Delivery" type="radio" />
</div>
```

### Keyboard Interaction

1. <kbd>Tab</kbd> and <kbd>Shift</kbd> + Tab: Move focus into and out of the radio group. When focus moves into a radio group:

- If a radio button is checked, focus is set on the checked button.
- If none of the radio buttons are checked, focus is set on the first radio button in the group.

1. <kbd>Space</kbd>: checks the focused radio button if it is not already checked.
1. <kbd>Right Arrow</kbd> and <kbd>Down Arrow</kbd>: move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the last button, focus moves to the first button.
1. <kbd>Left Arrow</kbd> and <kbd>Up Arrow</kbd>: move focus to the previous radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the first button, focus moves to the last button.
