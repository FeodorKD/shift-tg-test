import React from 'react'
import { cn } from '@/lib/utils'

type ProgressQuestProps = {
  completed: number
  total: number
  validTill: string
  color?: string
}

export const ProgressQuest = ({
  total,
  completed,
  validTill,
  color = 'bg-[#2E2E2E]',
}: ProgressQuestProps) => {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex gap-1 justify-between w-full">
        {new Array(total).fill(0).map((_, i) => (
          <div
            key={i}
            className={cn(
              'rounded-[10px] bg-[#2E2E2E] h-2 grow',
              completed >= i + 1 ? 'bg-white' : color
            )}
          />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <p className="tracking-tighter text-[12px] leading-none text-secondary">{`Completed ${completed} of ${total}`}</p>
        <p className="tracking-tighter text-[12px] leading-none text-primary">
          {validTill}
        </p>
      </div>
    </div>
  )
}
