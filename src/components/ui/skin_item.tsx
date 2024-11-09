'use client'

import React, { useMemo } from 'react'
import { EnergyIcon } from '@/components/icons'
import { cn } from '@/lib/utils'
import { Skin } from '@/types/skins'
import { UserInitDataType } from '@/types/user'
import { DEFAULT_SKIN, DEFAULT_SKIN_UUID } from '@/constants'

type SkinItemProps = {
  skin: Skin
  activeId: string
  user: UserInitDataType
  onSelect: (skin: Skin) => void
  onSkinSwitch: (skinId: string) => void
  iSwitchLoading: boolean
}

export const SkinItem = ({
  activeId,
  skin,
  user,
  onSelect,
  onSkinSwitch,
  iSwitchLoading,
}: SkinItemProps) => {
  const skinButtonProps = useMemo(() => {
    if (!user) return
    if (skin.owned) {
      if (activeId === null && skin.id === DEFAULT_SKIN.id) {
        return {
          text: 'Now',
          className: 'bg-white text-black',
          disabled: true,
          onClick: () => {},
        }
      }

      if (activeId === skin.id)
        return {
          text: 'Now',
          className: 'bg-[#2E2E2E] text-secondary',
          disabled: true,
          onClick: () => {},
        }

      return {
        text: 'Switch',
        className: 'bg-white text-black',
        disabled: false,
        onClick: () => {
          if (iSwitchLoading) return
          const id = skin.id === DEFAULT_SKIN.id ? DEFAULT_SKIN_UUID : skin.id
          onSkinSwitch(id)
        },
      }
    } else {
      if (skin.open_from <= user?.max_score) {
        return {
          text: 'Buy',
          className: 'bg-white text-black',
          disabled: false,
          onClick: () => onSelect(skin),
        }
      }

      return {
        text: 'Locked',
        className: 'bg-[#2E2E2E] text-secondary',
        disabled: true,
        onClick: () => {},
      }
    }
  }, [user, skin, activeId, iSwitchLoading])

  return (
    <div
      className="rounded-3xl bg-[#1C1C1C] p-5 w-full flex justify-between"
      key={skin.id}
    >
      <div className="flex gap-4 items-center">
        <div className="hex grid place-items-center bg-[#2E2E2E] w-[44px] h-[44px]">
          <EnergyIcon />
        </div>
        <div className="flex flex-col gap-[6px]">
          <p className="text-[15px] tracking-tighter">{skin.name}</p>
          {!skin.owned && (
            <p
              className="text-[12px] text-secondary boost-text"
              dangerouslySetInnerHTML={{
                __html: `Skin for <b>${skin.open_from.toLocaleString('en-US')}</b> XP`,
              }}
            />
          )}
        </div>
      </div>
      <button
        disabled={skinButtonProps?.disabled}
        className={cn(
          'text-[11px] tracking-tighter rounded-2xl p-[7px] grid place-items-center min-w-[40px] self-center',
          skinButtonProps?.className,
          iSwitchLoading ? 'opacity-50' : ''
        )}
        onClick={skinButtonProps?.onClick}
      >
        {skinButtonProps?.text}
      </button>
    </div>
  )
}
