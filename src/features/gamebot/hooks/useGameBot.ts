import { useMemo } from 'react'
import useStore from '@/core/store/useStore'
import { useMutation } from '@tanstack/react-query'
import { retrieveLaunchParams } from '@telegram-apps/sdk-react'
import { useToast } from '@/features/toasts/providers'
import { claimGamebotPoints, dropGamebotPoints } from '@/features/user/api'

export const useGameBot = () => {
  const {
    user,
    claimGamebotScore,
    dropGamebotScore,
    changeGamebotState,
    gameBotOpened,
  } = useStore((state) => state)

  const showToast = useToast()
  const { initDataRaw } = retrieveLaunchParams()
  const isGameBotAvailable = useMemo(() => user?.status.level !== 1, [user])

  const {
    isError: isGameBotClaimError,
    isPending: isGameBotClaimLoading,
    mutate: claimGameBotMutation,
  } = useMutation({
    mutationFn: claimGamebotPoints,
    mutationKey: ['gamebot_claim'],
    onSuccess: (data) => {
      claimGamebotScore(data.new_score)
      showToast('You claimed it', 'success')
    },
    onError: () => showToast('Gamebot claim failed', 'error'),
  })

  const onClaimGamebotReward = async (id: string) => {
    claimGameBotMutation({ userId: id, rawData: initDataRaw as string })
  }

  const {
    isError: isGameBotDropError,
    isPending: isGameBotDropLoading,
    mutate: dropGameBotMutation,
  } = useMutation({
    mutationFn: dropGamebotPoints,
    mutationKey: ['gamebot_drop'],
    onSuccess: () => {
      dropGamebotScore()
      showToast('Score dropped', 'success')
    },
    onError: () => showToast('Score drop failed', 'error'),
  })

  const onDropGamebotReward = async (id: string) => {
    dropGameBotMutation({ userId: id, rawData: initDataRaw as string })
  }

  return {
    // data
    isGameBotAvailable,
    isGameBotOpened: gameBotOpened,

    isGameBotClaimError,
    isGameBotClaimLoading,

    isGameBotDropError,
    isGameBotDropLoading,
    // handlers
    onClaimGamebotReward,
    onDropGamebotReward,
    changeGamebotState,
  }
}
