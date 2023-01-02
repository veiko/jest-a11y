import React from 'react'

type Props = { color: string; size: number }

export const Arrow = ({ color, size = 80 }: Props) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 81.33408546987926 80.76119836334146"
    width={size}
    style={{ color }}
    height={size}
  >
    <g strokeLinecap="round">
      <g transform="translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)">
        <path
          d="M-0.21 -0.98 C-3.22 6.64, -6.94 36.47, -17.05 46.46 C-27.17 56.46, -53.42 56.6, -60.89 58.99 M-1.78 1.12 C-5.03 8.83, -8 37.92, -17.96 47.7 C-27.92 57.47, -54.19 57.94, -61.54 59.78"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        ></path>
      </g>
      <g transform="translate(71.54317543189973 10.981556692346885) rotate(0 -30.8761326969601 29.399042489323847)">
        <path
          d="M-60.87 59.42 L-50.49 52.9 L-46.69 65.8 L-63.12 57.84"
          stroke="none"
          strokeWidth="0"
          fill="currentColor"
          fillRule="evenodd"
        ></path>
        <path
          d="M-62.77 59.88 C-57.48 56.9, -53.19 52.46, -47.97 50.6 M-61.42 59.93 C-58.38 57.75, -55.67 55.81, -49.09 52.02 M-48.77 50.82 C-47.3 55.69, -48.34 58.84, -48.3 63.79 M-49.52 51.04 C-48.67 55.1, -47.62 58.61, -46.64 64.59 M-46.42 64.71 C-53.78 63.64, -56.95 59.71, -60.46 59.34 M-46.85 64.66 C-50.78 63.04, -54.9 61.43, -60.84 60.21 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78 M-61.54 59.78 C-61.54 59.78, -61.54 59.78, -61.54 59.78"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        ></path>
      </g>
    </g>
  </svg>
)