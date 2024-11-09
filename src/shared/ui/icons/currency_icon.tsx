import React from 'react'
import { IIcon } from '@/shared/types'

const CurrencyIcon = ({ className, sizeX, sizeY, color = 'white' }: IIcon) => {
  return (
    <svg
      width={sizeX}
      height={sizeY}
      viewBox="0 0 26 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.07936 2.63385L25.1543 0L21.4842 6.29808L15.153 7.242L1.77863 9.12352L5.07936 2.63385Z"
        fill={color}
      />
      <path
        d="M3.52209 10.5318L22.5977 7.89551L19.7471 14.0897C16.764 14.5083 14.301 14.8539 11.9454 15.1844C8.36549 15.6867 5.03336 16.1542 0.5 16.7903L3.52209 10.5318Z"
        fill={color}
      />
      <path
        d="M11.7086 15.2044L19.2531 14.1541L19.746 14.0898L4.97852 28L11.7086 15.2044Z"
        fill={color}
      />
    </svg>
  )
}

export default CurrencyIcon
