---
id: link
title: toBeAccessibleLink()
---

import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

<div className="intro-text">A <strong>link</strong> widget provides an interactive reference to a resource.</div>

The target resource can be either external or local, i.e., either outside or within the current page or application.

- [WAI Link Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/link/)
- [Link Example](https://www.w3.org/WAI/ARIA/apg/example-index/link/link.html)

## Usage

### Syntax

<Tabs>
<TabItem label="Vanilla JS" value="js">

```js
test('alert', () => {
  document.body.innerHTML =
    '<a href="https://veiko.github.io/jest-a11y" id="link">Hey, listen!</div>'

  expect(document.getElementById('link')).toBeAccessibleLink()
})
```

</TabItem>
<TabItem default label="React + Testing Library" value="rtl">

```jsx
import { render, screen } from '@testing-library/react'

test('alert', () => {
  render(
    <a href="https://veiko.github.io/jest-a11y" role="alert">
      Hey, listen!
    </a>,
  )

  expect(screen.getByRole('link')).toBeAccessibleLink()
})
```

</TabItem>
</Tabs>

## Test Summary

The `toBeAccessibleLink` matcher tests the following:

```html
<!-- test-pass -->
✓ element has role link
<!-- test-pass -->
✓ element activates on Enter
```

### DOM Examples

#### WAI-ARIA Roles, States, and Properties

#### 1. The element has `role` `link`

```html
<!-- ✓ element has role link implicit -->
<a href="https://veiko.github.io/jest-a11y">click me</button>

<!-- ✓ element has role link -->
<div href="https://veiko.github.io/jest-a11y" role="link">click me</div>

<!-- ❌ element has role link -->
<div onclick="window.location='https://veiko.github.io/jest-a11y'">click me</div>
```
