import React, { useMemo, useState } from 'react'
import { Quest } from '@/types/quests'
import { Button } from '@/components/ui/button'
import { CloseButton } from '@/components/ui/close_button'
import { QuestItem } from '@/components/ui/quest_item'
import { CurrencyIcon } from '@/components/icons'
import { SubtaskItem } from '@/components/ui/subtask_item'
import { cn } from '@/lib/utils'

type QuestSubtasksProps = {
  isLoading: boolean
  isSubtaskLoading: boolean
  quest: Quest
  onClose: () => void
  onSubtaskComplete: (subtaskId: string) => void
  onSubtaskClaim: (subtaskId: string) => void
  loadingItemId: string
}

export const QuestSubtasks = ({
  isLoading,
  isSubtaskLoading,
  quest,
  onClose,
  onSubtaskComplete,
  onSubtaskClaim,
  loadingItemId,
}: QuestSubtasksProps) => {
  const [isStarted, setIsStarted] = useState<boolean>(
    quest.completed_subtasks !== 0
  )

  const onButtonClose = () => {
    if (!isStarted) {
      setIsStarted(true)
      return
    }

    onClose()
  }

  const buttonProps = useMemo(() => {
    if (isStarted)
      return {
        text: 'Close',
        className: 'bg-[#2E2E2E] text-primary',
      }
    else {
      return {
        text: 'Start',
        className: '',
      }
    }
  }, [isStarted])

  if (isLoading) return null

  return (
    <>
      <div className="bg-black fixed w-screen h-screen top-0 left-0 opacity-90 z-10" />
      <div className="fixed bottom-0 left-0 h-[80vh] w-full bg-[#1C1C1C] flex flex-col items-center z-20 pt-[90px] pb-10 px-4">
        <div className="absolute right-4 top-4" onClick={onClose}>
          <CloseButton />
        </div>
        <div className="rounded-full grid place-items-center w-[120px] h-[120px] bg-black absolute top-[-60px]">
          <CurrencyIcon sizeX="48px" sizeY="48px" />
        </div>
        <div className="tracking-tighter flex flex-col gap-3 w-full text-center mb-6">
          <p className="font-bold text-[22px]">{quest.name}</p>
          <p className="text-[14px]">{quest.description}</p>
        </div>
        <QuestItem quest={quest} variant="subtask" />
        <div className="mt-8 w-full flex gap-4 flex-col">
          {quest.subtasks.map((sub) => (
            <SubtaskItem
              subtask={sub}
              key={sub.id}
              onComplete={onSubtaskComplete}
              onClaim={onSubtaskClaim}
              isLoading={isSubtaskLoading && loadingItemId === sub.id}
            />
          ))}
        </div>
        <div className="w-full mt-auto">
          <Button
            text={buttonProps.text}
            onClick={onButtonClose}
            className={cn('w-full min-h-[45px]', buttonProps.className)}
          />
        </div>
      </div>
    </>
  )
}
