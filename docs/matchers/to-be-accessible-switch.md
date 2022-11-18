---
id: switch
title: toBeAccessibleSwitch()
---

import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

import { ExampleContainer } from '../components/ExampleContainer'

import { Switch } from '../../src/matchers/toBeAccessibleSwitch/examples/Switch'

<div className="intro-text">A <strong>switch</strong> is an input widget that allows users to choose one of two values: on or off.</div>

Switches are similar to [checkboxes](/matchers/checkbox) and toggle buttons, which can also serve as binary inputs. One difference, however, is that switches can only be used for binary input while checkboxes and toggle buttons allow implementations with the option of supporting a third middle state.

<ExampleContainer>
  <Switch />
</ExampleContainer>

## Usage

### Syntax

<Tabs>
<TabItem label="Vanilla JS" value="js">

```js
test('switch', () => {
  document.body.innerHTML = '<div aria-checked="true" id="switch" role="switch">Hey, listen!</div>'

  expect(document.getElementById('switch')).toBeAccessibleSwitch()
})
```

</TabItem>
<TabItem default label="React + Testing Library" value="rtl">

```jsx
import { render, screen } from '@testing-library/react'

test('switch', () => {
  render(
    <div aria-checked="true" data-testid="switch" role="switch">
      Hey, listen!
    </div>,
  )

  expect(screen.getByTestId('switch')).toBeAccessibleSwitch()
})
```

</TabItem>
</Tabs>

## Test Summary

There are two different matchers for switches.

The `toBeAccessibleSwitch` matcher tests the following:

```html
<!-- test-pass -->
✓ element has role switch
<!-- test-pass -->
✓ element has accessible label
<!-- test-pass -->
✓ element has aria-checked attribute
<!-- test-pass -->
✓ element toggles aria-checked on {space}
<!-- test-pass -->
✓ element label does not change when state changes
```

The `toBeAccessibleInputSwitch` matcher should be used when the switch element is an input element with `type="checkbox"`. This matcher tests the following:

```html
<!-- test-pass -->
✓ element has role switch
<!-- test-pass -->
✓ element has accessible label
<!-- test-pass -->
✓ element toggles checked on {space}
<!-- test-pass -->
✓ element label does not change when state changes
```

:::caution Not Tested

If a set of switches is presented as a logical group with a visible label, either:

- The switches are included in an element with role group that has the property aria-labelledby set to the ID of the element containing the group label.
- The set is contained in an HTML fieldset and the label for the set is contained in an HTML legend element.

:::

### WAI-ARIA Roles, States, and Properties

#### 1. The widget has a `role` of `switch`.

```html
<!-- ✅ element has role switch -->
<div role="switch">hey, listen!</div>

<!-- ❌ element has role switch -->
<span>hey, listen!</span>
```

#### 2. The switch has an accessible label.

The label can be provided by one of the following:

- Visible text content contained within the element with `role` switch.
- A visible label referenced by the value of `aria-labelledby` set on the element with `role` switch.
- `aria-label` set on the element with `role` switch.

:::info Important

It is critical the label on a switch does not change when its state changes.

:::

#### 3. The switch has a valid `aria-checked` attribute.

```html
<!-- ✅ element has valid aria-checked -->
<div aria-checked="true" aria-label="Lights" role="switch" />

<!-- ❌ element is missing aria-checked -->
<div aria-label="Lights" role="switch" />

<!-- ❌ element has invalid aria-checked -->
<div aria-checked="on" aria-label="Lights" role="switch" />
```

### Keyboard Interaction

- <kbd>Space</kbd>: When focus is on the switch, changes the state of the switch.

## External Resources

#### Web Accessibility Initiative

- [WAI Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
- [Switch Example](https://www.w3.org/WAI/ARIA/apg/example-index/switch/switch.html)
