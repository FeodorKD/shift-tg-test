import React from 'react'
import { IIcon } from '@/types'

export const TgIcon = ({ color = '#0098EA', sizeX, sizeY }: IIcon) => {
  return (
    <svg
      width={sizeX ?? '33'}
      height={sizeY ?? '32'}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_10768_3649)">
        <path
          d="M16.5 32C25.3366 32 32.5 24.8366 32.5 16C32.5 7.16343 25.3366 0 16.5 0C7.66343 0 0.5 7.16343 0.5 16C0.5 24.8366 7.66343 32 16.5 32Z"
          fill={color}
        />
        <path
          d="M21.963 8.93018H11.0363C9.0273 8.93018 7.75393 11.0973 8.76467 12.8493L15.5082 24.5377C15.9483 25.3009 17.0511 25.3009 17.4911 24.5377L24.236 12.8493C25.2454 11.1001 23.972 8.93018 21.9644 8.93018H21.963ZM15.5027 21.0325L14.0341 18.1902L10.4904 11.8523C10.2567 11.4466 10.5454 10.9268 11.035 10.9268H15.5014V21.0339L15.5027 21.0325ZM22.5062 11.8509L18.9639 18.1915L17.4952 21.0325V10.9254H21.9616C22.4512 10.9254 22.7399 11.4453 22.5062 11.8509Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_10768_3649">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
