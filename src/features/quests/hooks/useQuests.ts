import { useMutation, useQuery } from '@tanstack/react-query'
import { initUtils } from '@telegram-apps/sdk'
import { useState } from 'react'
import { useToast } from '@/features/toasts/providers'
import useStore from '@/core/store/useStore'
import {
  claimQuestReward,
  claimSubtaskReward,
  completeQuestSubtask,
  getQuestList,
} from '@/features/quests/api'
import { Quest } from '@/features/quests/types'

export const useQuests = (userId: string, rawData: string) => {
  const showToast = useToast()
  const utils = initUtils()

  const [loadingItemId, setLoadingItemId] = useState<string>('')

  const {
    setQuestsList,
    quests,
    selectedQuest,
    setSelectedQuest,
    markSubtaskAsCompleted,
    markSubtaskAsClaimed,
    updateScore,
    markQuestAsClaimed,
    user,
  } = useStore((state) => state)

  const { isError: isQuestsFetchError, isLoading: isQuestsLoading } = useQuery({
    queryKey: ['quests_list'],
    refetchOnWindowFocus: false,
    queryFn: () => {
      if (!rawData.length || !userId.length) return
      return getQuestList(userId, rawData).then((d) => setQuestsList(d))
    },
  })

  const onSelectQuest = (quest: Quest) => setSelectedQuest(quest)
  const onDropSelectedQuest = () => setSelectedQuest(null)

  const {
    isError: isCompleteSubtaskError,
    isPending: isCompleteSubtaskLoading,
    mutate: triggerCompleteSubtaskAction,
  } = useMutation({
    mutationFn: completeQuestSubtask,
    onMutate: (d) => {
      setLoadingItemId(d.subtask_id)
    },
    onSuccess: (data) => {
      markSubtaskAsCompleted(data)
      setLoadingItemId('')
      utils.openLink(data.link)
    },
    onError: () => {
      setLoadingItemId('')
      showToast('Subtask start error', 'error')
    },
  })

  const {
    isError: isClaimSubtaskError,
    isPending: isClaimSubtaskLoading,
    mutate: triggerClaimSubtaskAction,
  } = useMutation({
    mutationFn: claimSubtaskReward,
    onMutate: (d) => {
      setLoadingItemId(d.subtask_id)
    },
    onSuccess: (data) => {
      markSubtaskAsClaimed(data)
      setLoadingItemId('')
      if (user?.score) {
        updateScore(user?.score + data.reward)
      }
      showToast(`You claimed ${data.reward} XP!`, 'success')
    },
    onError: () => {
      setLoadingItemId('')
      showToast('Subtask claim error', 'error')
    },
  })

  const {
    isError: isClaimQuestError,
    isPending: isClaimQuestLoading,
    mutate: triggerClaimQuestAction,
  } = useMutation({
    mutationFn: claimQuestReward,
    onMutate: (d) => {
      setLoadingItemId(d.quest_id)
    },
    onSuccess: (data) => {
      markQuestAsClaimed(data)
      setLoadingItemId('')
      if (user?.score) {
        updateScore(user?.score + data.reward)
      }
      showToast(`Quest completed! +${data.reward} XP!`, 'success')
    },
    onError: () => {
      setLoadingItemId('')
      showToast('Quest claim error', 'error')
    },
  })

  const onSubtaskComplete = (subtaskId: string) => {
    triggerCompleteSubtaskAction({
      subtask_id: subtaskId,
      user_id: userId,
      rawData,
    })
  }

  const onSubtaskClaim = (subtaskId: string) => {
    triggerClaimSubtaskAction({
      subtask_id: subtaskId,
      user_id: userId,
      rawData,
    })
  }

  const onQuestClaim = (questId: string) => {
    triggerClaimQuestAction({
      quest_id: questId,
      user_id: userId,
      rawData,
    })
  }

  return {
    isQuestsFetchError,
    isQuestsLoading,
    quests,
    onSelectQuest,
    onDropSelectedQuest,
    selectedQuest,
    loadingItemId,

    isCompleteSubtaskError,
    isCompleteSubtaskLoading,
    triggerCompleteSubtaskAction,

    isClaimSubtaskError,
    isClaimSubtaskLoading,
    triggerClaimSubtaskAction,

    isClaimQuestError,
    isClaimQuestLoading,
    triggerClaimQuestAction,

    onSubtaskComplete,
    onSubtaskClaim,
    onQuestClaim,
  }
}
