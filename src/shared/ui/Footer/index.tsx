import React from 'react'
import { FOOTER_SECTIONS } from '@/entities/layout/model/constants'
import useTabs from '@/features/tabs/hooks/useTabs'
import { cn } from '@/shared/lib/utils/cn'

type FooterProps = {
  bottomOffset?: number
}

export const Footer: React.FC<FooterProps> = ({ bottomOffset = 34 }) => {
  const { changeActiveTab, isActiveTab } = useTabs()

  return (
    <div
      className={cn(
        'flex items-center justify-between',
        `mb-[${bottomOffset}px]`
      )}
    >
      {FOOTER_SECTIONS.map(({ icon: IconComponent, text, key }) => {
        const isSelected = isActiveTab(key)
        const colorText = isSelected ? 'text-primary' : 'text-secondary'
        const colorIcon = isSelected ? 'fill-primary' : 'fill-secondary'

        return (
          <div
            className="flex flex-col items-center gap-[2px] flex-1"
            key={text}
            onClick={() => changeActiveTab(key)}
          >
            <IconComponent sizeX="20px" sizeY="21px" color={colorIcon} />
            <p
              className={cn('text-[9px] leading-[9px] font-normal', colorText)}
            >
              {text}
            </p>
          </div>
        )
      })}
    </div>
  )
}
