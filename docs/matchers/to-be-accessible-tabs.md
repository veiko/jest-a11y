---
id: tabs
title: toBeAccessibleTabs()
---

import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

import { ExampleContainer } from '../components/ExampleContainer'

import { Tabs as DocsTabs } from '../components/tabs/DocsTabs'

<div className="intro-text"><strong>Tabs</strong> are a set of layered sections of content, known as tab panels, that display one panel of content at a time.</div>

Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.

<ExampleContainer>
<DocsTabs />
</ExampleContainer>

## Usage

### Syntax

<Tabs>
<TabItem label="Vanilla JS" value="js">

```js
test('tabs', () => {
  document.body.innerHTML = '<div id="tabs" role="tablist">...</div>'

  /* success-next-line */
  expect(document.getElementById('tabs')).toBeAccessibleTabs()
})
```

</TabItem>
<TabItem default label="React + Testing Library" value="rtl">

```js
import { Tabs } from 'your-component-library'
import { render, screen } from '@testing-library/react'

test('tablist', () => {
  render(<Tabs data-testid="tablist" {...}>)

  /* success-next-line */
  expect(screen.getByTestId('tablist')).toBeAccessibleTabs()
})
```

</TabItem>
</Tabs>

## Test Summary

The matcher tests the following on the tabs container element:

```html
<!-- test-pass -->
✓ element has role tablist
<!-- test-pass -->
✓ element has accessible name
<!-- test-pass -->
✓ element contains a single tab with aria-selected set to true
<!-- test-pass -->
✓ element is part of tab sequence
```

The matcher tests the following on each tab:

```html
<!-- test-pass -->
✓ element has role tab and is contained within tablist
<!-- test-pass -->
✓ element has aria-controls referring to its associated tabpanel
<!-- test-pass -->
✓ element supports arrow keyboard navigation
```

The matcher tests the following on each tab panel:

```html
<!-- test-pass -->
✓ element has role tabpanel
<!-- test-pass -->
✓ element has aria-labelledby referring to its associated tab element
<!-- test-pass -->
✓ element (or first focusable child) is part of tab sequence
```

### WAI-ARIA Roles, States, and Properties

#### 1. The container widget has a `role` of `tablist`.

```html
<!-- ✅ element has role tablist -->
<!-- success-next-line -->
<div aria-label="The Tabs" role="tablist" tabindex="0">
  <div aria-selected="true" role="tab">1</div>
  <div role="tab">2</div>
</div>

<!-- ❌ element has role tablist -->
<!-- error-next-line -->
<div aria-label="The Tabs" tabindex="0">
  <div aria-selected="true" role="tab">1</div>
  <div role="tab">2</div>
</div>
```

#### 2. The container widget has an accessible name.

```html
<!-- ✅ element has accessible name -->
<!-- success-next-line -->
<div aria-label="The Tabs" role="tablist" tabindex="0">
  <div aria-selected="true" role="tab">1</div>
  <div role="tab">2</div>
</div>

<!-- ❌ element has accessible name -->
<!-- error-next-line -->
<div role="tablist" tabindex="0">
  <div aria-selected="true" role="tab">1</div>
  <div role="tab">2</div>
</div>
```

#### 3. The container element contains a single tab element with aria-selected="true".

```html
<!-- ✅ element contains a single selected tab element -->
<div aria-label="The Tabs" role="tablist" tabindex="0">
  <!-- success-next-line -->
  <div aria-selected="true" role="tab">1</div>
  <div role="tab">2</div>
</div>

<!-- ❌ element contains a single selected tab element -->
<div role="tablist" tabindex="0">
  <!-- error-next-line -->
  <div role="tab">1</div>
  <!-- error-next-line -->
  <div role="tab">2</div>
</div>

<!-- ❌ element contains a single selected tab element -->
<div role="tablist">
  <!-- error-next-line -->
  <div aria-selected="true" role="tab">1</div>
  <!-- error-next-line -->
  <div aria-selected="true" role="tab">2</div>
</div>
```

#### 4. Each tab element has role `tab` and is within the `tablist` element

```html
<!-- ✅ element has role tab and is within the tablist element -->
<div aria-label="The Tabs" role="tablist" tabindex="0">
  <!-- success-next-line -->
  <div aria-selected="true" role="tab">1</div>
  <!-- success-next-line -->
  <div role="tab">2</div>
</div>

<!-- ❌ element has role tab -->
<div aria-label="The Tabs" role="tablist" tabindex="0">
  <!-- error-next-line -->
  <div aria-selected="true">1</div>
  <!-- error-next-line -->
  <div>2</div>
</div>

<!-- ❌ element is within tablist element -->
<div aria-label="The Tabs" role="tablist" tabindex="0">
  <!-- success-next-line -->
  <div aria-selected="true" role="tab">1</div>
</div>
<!-- error-next-line -->
<div role="tab">2</div>
```

