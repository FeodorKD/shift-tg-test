import React from 'react'
import { useQuests } from '@/features/quests/hooks/useQuests'
import { useInitUser } from '@/features/user/hooks/useInitUser'
import { EarnViewSkeleton } from '@/features/skeletons/ui/EarnSkeleton'
import { QuestItem } from '@/features/quests/ui/QuestItem'
import { QuestSubtasks } from '@/features/quests/ui/QuestSubtasks'

export const EarnView = () => {
  const { userInitData: user, initDataRaw } = useInitUser()
  const {
    quests,
    isQuestsLoading,
    selectedQuest,
    onDropSelectedQuest,
    onSelectQuest,
    onSubtaskComplete,
    onSubtaskClaim,
    onQuestClaim,
    isCompleteSubtaskLoading,
    isClaimSubtaskLoading,
    isClaimQuestLoading,
    loadingItemId,
  } = useQuests(user?.id as string, initDataRaw as string)

  if (isQuestsLoading) return <EarnViewSkeleton />

  return (
    <div className="flex flex-col px-4 py-8 items-center w-full">
      <div className="flex items-center tracking-tighter text-[16px] left-[18px] gap-1 mb-6">
        <p className="text-primary">Quest</p>
        <p className="text-secondary">{quests.length}</p>
      </div>
      <div className="overflow-scroll flex items-center w-full gap-3 no-scrollbar mb-6">
        {quests.map((q) => (
          <QuestItem
            key={q.id}
            quest={q}
            onSelect={onSelectQuest}
            onClaimQuest={onQuestClaim}
            isClaimQuestLoading={isClaimQuestLoading}
          />
        ))}
      </div>
      <div className="flex items-center tracking-tighter text-[16px] left-[18px] gap-1 mb-6">
        <p className="text-primary">Ton</p>
      </div>
      {selectedQuest && (
        <QuestSubtasks
          onClose={onDropSelectedQuest}
          isLoading={false}
          quest={selectedQuest}
          onSubtaskComplete={onSubtaskComplete}
          onSubtaskClaim={onSubtaskClaim}
          isSubtaskLoading={isCompleteSubtaskLoading || isClaimSubtaskLoading}
          loadingItemId={loadingItemId}
        />
      )}
    </div>
  )
}
