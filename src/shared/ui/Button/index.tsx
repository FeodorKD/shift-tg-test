import React from 'react'
import { cn } from '@/shared/lib/utils/cn'

type ButtonProps = {
  text: string | JSX.Element
  onClick?: (e: any) => void
  className?: string
  disabled?: boolean
}

export const Button = ({ text, onClick, className, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'bg-white rounded-2xl px-[11px] py-[10px] text-black min-w-[65px] leading-none',
        disabled ? 'bg-[#2E2E2E] text-secondary' : '',
        className
      )}
    >
      {text}
    </button>
  )
}