#### 5. Each tab element has `aria-controls` referring to its associated `tabpanel`

```html
<!-- ✅ element has aria-controls referring to its associated tabpanel -->
<div aria-label="The Tabs" role="tablist" tabindex="0">
  <!-- success-next-line -->
  <div aria-controls="one" aria-selected="true" id="1" role="tab">1</div>
  <!-- success-next-line -->
  <div aria-controls="two" id="2" role="tab">2</div>
</div>
<div aria-labelledby="1" id="one" role="tabpanel">One</div>
<div aria-labelledby="2" id="two" role="tabpanel">Two</div>

<!-- ❌ element has aria-controls referring to its associated tabpanel -->
<div aria-label="The Tabs" role="tablist" tabindex="0">
  <!-- error-next-line -->
  <div aria-selected="true" id="1" role="tab">1</div>
  <!-- success-next-line -->
  <div aria-controls="two" id="2" role="tab">2</div>
</div>
<div aria-labelledby="1" id="one" role="tabpanel">One</div>
<div aria-labelledby="2" id="two" role="tabpanel">Two</div>
```

#### 6. Each tab content panel has role `tabpanel`

```html
<!-- ✅ element has role tabpanel -->
<div aria-label="The Tabs" role="tablist" tabindex="0">
  <div aria-controls="one" aria-selected="true" id="1" role="tab">1</div>
  <div aria-controls="two" id="2" role="tab">2</div>
</div>
<!-- success-next-line -->
<div aria-labelledby="1" id="one" role="tabpanel">One</div>
<!-- success-next-line -->
<div aria-labelledby="2" id="two" role="tabpanel">Two</div>

<!-- ❌ element has role tabpanel -->
<div aria-label="The Tabs" role="tablist" tabindex="0">
  <div aria-controls="one" aria-selected="true" id="1" role="tab">1</div>
  <div aria-controls="two" id="2" role="tab">2</div>
</div>
<!-- error-next-line -->
<div aria-labelledby="1" id="one">One</div>
<div aria-labelledby="2" id="two" role="tabpanel">Two</div>
```

#### 7. Each `tabpanel` has `aria-labelledby` referring to its associated `tab` element

```html
<!-- ✅ element has aria-labelledby referring to its associated tab element -->
<div aria-label="The Tabs" role="tablist" tabindex="0">
  <div aria-controls="one" aria-selected="true" id="1" role="tab">1</div>
  <div aria-controls="two" id="2" role="tab">2</div>
</div>
<!-- success-next-line -->
<div aria-labelledby="1" id="one" role="tabpanel">One</div>
<!-- success-next-line -->
<div aria-labelledby="2" id="two" role="tabpanel">Two</div>

<!-- ❌ element has aria-labelledby referring to its associated tab element -->
<div aria-label="The Tabs" role="tablist" tabindex="0">
  <div aria-controls="one" aria-selected="true" id="1" role="tab">1</div>
  <div aria-controls="two" id="2" role="tab">2</div>
</div>
<!-- error-next-line -->
<div id="one">One</div>
<!-- error-next-line -->
<div id="two" role="tabpanel">Two</div>
```

#### 8. Each `tabpanel` element or its first focusable child are part of the tab sequence

```html
<!-- ✅ element or its first focusable child are part of the tab sequence -->
<div aria-label="The Tabs" role="tablist" tabindex="0">
  <div aria-controls="one" aria-selected="true" id="1" role="tab">1</div>
  <div aria-controls="two" id="2" role="tab">2</div>
</div>
<!-- success-next-line -->
<div aria-labelledby="1" id="one" role="tabpanel" tabindex="0">One</div>
<div aria-labelledby="2" id="two" role="tabpanel" tabindex="-1">
  <!-- success-next-line -->
  <button>Two</button>
</div>

<!-- ❌ element or its first focusable child are part of the tab sequence -->
<div aria-label="The Tabs" role="tablist" tabindex="0">
  <div aria-controls="one" aria-selected="true" id="1" role="tab">1</div>
  <div aria-controls="two" id="2" role="tab">2</div>
</div>
<!-- error-next-line -->
<div aria-labelledby="1" id="one" role="tabpanel" tabindex="-1">One</div>
<!-- error-next-line -->
<div aria-labelledby="2" id="two" role="tabpanel" tabindex="0"><button>Two</button></div>
```

### Keyboard Interaction

- <kbd>Tab</kbd>:

  - When focus moves into the tab list, places focus on the active tab element.
  - When the tab list contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is the tabpanel unless the first element containing meaningful content inside the tabpanel is focusable.

- <kbd>Right Arrow</kbd> moves focus to the next tab. If focus is on the last tab, moves focus to the first tab.
- <kbd>Left Arrow</kbd> moves focus to the previous tab. If focus is on the first tab, moves focus to the last tab.

## External Resources

#### Web Accessibility Initiative

- [WAI Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/)
- [Tabs Example](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html)
