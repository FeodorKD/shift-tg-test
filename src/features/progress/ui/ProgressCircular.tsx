import React from 'react'
import { FireIcon } from '@/shared/ui/icons'

type ProgressCircularProps = {
  progress: number
}

const CircularProgress = ({ progress }: ProgressCircularProps) => {
  const circleRadius = 30
  const circleCircumference = 2 * Math.PI * circleRadius
  const progressOffset =
    circleCircumference - (progress / 100) * circleCircumference

  return (
    <div className="relative w-6 h-6">
      <svg
        className="transform -rotate-90"
        width="100%"
        height="100%"
        viewBox="0 0 80 80"
      >
        <circle
          cx="40"
          cy="40"
          r={circleRadius}
          fill="none"
          stroke="#565656"
          strokeWidth="8"
        />
        <circle
          cx="40"
          cy="40"
          r={circleRadius}
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circleCircumference}
          strokeDashoffset={progressOffset}
          className="text-white transition-all duration-300"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white">
        <FireIcon sizeX="10px" sizeY="10px" />
      </div>
    </div>
  )
}

export default CircularProgress
