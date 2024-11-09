'use client'

import React from 'react'
import { TonConnectButton } from '@tonconnect/ui-react'
import { useTon } from '@/features/ton/hooks/useTon'
import { UserSessionDataType } from '@/features/user/types'
import { AvatarCircle } from '@/features/skins/ui/AvatarCircle'
import { CurrencyIcon } from '@/shared/ui/icons'
import CircularProgress from '@/features/progress/ui/ProgressCircular'
import { GameBot } from '@/features/gamebot/ui/GameBot'
import { PlayToEarn } from '@/features/progress/ui/PlayToEarn'

type HomeViewProps = {
  userData: UserSessionDataType
  onProgressViewSwitch: (val: boolean) => void
}

export const HomeView = ({ userData, onProgressViewSwitch }: HomeViewProps) => {
  const { score, status } = userData
  const { onSendTransaction } = useTon()

  return (
    <div className="flex flex-col w-full items-center pt-8 pb-4">
      <AvatarCircle user={userData} />
      <div className="flex flex-col gap-3 items-center">
        <div className="flex gap-1 mt-3 items-center">
          <CurrencyIcon
            sizeX="34px"
            sizeY="34px"
            color="white"
            className="relative top-[1px]"
          />
          <p className="text-[32px] leading-8 text-center break-all w-full">
            {score.toLocaleString('en-US', {})}
          </p>
        </div>
        <p className="text-xl mb-4">In-game balance</p>
        <div
          onClick={() => onProgressViewSwitch(true)}
          className="w-fit h-[32px] bg-[#1B1B1B] rounded-[20px] flex items-center justify-center p-1 pr-3 font-normal gap-[6px]"
        >
          <CircularProgress
            progress={Math.ceil(score / status.points_to_next_level)}
          />
          <p className="text-[13px]">{status.status_name}</p>
        </div>
      </div>
      <TonConnectButton style={{ marginTop: 50 }} />
      <GameBot userData={userData} />
      <PlayToEarn />
    </div>
  )
}
