import React, { useEffect } from 'react'
import useDateTransitions from '@/shared/hooks/useDateTransitions'
import { DayChecker } from '@/features/progress/ui/DayRowChecker'

type DayCountViewProps = {
  authDate: number
  dayCount: number
  isDaysDropped: boolean
  onShowEnd: () => void
}

const DayCountView = ({
  dayCount,
  isDaysDropped,
  authDate,
  onShowEnd,
}: DayCountViewProps) => {
  const { currentDay, previousDay, nextDay } = useDateTransitions({
    dateUnix: authDate,
  })

  useEffect(() => {
    setTimeout(() => onShowEnd(), 5000)
  }, [])

  return (
    <div className="bg-black absolute h-[100vh] w-full">
      <div className="flex flex-col mt-[75px] w-full items-center justify-between h-[65vh]">
        <DayChecker checked={!isDaysDropped} day={previousDay} />
        <div className="flex flex-col gap-3 items-center">
          <p className="text-[100px] leading-[112px] font-bold animate-pulse">
            {dayCount}
          </p>
          <p className="text-[24px] tracking-tighter font-bold">Day check-in</p>
          <DayChecker
            day={currentDay}
            checked
            size={40}
            iconSize={16}
            withDay={false}
          />
        </div>
        <DayChecker day={nextDay} />
      </div>
      <p className="absolute bottom-[75px] text-center text-sm tracking-tighter w-[60%] left-0 right-0 mr-auto ml-auto">
        Checks are your best friend. Keep them for a bonus week of activity
      </p>
    </div>
  )
}

export default DayCountView
