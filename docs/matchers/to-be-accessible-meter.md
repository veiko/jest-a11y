---
id: meter
title: toBeAccessibleMeter()
---

import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

<h3 style={{fontWeight: 400}}>
A <code>meter</code> is a graphical display of a numeric value that varies within a defined range.
</h3>

- [WAI Meter Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/meter/)
- [Meter Example](https://www.w3.org/WAI/ARIA/apg/example-index/meter/meter.html)

## Usage

### Syntax

<Tabs>
<TabItem label="Vanilla JS" value="js">

```js
test('meter', () => {
  document.body.innerHTML = `
<div role="meter" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" aria-label="progress" />
  `

  expect(document.getElementById('meter')).toBeAccessibleMeter()
})
```

</TabItem>
<TabItem default label="React + Testing Library" value="rtl">

```jsx
import { render, screen } from '@testing-library/react'

test('meter', () => {
  render(
    <div data-testid="meter" role="meter" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" aria-labelledby="cpu_usage_label">
      <div aria-hidden="true" width="100%" />
    </div>,
  )

  expect(screen.getByTestId('meter')).toBeAccessibleMeter()
})
```

</TabItem>
</Tabs>

## Test Summary

The matcher tests the following:

```html
<!-- test-pass -->
✓ element has role meter
<!-- test-pass -->
✓ element has accessible label
<!-- test-pass -->
✓ element has aria-valuemin set to a decimal value less than aria-valuemax
<!-- test-pass -->
✓ element has aria-valuenow set to a decimal value between aria-valuemin and aria-valuemax
```

### WAI-ARIA Roles, States, and Properties

#### 1. The widget has a `role` of `meter`.

```html
<!-- ✅ element has role meter -->
<div role="meter">hey, listen!</div>

<!-- ❌ element has role meter -->
<span>hey, listen!</span>
```

### Keyboard Interaction

N/A
