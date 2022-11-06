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
  document.body.innerHTML = '<div role="meter" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" aria-label="progress" />'

  expect(document.getElementById('meter')).toBeAccessibleMeter()
})
```

</TabItem>
<TabItem default label="React + Testing Library" value="rtl">

```jsx
import { render, screen } from '@testing-library/react'

test('meter', () => {
  render(
    <div aria-label="progress" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" data-testid="meter" role="meter">
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
<div aria-label="progress" aria-valuemin="0" aria-valuemax="1" role="meter" />

<!-- ❌ element has role meter -->
<div aria-label="progress" />
```

#### 2. The widget has an accessible label.

```html
<!-- ✅ element has accessible label -->
<div aria-label="progress" aria-valuemin="0" aria-valuemax="1" role="meter" />

<!-- ❌ element has accessible label -->
<div aria-valuemin="0" aria-valuemax="1" />
```

#### 3. The widget has aria-valuemin set to a decimal value less than aria-valuemax.

```html
<!-- ✅ element has aria-valuemin set to a decimal value less than aria-valuemax -->
<div aria-label="progress" aria-valuemin="0" aria-valuemax="1" role="meter" />

<!-- ❌ element has aria-valuemin greater than aria-valuemax -->
<div aria-label="progress" aria-valuemin="1" aria-valuemax="0" role="meter" />
```

#### 4. The widget has aria-valuenow set to a decimal value between aria-valuemin and aria-valuemax

```html
<!-- ✅ element has aria-valuenow set to a decimal value between aria-valuemin and aria-valuemax -->
<div aria-label="progress" aria-valuemin="0" aria-valuemax="1" aria-valuenow="0.5" role="meter" />

<!-- ❌ element has aria-valuenow greater than aria-valuemax -->
<div aria-label="progress" aria-valuemin="1" aria-valuemax="0" aria-valuenow="2" role="meter" />

<!-- ❌ element has aria-valuenow lesser than aria-valuemmin -->
<div aria-label="progress" aria-valuemin="2" aria-valuemax="3" aria-valuenow="1" role="meter" />
```

### Keyboard Interaction

N/A
