import React from 'react'

type Props = { color: string; size: number }

export const ArrowYellow = ({ color, size = 80 }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="47" height="24" fill="none" viewBox="0 0 47 24">
    <path
      fill="#fd3"
      d="M.94 10.94a1.5 1.5 0 000 2.12l9.545 9.547a1.5 1.5 0 102.122-2.122L4.12 12l8.486-8.485a1.5 1.5 0 10-2.122-2.122L.94 10.94zM2 13.5h33v-3H2v3z"
    ></path>
    <path
      stroke="#fd3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3"
      d="M30 12h10.5a5 5 0 005-5V1.5"
    ></path>
  </svg>
)
