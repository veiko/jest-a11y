import React, { useContext, useEffect, useRef, useState } from 'react'
import { Arrow } from './Arrow'
import { ExampleContext } from './ExampleContainer'

type Props = { color: string; size: number }
export const ArrowPointer = ({ color, size }: Props) => {
  const {
    exampleText = {
      text: null,
      // (
      //   <>
      //     <kbd>Tab</kbd> should focus this item as part of the tab sequence
      //   </>
      // ),
    },
    tooltip,
  } = useContext(ExampleContext)

  const [text, setText] = useState<React.ReactNode>(exampleText.text)

  const arrow = useRef<HTMLDivElement>(null)
  const arrowText = useRef<HTMLDivElement>(null)
  // keep a mirror of the element so we can measure it
  const mirrorText = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const newHeight = mirrorText.current?.getBoundingClientRect()?.height || 0
    const el = arrowText.current

    if (el) {
      el.classList.add('fade-in')
      arrow.current?.classList.add('fade-in')
      el.style.transform = `scale(1.5)`
      el.style.transition = 'ease-out 640ms max-height'
      requestAnimationFrame(() => {
        el.classList.remove('fade-in')
        arrow.current?.classList.remove('fade-in')
        el.style.maxHeight = `${newHeight}px`
        el.style.transition = ''
        el.style.transform = ''
      })
      setText(exampleText.text)
    }
  })

  return tooltip && exampleText.text ? (
    // @ts-ignore
    <div className="arrow-pointer" style={{ transform: `translateY(${exampleText.transformY}px)` }}>
      <div className="arrow-text" key="my-arrow-text" ref={arrowText}>
        <div>{text}</div>
      </div>
      <div className="arrow-text" ref={mirrorText} style={{ visibility: 'hidden' }}>
        {exampleText.text}
      </div>
      <div className="arrow-wrapper" ref={arrow}>
        <Arrow color={color} size={size} />
      </div>
      <div></div>
    </div>
  ) : null
}
