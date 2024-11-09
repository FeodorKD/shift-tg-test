import React from 'react'

type MinimalLineProps = {
  workedTime: number
  maxTime: number
  isInfiniteEnd?: boolean
}

const LineBar = ({ workedTime, maxTime }: MinimalLineProps) => {
  const percentage = (workedTime / maxTime) * 100

  return (
    <div className="w-full mx-auto">
      <div className="relative h-2 rounded-full bg-[#2E2E2E]">
        <div
          className="absolute h-2 rounded-full bg-[#D2FF77]"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

export default LineBar
