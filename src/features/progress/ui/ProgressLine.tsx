import React from 'react'
import { InfinityIcon } from '@/shared/ui/icons/'

type XPProgressBarProps = {
  currentXP: number
  goalXP: number
  isInfiniteEnd?: boolean
}

const XPProgressBar = ({
  currentXP,
  goalXP,
  isInfiniteEnd = false,
}: XPProgressBarProps) => {
  const percentage = (currentXP / goalXP) * 100

  return (
    <div className="w-full mx-auto">
      <div className="relative h-2 rounded-full bg-[#2E2E2E]">
        <div
          className="absolute h-2 rounded-full bg-white"
          style={{ width: `${percentage > 100 ? 100 : percentage}%` }}
        ></div>
      </div>
      <div className="flex items-center justify-between mt-4 text-gray-400">
        <span className="text-[12px] text-secondary">{currentXP} XP</span>
        <span className="text-[12px] text-primary">
          {isInfiniteEnd ? (
            <InfinityIcon sizeX="16px" sizeY="9px" />
          ) : (
            `Up to ${goalXP.toLocaleString('en-US')} XP`
          )}
        </span>
      </div>
    </div>
  )
}

export default XPProgressBar
