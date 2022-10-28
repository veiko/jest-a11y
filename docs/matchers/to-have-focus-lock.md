---
id: focuslock
title: toHaveFocusLock()
---

:::caution Experimental

:::

import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

When an element creates a **focus lock**, the following should be true:

`Tab`: Moves focus to the next tabbable element inside the dialog. If focus is on the last tabbable
element inside the dialog, moves focus to the first tabbable element inside the dialog.

`Shift + Tab`: Moves focus to the previous tabbable element inside the dialog. If focus is on the
first tabbable element inside the dialog, moves focus to the last tabbable element inside the
dialog.

#### Related

##### Keyboard Trap

> https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html

## Usage

### Syntax

<Tabs>
<TabItem label="Vanilla JS" value="js">

```js
test('dialog', () => {
  document.body.innerHTML = `
  <div id="trap">
      <button id="1">1</button>
      <button onkeyup="(e => e.key == 'Tab' && document.getElementById('1').focus())(event)">2</button>
  </div>`

  expect(document.getElementById('trap')).toHaveFocusLock()
})
```

</TabItem>
<TabItem default label="React + Testing Library" value="rtl">

```jsx
import { render, screen } from '@testing-library/react'

test('dialog', () => {
  render(
    <div data-testid="trap">
      <button id="1">1</button>
      <button onKeyUp={...key up handler}>2</button>
    </div>,
  )

  expect(screen.getByTestId('trap')).toHaveFocusLock()
})
```

</TabItem>
</Tabs>
