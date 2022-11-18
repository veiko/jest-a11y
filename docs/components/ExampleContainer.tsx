import React from 'react'

export const ExampleContainer = ({ children }) => {
  return (
    <div style={{ alignItems: 'center', background: 'var(--black)', borderRadius: '4px', display: 'flex', justifyContent: 'center', padding: '4em' }}>
      {children}
    </div>
  )
}
