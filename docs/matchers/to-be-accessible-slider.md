---
id: slider
title: toBeAccessibleSlider()
---

import Tabs from '@theme/Tabs'

import TabItem from '@theme/TabItem'

import { TestSummary } from '../components/TestSummary'

import { ExampleContainer } from '../components/ExampleContainer'

import { Slider } from '../components/slider/DocsSlider'

<div className="intro-text">A <strong>slider</strong> is an input where the user selects a value from within a given range.</div>

Sliders typically have a slider thumb that can be moved along a bar or track to change the value of the slider.

<ExampleContainer>
  <Slider />
</ExampleContainer>

## Usage

### Syntax

<Tabs>
<TabItem label="Vanilla JS" value="js">

```js
test('slider', () => {
  document.body.innerHTML = '<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" id="slider" role="slider" />'

  expect(document.getElementById('slider')).toBeAccessibleSlider()
})
```

</TabItem>
<TabItem default label="React + Testing Library" value="rtl">

```jsx
import { render, screen } from '@testing-library/react'

test('slider', () => {
  render(<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" data-testid="slider" role="slider" />)

  expect(screen.getByTestId('slider')).toBeAccessibleSlider()
})
```

</TabItem>
</Tabs>

## Test Summary

The matcher tests the following:

<TestSummary list={[ 'element has role slider', 'element has accessible label', 'element has aria-valuemin set to a decimal value less than aria-valuemax', 'element has valid aria-valuenow', 'element increases aria-valuenow when {arrowright} is pressed', 'element decreases aria-valuenow when {arrowleft} is pressed', 'home sets the value of the slider to the first allowed value in its range', 'end sets the value of the slider to the last allowed value in its range']} />

### WAI-ARIA Roles, States, and Properties

#### 1. The widget has a `role` of `slider`.

```html
<!-- ✅ element has role slider -->
<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="slider" />

<!-- ❌ element is missing role slider -->
<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" />
```

#### 2. The widget has an accessible label.

```html
<!-- ✅ element has accessible label -->
<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="slider" />

<!-- ✅ element has accessible label -->
<div id="slider-label">Brightness</div>
<div aria-labelledby="slider-label" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="slider" />

<!-- ❌ element is missing accessible label -->
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" />
```

#### 3. The widget has valid `aria-valuemax`, `aria-valuemin` and `aria-valuenow` values

```html
<!-- ✅ element has role slider -->
<div aria-label="brightness" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="slider" />

<!-- ❌ element is missing aria-valuemax, aria-valuemin or aria-valuenow properties -->
<div aria-label="brightness" role="slider" />

<!-- ❌ element has aria-valuemin greater than aria-valuemax -->
<div aria-label="brightness" aria-valuemin="100" aria-valuemax="0" role="slider" />

<!-- ❌ element has aria-valuenow set to decimal number outside of range -->
<div aria-label="brightness" aria-valuemin="0" aria-valuemax="100" aria-valuenow="200" role="slider" />
```

### Keyboard Interaction

- <kbd>Right Arrow</kbd> and <kbd>Up Arrow</kbd> increase the value of the slider by one step
- <kbd>Left Arrow</kbd> and <kbd>Down Arrow</kbd> decrease the value of the slider by one step
- <kbd>Home</kbd> sets the value of the slider to the first allowed value in its range
- <kbd>End</kbd> sets the value of the slider to the last allowed value in its range

## External Resources

#### Web Accessibility Initiative

- [WAI Slider Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slider/)
- [Slider Example](https://www.w3.org/WAI/ARIA/apg/example-index/slider/slider-color-viewer.html)
