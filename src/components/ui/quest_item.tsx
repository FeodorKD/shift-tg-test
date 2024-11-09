import React, { useMemo } from 'react'
import { CurrencyIcon, TickIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { ProgressQuest } from '@/components/ui/progress_quest'
import { Quest } from '@/types/quests'
import { cn, getDaysLeft } from '@/lib/utils'
import { Spinner } from '@/components/ui/spinner'

export const QuestItem = ({
  quest,
  variant = 'default',
  onSelect = () => {},
  onClaimQuest = () => {},
  isClaimQuestLoading = false,
}: {
  quest: Quest
  onSelect?: (quest: Quest) => void
  variant?: 'default' | 'subtask'
  onClaimQuest?: (questId: string) => void
  isClaimQuestLoading?: boolean
}) => {
  const daysLeft = getDaysLeft(quest.valid_by.toString())

  const buttonProps = useMemo(() => {
    if (quest.completed_subtasks === 0) {
      return {
        text: 'Start',
        className: '',
        onClick: () => {},
      }
    }
    if (quest.completed_subtasks < quest.total_subtasks) {
      return {
        text: 'Go on',
        className: '',
        onClick: () => {},
      }
    }

    if (
      quest.completed_subtasks === quest.total_subtasks &&
      !quest.reward_claimed
    ) {
      return {
        text: 'Claim',
        className: '',
        onClick: () => {
          if (isClaimQuestLoading) return
          onClaimQuest(quest.id)
        },
      }
    }

    if (
      quest.completed_subtasks === quest.total_subtasks &&
      quest.reward_claimed
    ) {
      return {
        text: <TickIcon sizeX="12px" sizeY="12px" color="#565656" />,
        className: 'bg-[#2E2E2E] text-primary',
        onClick: () => {},
      }
    } else {
      return {
        text: '',
        className: '',
        onClick: () => {},
      }
    }
  }, [quest, isClaimQuestLoading])

  return (
    <div
      className={cn(
        'py-[18px] px-5 rounded-3xl bg-[#1C1C1C] flex flex-col w-full min-w-[95%]',
        variant === 'subtask' ? 'bg-[#2E2E2E]' : ''
      )}
      onClick={() => onSelect(quest)}
    >
      {variant === 'default' && (
        <div className="flex mb-4">
          <div className="flex gap-4 items-center grow">
            <div className="rounded-full bg-black place-items-center grid h-[36px] w-[36px]">
              <CurrencyIcon sizeX="16px" sizeY="16px" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="tracking-tighter text-primary leading-none text-[15px]">
                {quest.name}
              </p>
              <p className="tracking-tighter text-secondary leading-none text-[12px]">
                {`Reward ${quest.reward.toLocaleString('en-US')} XP`}
              </p>
            </div>
          </div>
          <Button
            text={isClaimQuestLoading ? <Spinner /> : buttonProps.text}
            onClick={(e) => {
              e.stopPropagation()
              buttonProps.onClick()
            }}
            className={cn(
              'h-[32px] flex items-center justify-center',
              buttonProps.className
            )}
          />
        </div>
      )}

      {variant === 'subtask' && (
        <div className="flex mb-4 justify-between">
          <p className="text-[20px] font-bold">Reward</p>
          <div className="flex gap-1 items-center">
            <CurrencyIcon sizeX="24px" sizeY="42px" />
            <p className="text-[20px] font-bold">{`${quest.reward.toLocaleString('en-US')}`}</p>
          </div>
        </div>
      )}
      <ProgressQuest
        completed={quest.completed_subtasks}
        total={quest.total_subtasks}
        color={variant === 'subtask' ? 'bg-[#565656]' : 'bg-[#2E2E2E]'}
        validTill={
          daysLeft <= 0
            ? 'Finished'
            : `${daysLeft} ${daysLeft === 1 ? 'day' : 'days'} left`
        }
      />
    </div>
  )
}
