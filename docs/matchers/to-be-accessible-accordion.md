---
id: accordion
title: toBeAccessibleAccordion()
---

import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

import { ExampleContainer } from '../../src/docs/ExampleContainer'

import { TestSummary } from '../../src/docs/TestSummary'

import { AccordionTestRunner } from '../../src/docs/accordion/AccordionTestRunner'

import { Accordion } from '../../src/docs/accordion/DocsAccordion'

<div className="intro-text">
An <strong>accordion</strong> is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content.</div>

The headings function as controls that enable users to reveal or hide their associated sections of content.

<ExampleContainer height="340px">
  <Accordion />
</ExampleContainer>

## Usage

The `toBeAccessibleAccordion` matcher should be called on the HTML element wrapped around the interactive headings and their content. It will find each accordion header item and verify that it has `role="button"` and is wrapped in a heading element.

### Syntax

To use the matcher pass a valid HTML element to the `expect` function and verify its DOM output and keyboard interactions with `toBeAccessibleAccordion()`.

<Tabs>
<TabItem value="js" label="JS">

```jsx
test('accordion', () => {
  document.body.innerHTML = `
    <div id="accordion">
      <h3>
        <button ...>
          Item 1
        </button>
      </h3>
      <div id="panel">Accordion Panel 1</div>
    </div>`

  // highlight-next-line
  expect(document.getElementById('accordion')).toBeAccessibleAccordion()
})
```

</TabItem>
<TabItem default label="React" value="react">

```jsx
import { render, screen } from '@testing-library/react'

test('accordion', () => {
  render(<Accordion id="accordion">...</Accordion>)

  // highlight-next-line
  expect(screen.getByTestId('accordion')).toBeAccessibleAccordion()
})
```

</TabItem>
</Tabs>

## Test Summary

The `toBeAccessibleAccordion` matcher will loop through the accordion items and test the following for each:

<TestSummary list={['element is wrapped in an element with role heading', 'element is wrapped in an element with aria-level', 'element has attribute aria-controls', 'aria-expanded toggled on {enter}', 'aria-expanded toggled on {space}']} />

#### Known Limitations

There are many ways in which an element can be hidden in the UI. Because of this, there is no consistent way for us to test whether the value of the `aria-expanded` tag is in sync with the visibility of its content panel.

:::caution Not tested

If the accordion panel associated with an accordion header is visible, the header button element has `aria-expanded="true"`. If the panel is not visible, `aria-expanded` is set to false.

:::

### WAI-ARIA Roles, States, and Properties

Each accordion item will be composed of the following:

- A <span className="handwritten">heading</span> element.
- A <span className="handwritten">button</span> element.
- A <span className="handwritten">content</span> element.

The elements will be checked for the following when passed through the matcher:

- The title of each accordion item is contained in a <span className="handwritten">button</span> element.
- Each <span className="handwritten">button</span> is wrapped in a <span className="handwritten">heading</span> that has a value set for <code>aria-level</code> that is appropriate for the information architecture of the page
- The <span className="handwritten">button</span> has <code>aria-controls</code> set to the ID of the <span className="handwritten">content</span> element.
- If the <span className="handwritten">content</span> associated with an accordion item is visible, the <span className="handwritten">button</span> element has <code>aria-expanded="true"</code>. If the panel is not visible, <code>aria-expanded="false"</code>.

### Keyboard Interaction

Each <span className="handwritten">button</span> element in an accordion should be part of the tab sequence and can be activated with the keyboard to show or hide its contents.

- The <span className="handwritten">button</span> can receive focus.
- When the <span className="handwritten">button</span> has focus, <kbd>Space</kbd> or <kbd>Enter</kbd> toggles `aria-expanded` on the <span className="handwritten">button</span> and the visibility of the <span className="handwritten">content</span>.
- If the <span className="handwritten">content</span> is visible, and the user presses <kbd>Tab</kbd>, focus will move to the first tabbable element within the <span className="handwritten">content</span>.

## Playground

Test out the DOM structure of an accordion element here:

<AccordionTestRunner />

## External Resources

#### Web Accessibility Initiative

- [WAI Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- [Accordion Example](https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion.html)
