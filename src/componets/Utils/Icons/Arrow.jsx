import * as React from "react"
const Arrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#151D48"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3.997 6 3.51 4 3.51-4"
    />
  </svg>
)
export default Arrow
