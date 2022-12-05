---
id: tooltip
title: toBeAccessibleTooltip()
---

import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

import { ExampleContainer } from '../../src/docs/ExampleContainer'

import { Tooltip } from '../../src/docs/tooltip/Tooltip'

:::caution Note

This design pattern is work in progress; it does not yet have ARIA Authoring Practices Task Force consensus. Progress and discussions are captured [here](https://github.com/w3c/aria-practices/issues/128).

:::

<div className="intro-text">A <strong>tooltip</strong> is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.</div>

It typically appears after a small delay and disappears when Escape is pressed or on mouse out. Tooltip widgets do not receive focus.

<ExampleContainer>
<Tooltip />
</ExampleContainer>

## Usage

The `toBeAccessibleTooltip` matcher expects to be called on the tooltip trigger. The tooltip element will be obtained through the `aria-describedby` reference on the trigger element.

### Syntax

<Tabs>
<TabItem label="Vanilla JS" value="js">

```js
test('tooltip', () => {
  document.body.innerHTML =
    '<div id="tooltip-trigger">Hey, listen!</div><div role="tooltip">tooltip content</div>'

  expect(document.getElementById('tooltip-trigger')).toBeAccessibleTooltip()
})
```

</TabItem>
<TabItem default label="React + Testing Library" value="rtl">

```jsx
import { render, screen } from '@testing-library/react'
import { Tooltip } from 'your-component-library'

test('tooltip', () => {
  render(<Tooltip content="tooltip content">Hey, listen!</Tooltip>)

  expect(screen.getByTestId('tooltip-trigger')).toBeAccessibleTooltip()
})
```

</TabItem>
</Tabs>

## Test Summary

The matcher tests the following:

```html
<!-- test-pass -->
✓ trigger element is part of tab sequence
<!-- test-pass -->
✓ trigger element has attribute aria-describedby
<!-- test-pass -->
✓ tooltip element has role tooltip
<!-- test-pass -->
✓ tooltip element is accessible when trigger is focused
<!-- test-pass -->
✓ tooltip element is hidden on {esc}
```

### WAI-ARIA Roles, States, and Properties

#### 1. The widget has a `role` of `tooltip`.

```html
<!-- ✓ element has role tooltip -->
<div role="tooltip">hey, listen!</div>

<!-- ❌ element has role tooltip -->
<span>hey, listen!</span>
```

#### 2. The tooltip trigger references the tooltip element with aria-describedby.

```html
<!-- ✓ trigger element has aria-describedby -->
<div aria-describedby="tooltip-content">hover me</div>
<div id="tooltip-content" role="tooltip">hey, listen!</div>

<!-- ❌ trigger element has aria-describedby -->
<div>hover me</div>
<div id="tooltip-content" role="tooltip">hey, listen!</div>
```

### Keyboard Interaction

- <kbd>Tab</kbd>: focuses the trigger element.
- <kbd>Escape</kbd>: dismisses the tooltip element.

## External Resources

#### Web Accessibility Initiative

- [WAI Tooltip Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
- [Tooltip Example](https://www.w3.org/WAI/ARIA/apg/example-index/tooltip/tooltip.html)
