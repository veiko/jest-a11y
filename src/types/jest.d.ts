export interface JestA11yMatchers<CustomMatcherResult = unknown> {
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `accordion`.
   * Each button element in an accordion will be tested for the following:
   * - element is wrapped in an element with `role` heading
   * - element is wrapped in an element with `aria-level`
   * - element has attribute `aria-controls`
   * - `aria-expanded` toggled on {enter}
   * - `aria-expanded` toggled on {space}
   *
   * @example
   * <div role="accordion">...</div>
   *
   * expect(screen.getByRole('accordion')).toBeAccessibleAccordion()
   *
   * @see
   * [jest-a11y/matchers/accordion](https://veiko.github.io/jest-a11y/matchers/accordion)
   */
  toBeAccessibleAccordion(): Promise<CustomMatcherResult>
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `alert`.
   *
   * @example
   * <div role="alert">...</div>
   *
   * expect(screen.getByRole('alert')).toBeAccessibleAlert()
   *
   * @see
   * [jest-a11y/matchers/alert](https://veiko.github.io/jest-a11y/matchers/alert)
   */
  toBeAccessibleAlert(): CustomMatcherResult
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `alertdialog`.
   *
   * @example
   * <div role="alertdialog">...</div>
   *
   * expect(screen.getByRole('alertdialog')).toBeAccessibleAlertDialog()
   *
   * @see
   * [jest-a11y/matchers/alertdialog](https://veiko.github.io/jest-a11y/matchers/alertdialog)
   */
  toBeAccessibleAlertDialog(): Promise<CustomMatcherResult>
  /**
   * Assert whether an element has the correct keyboard interaction, label and role for a button.
   *
   * @example
   * <button id="targetBtn" />
   *
   * expect(screen.getByRole('button')).toBeAccessibleButton()
   *
   * @see
   * [jest-a11y/matchers/button](https://veiko.github.io/jest-a11y/matchers/button)
   */
  toBeAccessibleButton(): Promise<CustomMatcherResult>
  /**
   * Assert whether an element has the correct keyboard interaction, label and role for a checkbox.
   *
   * @example
   * <input aria-label="My Checkbox" type="checkbox" />
   *
   * expect(screen.getByRole('checkbox')).toBeAccessibleCheckbox()
   *
   * @see
   * [jest-a11y/matchers/checkbox](https://veiko.github.io/jest-a11y/matchers/checkbox)
   */
  toBeAccessibleCheckbox(): Promise<CustomMatcherResult>
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `dialog`.
   *
   * @example
   * <div role="dialog">...</div>
   *
   * expect(screen.getByRole('dialog')).toBeAccessibleDialog()
   *
   * @see
   * [jest-a11y/matchers/dialog](https://veiko.github.io/jest-a11y/matchers/dialog)
   */
  toBeAccessibleDialog(): Promise<CustomMatcherResult>
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `link`.
   *
   * @example
   * <a href="">...</a>
   *
   * expect(screen.getByRole('link')).toBeAccessibleLink()
   *
   * @see
   * [jest-a11y/matchers/link](https://veiko.github.io/jest-a11y/matchers/link)
   */
  toBeAccessibleLink(): Promise<CustomMatcherResult>
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `meter`.
   * @summary A `meter` is a graphical display of a numeric value that varies within a defined range.
   *
   * @example
   * <div role="meter">...</div>
   *
   * expect(screen.getByRole('meter')).toBeAccessibleMeter()
   *
   * @see
   * [jest-a11y/matchers/meter](https://veiko.github.io/jest-a11y/matchers/meter)
   */
  toBeAccessibleMeter(): CustomMatcherResult
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `radiogroup`.
   * @summary A `radiogroup` is a set of checkable buttons, known as radio buttons, where no more than one of the buttons can be checked at a time.
   *
   * @example
   * <div role="radiogroup">...</div>
   *
   * expect(screen.getByRole('radiogroup')).toBeAccessibleRadioGroup()
   *
   * @see
   * [jest-a11y/matchers/radiogroup](https://veiko.github.io/jest-a11y/matchers/radiogroup)
   */
  toBeAccessibleRadioGroup(): Promise<CustomMatcherResult>
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `slider`.
   * @summary A `slider` is an input where the user selects a value from within a given range.
   *
   * @example
   * <div role="slider">...</div>
   *
   * expect(screen.getByRole('slider')).toBeAccessibleSlider()
   *
   * @see
   * [jest-a11y/matchers/slider](https://veiko.github.io/jest-a11y/matchers/slider)
   */
  toBeAccessibleSlider(): Promise<CustomMatcherResult>
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `spinbutton`.
   * @summary A `spinbutton` is an input widget that restricts its value to a set or range of discrete values.
   *
   * @example
   * <div role="spinbutton">...</div>
   *
   * expect(screen.getByRole('spinbutton')).toBeAccessibleSpinButton()
   *
   * @see
   * [jest-a11y/matchers/spinbutton](https://veiko.github.io/jest-a11y/matchers/spinbutton)
   */
  toBeAccessibleSpinButton(): Promise<CustomMatcherResult>
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `switch`.
   * @summary A `switch` is an input widget that allows users to choose one of two values: on or off.
   *
   * @example
   * <div role="switch">...</div>
   *
   * expect(screen.getByRole('switch')).toBeAccessibleSwitch()
   *
   * @see
   * [jest-a11y/matchers/switch](https://veiko.github.io/jest-a11y/matchers/switch)
   */
  toBeAccessibleSwitch(): Promise<CustomMatcherResult>
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `toolbar`.
   * @summary A `toolbar` is a container for grouping a set of controls, such as buttons, menubuttons, or checkboxes.
   * @example
   * <div role="toolbar">...</div>
   *
   * expect(screen.getByRole('toolbar')).toBeAccessibleToolbar()
   *
   * @see
   * [jest-a11y/matchers/toolbar](https://veiko.github.io/jest-a11y/matchers/toolbar)
   */
  toBeAccessibleToolbar(): Promise<CustomMatcherResult>
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `tooltip`.
   * @summary A `tooltip` a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
   * @example
   * <div role="tooltip">...</div>
   *
   * expect(screen.getByRole('tooltip')).toBeAccessibleTooltip()
   *
   * @see
   * [jest-a11y/matchers/tooltip](https://veiko.github.io/jest-a11y/matchers/tooltip)
   */
  toBeAccessibleTooltip(): Promise<CustomMatcherResult>
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `tablist`.
   * @summary Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel.
   * @example
   * <div role="tablist">...</div>
   *
   * expect(screen.getByRole('tablist')).toBeAccessibleTabs()
   *
   * @see
   * [jest-a11y/matchers/tablist](https://veiko.github.io/jest-a11y/matchers/tablist)
   */
  toBeAccessibleTabs(): Promise<CustomMatcherResult>
  /** plop-prepend-matcher */
}
