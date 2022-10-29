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

#### 1. The widget has a `tagName` of `nav`.

```html
<!-- ✅ element has tagName nav -->
<nav aria-label="breadcrumbs">
  <ol>
    <li><a href="">1</a></li>
  </ol>
</nav>

<!-- ❌ element has tagName nav -->
<div aria-label="breadcrumbs">
  <ol>
    <li><a href="">1</a></li>
  </ol>
</div>
```

#### 2. The widget has an accessible label.

```html
<!-- ✅ element has accessible label -->
<nav aria-label="breadcrumbs">
  <ol>
    <li><a href="">1</a></li>
  </ol>
</nav>

<!-- ❌ element has accessible label -->
<nav>
  <ol>
    <li><a href="">1</a></li>
  </ol>
</nav>
```

### Keyboard Interaction

TBD
