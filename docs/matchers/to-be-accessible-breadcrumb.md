---
id: breadcrumb
title: toBeAccessibleBreadcrumb()
---

import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

A `breadcrumb` trail consists of a list of links to the parent pages of the current page in hierarchical order. It helps users find their place within a website or web application. Breadcrumbs are often placed horizontally before a page's main content.

- [WAI Breadcrumb Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)
- [Breadcrumb Example](https://www.w3.org/WAI/ARIA/apg/example-index/breadcrumb/index.html)

## Usage

### Syntax

<Tabs>
<TabItem label="Vanilla JS" value="js">

```js
test('breadcrumb', () => {
  document.body.innerHTML =
    '<nav aria-label="Breadcrumb" id="breadcrumb"><a href="1">1</a><a href="2">2</a></nav>'

  expect(document.getElementById('breadcrumb')).toBeAccessibleBreadcrumb()
})
```

</TabItem>
<TabItem default label="React + Testing Library" value="rtl">

```jsx
import { render, screen } from '@testing-library/react'

test('alert', () => {
  render(
    <nav aria-label="breadcrumbs" data-testid="breadcrumb">
      <a href="1">1</a>
      <a href="2">2</a>
    </nav>,
  )

  expect(screen.getByTestId('breadcrumb')).toBeAccessibleBreadcrumb()
})
```

</TabItem>
</Tabs>

## Test Summary

The matcher tests the following:

```html
<!-- test-pass -->
✓ element has tagName nav
<!-- test-pass -->
✓ element has accessible label
```

Functionality that is not tested:

```html
<!-- test-caution -->
⚠ The link to the current page has `aria-current` set to page. If the element representing the
current page is not a link, `aria-current` is optional.
```

### WAI-ARIA Roles, States, and Properties

#### 1. The widget has a `role` of `breadcrumb`.

```html
<!-- ✅ element has role breadcrumb -->
<div role="breadcrumb">hey, listen!</div>

<!-- ❌ element has role breadcrumb -->
<span>hey, listen!</span>
```

### Keyboard Interaction

TBD
