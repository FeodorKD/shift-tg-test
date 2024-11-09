import React from 'react'
import { IIcon } from '@/shared/types'

const BlinkIcon = ({ className, sizeX, sizeY, color = 'white' }: IIcon) => {
  return (
    <svg
      width={sizeX}
      height={sizeY}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9 0L12.0172 5.48278L17.5 8.5L12.0172 11.5172L9 17L5.98278 11.5172L0.5 8.5L5.98278 5.48278L9 0Z"
        className={color}
      />
    </svg>
  )
}

export default BlinkIcon
