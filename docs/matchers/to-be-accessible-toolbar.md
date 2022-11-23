---
id: toolbar
title: toBeAccessibleToolbar()
---

import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

import { ExampleContainer } from '../components/ExampleContainer'

import { Toolbar } from '../components/toolbar/Toolbar'

<div className="intro-text">A <strong>toolbar</strong> is a container for grouping a set of controls, such as buttons, menubuttons, or checkboxes.</div>

When a set of controls is visually presented as a group, the `toolbar` role can be used to communicate the presence and purpose of the grouping to screen reader users.

<ExampleContainer>
<Toolbar />
</ExampleContainer>

## Usage

### Syntax

<Tabs>
<TabItem label="Vanilla JS" value="js">

```js
test('toolbar', () => {
  document.body.innerHTML = '<div id="toolbar" role="toolbar">Hey, listen!</div>'

  expect(document.getElementById('toolbar')).toBeAccessibleToolbar()
})
```

</TabItem>
<TabItem default label="React + Testing Library" value="rtl">

```jsx
import { render, screen } from '@testing-library/react'

test('toolbar', () => {
  render(
    <div data-testid="toolbar" role="toolbar">
      Hey, listen!
    </div>,
  )

  expect(screen.getByTestId('toolbar')).toBeAccessibleToolbar()
})
```

</TabItem>
</Tabs>

## Test Summary

The matcher tests the following:

```html
<!-- test-pass -->
✓ element has role toolbar
```

### WAI-ARIA Roles, States, and Properties

#### 1. The widget has a `role` of `toolbar`.

```html
<!-- ✅ element has role toolbar -->
<div role="toolbar">hey, listen!</div>

<!-- ❌ element has role toolbar -->
<span>hey, listen!</span>
```

### Keyboard Interaction

- <kbd>Tab</kbd> focuses the element

## External Resources

#### Web Accessibility Initiative

- [WAI Toolbar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)
- [Toolbar Example](https://www.w3.org/WAI/ARIA/apg/example-index/toolbar/toolbar.html)
