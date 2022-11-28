import React, { useContext } from 'react'
import { ExampleContext } from '../ExampleContainer'

/**
 * Breadcrumb
 * ----------
 * This component is closely tied to the jest-a11y documentation ecosystem.
 * It should not be used for production purposes or as a reference for accessibility practices.
 * To see a better reference, check the W3C documentation on breadcrumbs.
 */
export const Breadcrumb = () => {
  const { setExampleText, setTooltip } = useContext(ExampleContext)
  return (
    <nav aria-label="breadcrumb" className="breadcrumb" data-testid="breadcrumb">
      <a
        className="item"
        href="#"
        onFocus={() =>
          setExampleText(
            <>
              <kbd>Tab</kbd> and <kbd>Shift + Tab</kbd> should navigate between the breadcrumb links.
            </>,
          )
        }
      >
        Home
      </a>
      <a
        className="item"
        href="#"
        onKeyDown={e => {
          // If we tab away from the breadcrumbs, we can hide the tooltip
          if (e.key === 'Tab') {
            setTooltip(false)
          }
        }}
      >
        Matchers
      </a>
      <a aria-current="page" className="item" href="#">
        Breadcrumb
      </a>
    </nav>
  )
}
