import React from 'react'
import { IIcon } from '@/shared/types'

const TickIcon = ({ className, sizeX, sizeY, color = 'white' }: IIcon) => {
  return (
    <svg
      width={sizeX}
      height={sizeY}
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.5 4.28571L3.3 6L7.5 2"
        stroke={color}
        stroke-width="1.33333"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default TickIcon
