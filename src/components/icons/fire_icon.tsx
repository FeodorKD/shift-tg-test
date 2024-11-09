import React from 'react'
import { IIcon } from '@/types'

const FireIcon = ({ className, sizeX, sizeY, color = 'white' }: IIcon) => {
  return (
    <svg
      className={className}
      width={sizeX}
      height={sizeY}
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_8031_3894)">
        <path
          d="M5.10942 -1.15018e-05C5.34482 0.0933851 5.55678 0.253882 5.75395 0.410145C5.76458 0.418516 5.77521 0.426887 5.78616 0.435512C6.0685 0.660081 6.3245 0.917899 6.5352 1.21093C6.54328 1.22205 6.55137 1.23318 6.55971 1.24465C6.84348 1.63924 7.04045 2.08179 7.1663 2.55004C7.1708 2.5666 7.1753 2.58316 7.17994 2.60023C7.26401 2.93175 7.28577 3.25793 7.28105 3.59862C7.28075 3.63636 7.28048 3.6741 7.28024 3.71184C7.27961 3.80269 7.27861 3.89352 7.27738 3.98436C7.36308 3.88999 7.44674 3.79662 7.51908 3.69139C7.52622 3.68105 7.53335 3.6707 7.5407 3.66004C7.6112 3.55584 7.67368 3.4468 7.73392 3.3364C7.79464 3.22861 7.85871 3.14605 7.98051 3.10546C8.09884 3.09386 8.17701 3.1181 8.27348 3.18358C8.40076 3.29091 8.50266 3.42466 8.60551 3.55468C8.62147 3.57444 8.63743 3.5942 8.65388 3.61457C9.30271 4.42724 9.55316 5.48241 9.45504 6.50733C9.44339 6.60483 9.42617 6.70073 9.40629 6.79686C9.40304 6.81339 9.39979 6.82991 9.39645 6.84693C9.2485 7.58532 8.88309 8.25974 8.36001 8.79917C8.33344 8.82669 8.30734 8.85467 8.28126 8.88266C7.64562 9.54807 6.6734 9.97921 5.75559 10.0056C5.67447 10.0072 5.59338 10.0075 5.51225 10.0073C5.49513 10.0073 5.47802 10.0073 5.46038 10.0073C4.44601 10.0044 3.48943 9.6158 2.7555 8.91429C2.73634 8.896 2.71707 8.87781 2.69771 8.85974C2.34726 8.53216 2.08909 8.12755 1.88676 7.6953C1.87656 7.67398 1.86637 7.65265 1.85586 7.63068C1.62735 7.12844 1.53074 6.58724 1.53031 6.03881C1.5303 6.02364 1.53029 6.00847 1.53027 5.99285C1.53061 5.74875 1.54318 5.51294 1.59379 5.27343C1.59704 5.25764 1.60029 5.24185 1.60363 5.22559C1.82616 4.17559 2.43334 3.38691 3.26509 2.74276C3.27924 2.73179 3.29339 2.72083 3.30797 2.70953C3.33803 2.68627 3.36811 2.66304 3.39821 2.63983C4.10483 2.0934 4.54002 1.31423 4.66264 0.430897C4.66526 0.409255 4.66789 0.387614 4.67059 0.365317C4.68982 0.217777 4.72113 0.14492 4.81645 0.0317268C4.91616 -0.0222837 4.99903 -0.0231561 5.10942 -1.15018e-05Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_8031_3894">
          <rect
            width="10"
            height="10"
            fill={color}
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default FireIcon
