---
id: spinbutton
title: toBeAccessibleSpinButton()
---

import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

import { ExampleContainer } from '../components/ExampleContainer'

import { SpinButton } from '../components/spinbutton/SpinButtonExample'

<div className="intro-text">A <strong>spinbutton</strong> is an input widget that restricts its value to a set or range of discrete values.</div>

Spinbuttons often have three components, including a text field that displays the current value, an increase button, and a decrease button. The text field is usually the only focusable component because the increase and decrease functions are keyboard accessible via arrow keys. Typically, the text field also allows users to directly edit the value.

For example, in a widget that enables users to set an alarm, a spinbutton could allow users to select a number from 0 to 59 for the minute of an hour.

<ExampleContainer>
<SpinButton />
</ExampleContainer>

## Usage

### Syntax

<Tabs>
<TabItem label="Vanilla JS" value="js">

```js
test('spinbutton', () => {
  document.body.innerHTML = '<div id="spinbutton" role="spinbutton">Hey, listen!</div>'

  expect(document.getElementById('spinbutton')).toBeAccessibleSpinButton()
})
```

</TabItem>
<TabItem default label="React + Testing Library" value="rtl">

```jsx
import { render, screen } from '@testing-library/react'

test('spinbutton', () => {
  render(
    <div data-testid="spinbutton" role="spinbutton">
      Hey, listen!
    </div>,
  )

  expect(screen.getByTestId('spinbutton')).toBeAccessibleSpinButton()
})
```

</TabItem>
</Tabs>

## Test Summary

The matcher tests the following:

```html
<!-- test-pass -->
✓ element has role spinbutton
<!-- test-pass -->
✓ element has accessible label
<!-- test-pass -->
✓ element has aria-valuemin set to a decimal value less than aria-valuemax
<!-- test-pass -->
✓ element has valid aria-valuenow
<!-- test-pass -->
✓ element increases aria-valuenow when {arrowup} is pressed
<!-- test-pass -->
✓ element decreases aria-valuenow when {arrowdown} is pressed
```

:::caution Not Tested

```html
<!-- test-caution -->
⚠️ home sets the value of the slider to the first allowed value in its range
<!-- test-caution -->
⚠️ end sets the value of the slider to the last allowed value in its range
```

:::

### WAI-ARIA Roles, States, and Properties

#### 1. The widget has a `role` of `spinbutton`.

```html
<!-- ✅ element has role spinbutton -->
<div role="spinbutton">hey, listen!</div>

<!-- ❌ element has role spinbutton -->
<span>hey, listen!</span>
```

#### 2. The widget has an accessible label.

```html
<!-- ✅ element has accessible label -->
<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="spinbutton" />

<!-- ✅ element has accessible label -->
<div id="spinbutton-label">Brightness</div>
<div aria-labelledby="spinbutton-label" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="spinbutton" />

<!-- ❌ element is missing accessible label -->
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="spinbutton" />
```

#### 3. The widget has valid `aria-valuemax`, `aria-valuemin` and `aria-valuenow` values

```html
<!-- ✅ element has valid aria-valuemax, aria-valuemin and aria-valuenow -->
<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="spinbutton" />

<!-- ❌ element is missing aria-valuemax, aria-valuemin or aria-valuenow properties -->
<div aria-label="brightness" role="spinbutton" />

<!-- ❌ element has aria-valuemin greater than aria-valuemax -->
<div aria-label="brightness" aria-valuemin="100" aria-valuemax="0" role="spinbutton" />

<!-- ❌ element has aria-valuenow set to decimal number outside of range -->
<div aria-label="brightness" aria-valuemin="0" aria-valuemax="100" aria-valuenow="200" role="spinbutton" />
```

### Keyboard Interaction

- <kbd>Up Arrow</kbd>: Increases the value.
- <kbd>Down Arrow</kbd>: Decreases the value.
- <kbd>Home</kbd>: If the spinbutton has a minimum value, sets the value to its minimum.
- <kbd>End</kbd>: If the spinbutton has a maximum value, sets the value to its maximum.

## External Resources

#### Web Accessibility Initiative

- [WAI SpinButton Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/)
- [SpinButton Example](https://www.w3.org/WAI/ARIA/apg/example-index/spinbutton/spinbutton.html)
