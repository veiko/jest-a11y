interface JestA11yMatchers<CustomMatcherResult = unknown> {
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `alert`.
   *
   * @example
   * <div role="alert">...</div>
   *
   * expect(screen.getByRole('alert')).toBeAccessibleAlert()
   *
   * @see https://veiko.github.io/jest-a11y/matchers/alert
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
   * @see https://veiko.github.io/jest-a11y/matchers/alertdialog
   */
  toBeAccessibleAlertDialog(): CustomMatcherResult
  /**
   * Assert whether an element has the correct keyboard interaction, label and role for a button.
   *
   * @example
   * <button id="targetBtn" />
   *
   * expect(screen.getByRole('button')).toBeAccessibleButton()
   */
  toBeAccessibleButton(): CustomMatcherResult
  /**
   * Assert whether an element has the correct keyboard interaction, label and role for a checkbox.
   *
   * @example
   * <input aria-label="My Checkbox" type="checkbox" />
   *
   * expect(screen.getByRole('checkbox')).toBeAccessibleCheckbox()
   */
  toBeAccessibleCheckbox(): CustomMatcherResult
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `link`.
   *
   * @example
   * <a href="">...</a>
   *
   * expect(screen.getByRole('link')).toBeAccessibleLink()
   *
   * @see https://veiko.github.io/jest-a11y/matchers/link
   */
  toBeAccessibleLink(): CustomMatcherResult
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `meter`.
   * @summary A `meter` is a graphical display of a numeric value that varies within a defined range.
   *
   * @example
   * <div role="meter">...</div>
   *
   * expect(screen.getByRole('meter')).toBeAccessibleMeter()
   * @see https://veiko.github.io/jest-a11y/matchers/meter
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
   * @see https://veiko.github.io/jest-a11y/matchers/radiogroup
   */
  toBeAccessibleRadioGroup(): CustomMatcherResult
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `slider`.
   * @summary A `slider` is an input where the user selects a value from within a given range.
   *
   * @example
   * <div role="slider">...</div>
   *
   * expect(screen.getByRole('slider')).toBeAccessibleSlider()
   * @see https://veiko.github.io/jest-a11y/matchers/slider
   */
  toBeAccessibleSlider(): CustomMatcherResult
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `spinbutton`.
   * @summary A `spinbutton` is an input widget that restricts its value to a set or range of discrete values.
   *
   * @example
   * <div role="spinbutton">...</div>
   *
   * expect(screen.getByRole('spinbutton')).toBeAccessibleSpinButton()
   * @see https://veiko.github.io/jest-a11y/matchers/spinbutton
   */
  toBeAccessibleSpinButton(): CustomMatcherResult
  /**
   * Assert whether an element has the correct role, properties and keyboard interactions for `switch`.
   * @summary A `switch` is an input widget that allows users to choose one of two values: on or off.
   *
   * @example
   * <div role="switch">...</div>
   *
   * expect(screen.getByRole('switch')).toBeAccessibleSwitch()
   * @see https://veiko.github.io/jest-a11y/matchers/slider
   */
  toBeAccessibleSwitch(): CustomMatcherResult
  /** plop-prepend-matcher */
}

declare global {
  namespace jest {
    interface Expect extends JestA11yMatchers {}
    interface Matchers<R> extends JestA11yMatchers<R> {}
    interface InverseAsymmetricMatchers extends JestA11yMatchers {}
  }
}

export {}
