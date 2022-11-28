import React, { useContext, useEffect, useRef } from 'react'
import { Arrow } from './Arrow'
import { ExampleContext } from './ExampleContainer'

export const ArrowPointer = ({ color, size }) => {
  const {
    exampleText = {
      text: (
        <>
          <kbd>Tab</kbd> should focus this item as part of the tab sequence
        </>
      ),
    },
    tooltip,
  } = useContext(ExampleContext)

  const arrowText = useRef<HTMLDivElement>(null)
  // keep a mirror of the element so we can measure it
  const mirrorText = useRef<HTMLDivElement>(null)
  const [height, setHeight] = React.useState(0)

  useEffect(() => {
    const newHeight = mirrorText.current?.getBoundingClientRect()?.height || 0

    // @see https://www.joshwcomeau.com/react/animating-the-unanimatable/#playing
    requestAnimationFrame(() => {
      arrowText.current!.style.maxHeight = `${height}px`
      arrowText.current!.style.transition = 'none'

      requestAnimationFrame(() => {
        arrowText.current!.style.cssText = `max-height: ${newHeight}px; transition: ease-in-out 360ms max-height 0s;`
      })
    })
    setHeight(newHeight)
  }, [exampleText.text])

  return tooltip ? (
    // @ts-ignore
    <div className="arrow-pointer" style={{ transform: `translateY(${exampleText.transformY}px)` }}>
      <div className="arrow-text" key="my-arrow-text" ref={arrowText}>
        {exampleText.text}
      </div>
      <div className="arrow-text" ref={mirrorText} style={{ visibility: 'hidden' }}>
        {exampleText.text}
      </div>
      <div>
        <Arrow color={color} size={size} />
      </div>
      <div></div>
    </div>
  ) : null
}
