---
id: accordion
title: toBeAccessibleAccordion()
---

import Tabs from '@theme/Tabs'

import TabItem from'@theme/TabItem'

import { ExampleContainer } from '../components/ExampleContainer'

import { Accordion } from '../components/accordion/DocsAccordion'

<div className="intro-text">
An <strong>accordion</strong> is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content.</div>

The headings function as controls that enable users to reveal or hide their associated sections of content.

<ExampleContainer>
<Accordion />
</ExampleContainer>

## Usage

### Syntax

<Tabs>
<TabItem value="win" label="Vanilla JS">

```js
test('accordion', async () => {
  document.body.innerHTML = `
    <div id="accordion">
      <h3>
        <button aria-controls="panel" aria-expanded="false" onclick="this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') == 'true' ? 'false' : 'true')">Accordion Header 1</button>
      </h3>
      <div id="panel">Accordion Panel 1</div>
    </div>`

  await expect(document.getElementById('accordion')).toBeAccessibleAccordion()
})
```

</TabItem>
<TabItem default label="React + Testing Library" value="react">

```jsx
import { render, screen } from '@testing-library/react'

test('accordion', async () => {
  render(
    <div data-testid="accordion">
      <h3>
        <button
          aria-controls="panel"
          aria-expanded="false"
          onClick={e => {
            const self = e.target as HTMLElement
            self.setAttribute(
              'aria-expanded',
              self.getAttribute('aria-expanded') == 'true' ? 'false' : 'true',
            )
          }}
        >
          Accordion Header 1
        </button>
      </h3>
      <div id="panel">Accordion Panel 1</div>
    </div>,
  )

  await expect(screen.getByTestId('accordion')).toBeAccessibleAccordion()
})
```

</TabItem>
</Tabs>

## Test Summary

The matcher for an accordion will loop through the accordion items (`button` elements). For each accordion item, the matcher will test the following:

```html
<!-- test-pass -->
✓ element is wrapped in an element with role heading
<!-- test-pass -->
✓ element is wrapped in an element with aria-level
<!-- test-pass -->
✓ element has attribute aria-controls
<!-- test-pass -->
✓ aria-expanded toggled on {enter}
<!-- test-pass -->
✓ aria-expanded toggled on {space}
```

Functionality that is not tested:

```html
<!-- test-caution -->
⚠ If the accordion panel associated with an accordion header is visible, the header button element has aria-expanded set to true. If the panel is not
visible, aria-expanded is set to false.
```

### WAI-ARIA Roles, States, and Properties

#### 1. The title of each accordion header is contained in an element with `role` of `button`

```html
<!-- ✅ the title is contained in a button -->
<div class="accordion">
  <h3>
    <!-- success-next-line -->
    <button aria-controls="panel" aria-expanded="false">
      <!-- success-next-line -->
      Accordion Header 1
      <!-- success-next-line -->
    </button>
  </h3>
  <div id="panel">Accordion Panel 1</div>
</div>

<!-- ❌ the title is contained in a span -->
<div class="accordion">
  <h3>
    <!-- error-next-line -->
    <span aria-controls="panel" aria-expanded="false">Accordion Header 1</span>
  </h3>
  <div id="panel">Accordion Panel 1</div>
</div>
```

#### 2. Each accordion header button is wrapped in an element with role heading that has a value set for `aria-level` that is appropriate for the information architecture of the page.

```html
<!-- ✅ button is wrapped in element with implicit `aria-level` and `role` -->
<div>
  <!-- success-next-line -->
  <h3>
    <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>
  </h3>
  <div id="panel">Accordion Panel 1</div>
</div>

<!-- ✅ button is wrapped in element with `aria-level` and `role` set -->
<div>
  <!-- success-next-line -->
  <div aria-level="3" role="heading">
    <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>
  </div>
  <div id="panel">Accordion Panel 1</div>
</div>

<!--  ❌ button is not wrapped in heading -->
<div>
  <!-- error-next-line -->
  <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>
  <div id="panel">Accordion Panel 1</div>
</div>
```

#### 3. The accordion header button element has `aria-controls` set to the ID of the element containing the accordion panel content.

```html
<!--  ✅ element has aria-controls -->
<div>
  <h3>
    <!-- success-next-line -->
    <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>
  </h3>
  <div id="panel">Accordion Panel 1</div>
</div>

<!--  ❌ element does not have aria-controls -->
<div>
  <h3>
    <!-- error-next-line -->
    <button aria-expanded="false">Accordion Header 1</button>
  </h3>
  <div id="panel">Accordion Panel 1</div>
</div>
```

:::info Not tested

✋ Remember, this project _does not guarantee what you build is accessible._

#### 4. If the accordion panel associated with an accordion header is visible, the header button element has `aria-expanded` set to `true`. If the panel is not visible, `aria-expanded` is set to `false`.

There are multiple ways to implement accordion panel visibility, so there is no single method to test that the panel visibility corresponds to the `aria-expanded` value.

<details>
  <summary>Example</summary>

```html
<!-- ✅ button has aria-expanded prop according to panel visibility -->
<div>
  <h3><button aria-controls="panel" aria-expanded="true">Accordion Header 1</button></h3>
  <div style="display: block">Accordion Panel 1</div>
  <h3><button aria-controls="panel" aria-expanded="false">Accordion Header 2</button></h3>
  <div style="display: none">Accordion Panel 2</div>
</div>

<!-- ❌ button and panel are not expanded in sync -->
<div>
  <button aria-controls="panel" aria-expanded="false">Accordion Header 1</button>
  <div id="panel">Accordion Panel 1</div>
  <button aria-controls="panel" aria-expanded="true">Accordion Header 1</button>
  <div id="panel">Accordion Panel 1</div>
</div>
```

</details>

:::

### Keyboard Interaction

#### 1. The accordion header button element can receive focus

#### 2. When element has focus, <kbd>Space</kbd> or <kbd>Enter</kbd> activates it.

## External Resources

#### Web Accessibility Initiative

- [WAI Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- [Accordion Example](https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion.html)
