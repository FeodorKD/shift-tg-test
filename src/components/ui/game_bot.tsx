'use client'

import React, { useEffect } from 'react'
import { CurrencyIcon } from '@/components/icons'
import { UserSessionDataType } from '@/types/user'
import { Button } from '@/components/ui/button'
import LineBar from '@/components/ui/minimal_line'
import { CloseButton } from '@/components/ui/close_button'
import { useGameBot } from '@/hooks/useGameBot'
import { Spinner } from '@/components/ui/spinner'
import { initPopup } from '@telegram-apps/sdk'

type GameBotProps = {
  userData: UserSessionDataType
}

export const GameBot = ({ userData }: GameBotProps) => {
  const { gamebot_reward, gamebot_worked_minutes, status } = userData

  const popup = initPopup()
  const {
    isGameBotClaimLoading,
    onClaimGamebotReward,
    onDropGamebotReward,
    isGameBotAvailable,
    changeGamebotState,
    isGameBotOpened,
  } = useGameBot()

  const onGameBotClose = () => {
    if (popup.isOpened) {
      return
    }

    popup
      .open({
        title: 'GameBot Close',
        message: 'leaving the gamebot you will lose your progress',
        buttons: [
          { id: 'confirm-button', type: 'ok' },
          { id: 'cancel-button', type: 'cancel' },
        ],
      })
      .then((buttonId) => {
        if (buttonId === 'confirm-button') {
          onDropGamebotReward(userData.id).then(() => {})
        }
      })
  }

  useEffect(() => {
    if (gamebot_reward && isGameBotAvailable) {
      changeGamebotState(true)
    }
  }, [gamebot_reward, isGameBotAvailable])

  if (!isGameBotOpened) return null

  const getAvailableTime = () => {
    if (!status.gamebot) return 0
    const minutesPerDay = status.gamebot * 60
    const availableTime = minutesPerDay - gamebot_worked_minutes
    if (availableTime <= 0) return 'Time out'
    if (availableTime / 60 > 1) {
      return `${Math.ceil(availableTime / 60)}h left `
    } else {
      return `${availableTime}m left`
    }
  }

  const onClaimClick = () => {
    if (isGameBotClaimLoading) return
    onClaimGamebotReward(userData.id).then(() => {})
  }

  return (
    <div className="flex flex-col gap-8 items-center px-4 pt-[32px] pb-[50px] absolute bottom-0 bg-[#1D1D20] rounded-t-2xl w-full z-50">
      <button className="absolute top-4 right-4" onClick={onGameBotClose}>
        <CloseButton />
      </button>
      <p className="text-2xl font-bold">Gamebot</p>
      <div className="flex gap-4 justify-between w-full max-w-[600px]">
        <div className="flex flex-col flex-1 p-4 pt-6 border-[#D2FF77] border rounded-2xl gap-3 justify-between">
          <div>
            <div className="flex items-center gap-1">
              <CurrencyIcon sizeX="24px" sizeY="24px" />
              <p className="font-bold text-[18px] tracking-tighter">
                {gamebot_reward.toLocaleString('en-US', {})}
              </p>
            </div>
            <p className="tracking-tighter text-[12px] leading-4">
              The gamebot worked <br /> while you were away
            </p>
          </div>
          <Button
            onClick={onClaimClick}
            className="mt-auto"
            text={isGameBotClaimLoading ? <Spinner /> : 'Claim'}
            disabled={gamebot_reward <= 0}
          />
        </div>
        <div className="flex flex-col flex-1 p-4 pt-6 border-[#D2FF77] border rounded-2xl gap-3 justify-between">
          <p className="font-bold text-[18px] tracking-tighter">
            {getAvailableTime()}
          </p>
          <p className="tracking-tighter text-[12px] leading-4">
            Runtime depends on your level
          </p>
          {status.gamebot && (
            <LineBar
              maxTime={status.gamebot * 60}
              workedTime={gamebot_worked_minutes}
            />
          )}
        </div>
      </div>
    </div>
  )
}
