import React from 'react'
import { Button } from '@/components/ui/button'

type ErrorViewProps = {
  onButtonClick: () => void
}

export const ErrorView = ({ onButtonClick }: ErrorViewProps) => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-3 text-center">
      <p className="text-2xl text-primary">
        Too many shifters <br /> trying to play game
      </p>
      <p className="text-[14px] text-secondary">Come back later or try again</p>
      <Button text="Reload" onClick={onButtonClick} />
    </div>
  )
}
