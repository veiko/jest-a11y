<div align="center">
<h1>jest-a11y</h1>
<img
    height="80"
    width="80"
    alt="shaka"
    src="https://raw.githubusercontent.com/veiko/jest-a11y/main/static/img/logo.svg"
  />

<p>Custom Jest matchers for testing accessibility.</p>
</div>

---

## The problem

When writing web applications, the ability to easily follow accessibility guidelines is becoming
essential. As developers, we need a framework to easily and quickly test compliance.

## This solution

The `jest-a11y` project aims to provide a set of jest matchers that will check whether the provided
DOM element has the correct ARIA roles and supports keyboard navigation.

### FAQ:

<details>
  <summary>
    <strong>
      Why are ARIA roles important?
    </strong>
  </summary>

ARIA roles provide semantic meaning to content, allowing screen readers and other tools to present
and support interaction with object in a way that is consistent with user expectations of that type
of object. ARIA roles can be used to describe elements that don't natively exist in HTML or exist
but don't yet have full browser support.

</details>

<details>
  <summary>
    <strong>
      How is this different from <a href="https://www.npmjs.com/package/jest-axe"><code>jest-axe</code></a>?
    </strong>
  </summary>

The `jest-axe` plugin will parse through the provided DOM structure and check for any violations.
This plugin will also attempt to validate keyboard navigation.

</details>

<details>
  <summary>
    <strong>
      Does this work with Enzyme or React Testing Library?
    </strong>
  </summary>

Yes. It works with either of those tools.

</details>

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
  - [Known Issues](#known-issues)
- [Inspiration](#inspiration)
- [Other Solutions](#other-solutions)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
  - [💡 Feature Requests](#-feature-requests)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and should be installed
as one of your project's `dependencies`:

```sh
npm install --save jest-a11y
```

## Usage

```ts
import 'jest-a11y/matchers'
```

From there, you can use the matchers in your tests.

```jsx
describe('MyButtonComponent', () => {
  it('passes when element is valid', async () => {
    render(<button>click me</button>)

    expect(screen.getByRole('button')).toBeAccessibleButton()
  })
```

### Known Issues

#### Coming Soon

TBD

## Inspiration

As I have been working on different web projects, accessibility has started to become a major
concern and product requirement, but it can be cumbersome to re-write the re-test the same
functionality across multiple projects. As projects also started shifting to React Testing Library
instead of Enzyme, it now became possible to test DOM output and keyboard navigation in unit tests.

## Other Solutions

There's [jest-axe](https://github.com/nickcolley/jest-axe) but that project exports a single matcher
and doesn't test any user interactions.

## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue] label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][labels/bug]

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding a 👍. This helps
maintainers prioritize what to work on.

[**See Feature Requests**][labels/enhancement]

This project follows the [all-contributors][all-contributors] specification. Contributions of any
kind welcome!

## LICENSE

MIT
