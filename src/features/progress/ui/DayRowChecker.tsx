import React from 'react'
import { TickIcon } from '@/shared/ui/icons'
import { cn } from '@/shared/lib/utils/cn'

type DayCheckerProps = {
  day: string
  checked?: boolean
  size?: number
  iconSize?: number
  withDay?: boolean
}

export const DayChecker = ({
  checked = false,
  size = 20,
  iconSize = 8,
  withDay = true,
  day,
}: DayCheckerProps) => {
  const color = checked
    ? 'text-white border-white'
    : 'text-[#565656] border-[#565656]'
  return (
    <div className="flex flex-col gap-4 items-center">
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className={cn(`rounded-full border-2 grid place-items-center`, color)}
      >
        {checked && (
          <TickIcon
            sizeX={`${iconSize}px`}
            sizeY={`${iconSize}px`}
            color="white"
          />
        )}
      </div>
      {withDay && (
        <p
          className={cn('text-2xl leading-6 uppercase tracking-tighter', color)}
        >
          {day}
        </p>
      )}
    </div>
  )
}
