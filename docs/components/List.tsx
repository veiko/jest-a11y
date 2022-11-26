import React from 'react'

export const List = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item, i) => {
        return (
          <li key={`item-${i}`}>
            <div className="li-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--purple)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <div>{item}</div>
          </li>
        )
      })}
    </ul>
  )
}
