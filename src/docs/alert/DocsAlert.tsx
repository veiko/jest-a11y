import React, { useContext, useEffect } from 'react'
import { ExampleContext } from '../ExampleContainer'

export const Alert = () => {
  const { setTooltip } = useContext(ExampleContext)

  useEffect(() => setTooltip(false), [setTooltip])

  return (
    <>
      <div className="alert" data-testid="an-alert" role="alert">
        hey, listen!
      </div>
    </>
  )
}
