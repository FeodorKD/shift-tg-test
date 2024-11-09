import React, { useMemo } from 'react'
import { Subtask } from '@/types/quests'
import { Button } from '@/components/ui/button'
import { cn, getTaskType } from '@/lib/utils'
import { QUESTS_TYPES } from '@/constants'
import { XIcon } from '@/components/icons/x_icon'
import { TelegramIcon } from '@/components/icons/telegram_icon'
import { Spinner } from '@/components/ui/spinner'

import { TickIcon } from '@/components/icons'

export const SubtaskItem = ({
  subtask,
  onComplete,
  onClaim,
  isLoading,
}: {
  subtask: Subtask
  onComplete: (subtaskId: string) => void
  onClaim: (subtaskId: string) => void
  isLoading: boolean
}) => {
  const text = useMemo(() => {
    const type = getTaskType(subtask.link)
    switch (type) {
      case QUESTS_TYPES.x: {
        return (
          <p className="text-xs leading-none tracking-tighter">
            {`+${subtask.reward} XP `}
            <span className="text-secondary">for following</span>
          </p>
        )
      }
      case QUESTS_TYPES.telegram: {
        return `+${subtask.reward} XP`
      }
      default:
        return `+${subtask.reward} for action`
    }
  }, [subtask])

  const icon = useMemo(() => {
    const type = getTaskType(subtask.link)
    switch (type) {
      case QUESTS_TYPES.x: {
        return <XIcon />
      }
      case QUESTS_TYPES.telegram: {
        return <TelegramIcon />
      }
      default:
        return null
    }
  }, [subtask])

  const buttonText = useMemo(() => {
    if (isLoading) return <Spinner />
    if (subtask.reward_claimed)
      return <TickIcon sizeX="12px" sizeY="12px" color="#565656" />
    if (subtask.completed) return 'Claim'

    const type = getTaskType(subtask.link)
    switch (type) {
      case QUESTS_TYPES.x: {
        return 'Follow'
      }
      case QUESTS_TYPES.telegram: {
        return 'Join'
      }
      default:
        return 'Go to'
    }
  }, [subtask, isLoading])

  return (
    <div className="w-full flex gap-4 items-start">
      <div className="rounded-full h-[36px] w-[36px] bg-[#2E2E2E] grid place-items-center">
        {icon}
      </div>

      <div className="flex justify-between grow pb-4 border-b border-[#2E2E2E] border-opacity-60">
        <div className="flex flex-col gap-1 grow tracking-tighter">
          <p className="text-[15px] leading-none">{subtask.name}</p>
          {text}
        </div>

        <Button
          text={buttonText}
          className={cn(
            'text-xs leading-none h-fit self-center',
            isLoading
              ? 'max-w-[38px] max-h-[32px] p-0 min-w-[38px] min-h-[32px]'
              : '',
            subtask.reward_claimed
              ? 'w-[32px] h-[32px] p-0 min-w-[32px] grid place-items-center bg-[#2E2E2E]'
              : ''
          )}
          onClick={() => {
            if (!subtask.completed) {
              onComplete(subtask.id)
              return
            } else {
              onClaim(subtask.id)
              return
            }
          }}
        />
      </div>
    </div>
  )
}
