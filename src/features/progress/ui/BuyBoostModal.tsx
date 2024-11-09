import React, { useMemo } from 'react'
import { TgIcon } from '@/shared/ui/icons/tg_icon'
import { Button } from '@/shared/ui/Button'
import { useTon } from '@/features/ton/hooks/useTon'
import { UserStatusType } from '@/features/user/types'
import { BuyType } from '@/features/skins/types'
import { CloseButton } from '@/shared/ui/CloseTrigger'
import { CurrencyIcon } from '@/shared/ui/icons'
import { cn } from '@/shared/lib/utils/cn'

type BuyBoostModalProps = {
  level: UserStatusType
  selectedTab: BuyType
  setModalState: (type: BuyType) => void
  isBuyLoading: boolean
  onXPBuy: () => void
  onTonBuy: () => void
  onClose: () => void
}

export const BuyBoostModal = ({
  level,
  setModalState,
  selectedTab,
  isBuyLoading,
  onXPBuy,
  onTonBuy,
  onClose,
}: BuyBoostModalProps) => {
  const { isConnectedWallet } = useTon()

  const buttonProps = useMemo(() => {
    if (selectedTab === 'ton') {
      return {
        text: !isConnectedWallet
          ? 'Connect wallet'
          : isBuyLoading
            ? 'Loading...'
            : 'Boost with wallet',
        className: 'bg-[#0098EA] text-white',
        onClick: onTonBuy,
      }
    } else {
      return {
        text: isBuyLoading ? 'Loading...' : 'Upgrade for XP',
        className: '',
        onClick: onXPBuy,
      }
    }
  }, [selectedTab, isBuyLoading, isConnectedWallet])

  return (
    <>
      <div className="w-screen h-screen bg-black opacity-70 z-10 fixed top-0 left-0" />
      <div className="flex flex-col px-4 py-8 fixed bottom-0 w-full bg-[#1C1C1C] rounded-t-2xl left-0 gap-6 z-20">
        <div className="absolute right-5 top-5" onClick={onClose}>
          <CloseButton />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="tracking-tighter font-bold text-[22px]">
            {level.status_name}
          </p>
          <p className="tracking-tighter text-[14px] max-w-[75%] text-center">
            You get access to the second level of the game
          </p>
        </div>

        <div className="flex gap-3 justify-between">
          <div
            onClick={() => setModalState('xp')}
            className={cn(
              'p-4 flex flex-col gap-3 bg-[#2E2E2E] rounded-2xl grow',
              selectedTab === 'xp' ? 'border-2 border-white' : ''
            )}
          >
            <CurrencyIcon sizeX="32px" sizeY="32px" />
            <div className="flex flex-col gap-[6px]">
              <p className="tracking-tighter text-[12px]">Upgrade for</p>
              <p>{`${level.xp_to_upgrade.toLocaleString('en-US', {})} XP`} </p>
            </div>
          </div>

          <div
            onClick={() => setModalState('ton')}
            className={cn(
              'p-4 flex flex-col gap-3 bg-[#2E2E2E] rounded-2xl grow',
              selectedTab === 'ton' ? 'border-2 border-white' : ''
            )}
          >
            <TgIcon />
            <div className="flex flex-col gap-[6px]">
              <p className="tracking-tighter text-[12px]">Don`t waste points</p>
              <p>{`${level.ton_to_upgrade.toLocaleString()} TON`} </p>
            </div>
          </div>
        </div>
        <Button
          text={buttonProps.text}
          className={cn('w-full', buttonProps.className)}
          onClick={() => buttonProps.onClick()}
        />
      </div>
    </>
  )
}
