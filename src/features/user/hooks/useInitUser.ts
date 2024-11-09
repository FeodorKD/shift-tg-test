'use client'

import { useCallback, useEffect, useState } from 'react'
import { retrieveLaunchParams, useInitData } from '@telegram-apps/sdk-react'
import { useMutation } from '@tanstack/react-query'
import { useTon } from '@/features/ton/hooks/useTon'
import useStore from '@/core/store/useStore'
import { useToast } from '@/features/toasts/providers'
import { UserInitDataType } from '@/features/user/types'
import { BuyType } from '@/features/skins/types'
import {
  claimUserReward,
  initUser,
  upgradeUserLevel,
} from '@/features/user/api'

export const useInitUser = (withInit = false) => {
  const { user, setUser, updateScore, dropReward, upgradeLevel } = useStore(
    (state) => state
  )

  const showToast = useToast()
  const [userLaunchData, setUserLaunchData] = useState<UserInitDataType | null>(
    null
  )

  const [isConfettiLaunch, setIsConfettiLaunch] = useState(false)
  const [isBuyModal, setIsBuyModal] = useState<boolean>(false)
  const [activeModalTab, setActiveModalTab] = useState<BuyType>('xp')

  const initData = useInitData()
  const { initDataRaw, startParam, platform } = retrieveLaunchParams()
  const { isConnectedWallet, onTonModalOn, onSendTransaction } = useTon()

  const isMobilePlatform =
    platform === 'android' || platform === 'ios' || platform === 'android_x'

  useEffect(() => {
    if (isConfettiLaunch) {
      setTimeout(() => setIsConfettiLaunch(false), 2500)
    }
  }, [isConfettiLaunch])

  const getTGInitData = useCallback(async () => {
    try {
      if (initData) {
        return {
          first_name: initData.user?.firstName as string,
          last_name: initData.user?.lastName as string,
          username: (initData.user?.username as string) ?? '',
          is_premium: (initData.user?.isPremium as boolean) ?? false,
          tg_id: initData.user?.id.toString() as string,
          auth_date: initData.authDate.getTime() / 1000,
          hash: initData.hash,
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }, [initData])

  const {
    isError: isUserSessionError,
    isPending: isUserSessionLoading,
    mutate,
  } = useMutation({
    mutationFn: initUser,
    mutationKey: ['user_init_main'],
    onSuccess: (data) => {
      setUser(data)
    },
  })

  const {
    isError: isClaimRewardError,
    isPending: isClaimRewardLoading,
    mutate: triggerClaimReward,
  } = useMutation({
    mutationFn: claimUserReward,
    onSuccess: (data) => {
      setIsConfettiLaunch(true)
      dropReward()
      updateScore(data.new_score)
      showToast(`You claimed ${data.reward_passed}XP`, 'success')
    },
    onError: () => showToast('Claimed failed', 'error'),
  })

  const {
    isError: isLevelUpgradeError,
    isPending: isLevelUpgradeLoading,
    mutate: triggerLevelUpgrade,
  } = useMutation({
    mutationFn: upgradeUserLevel,
    onSuccess: (data) => {
      updateScore(data.score)
      const payload = {
        ...data.user_status,
        upgrade_available: data.upgrade_available,
        xp_to_upgrade: data.xp_to_next_level_upgrade,
        points_to_next_level: data.points_to_next_level,
      }
      upgradeLevel(payload)
      setIsBuyModal(false)
      setActiveModalTab('xp')
      showToast('New level is reached', 'success')
    },
    onError: () => showToast('Level upgrade failed', 'error'),
  })

  const triggerUserInit = useCallback(
    (data: UserInitDataType) =>
      mutate({ user: data, rawData: initDataRaw as string, startParam }),
    [initDataRaw, mutate, startParam]
  )

  const onClaimReward = (id: string) =>
    triggerClaimReward({ userId: id, rawData: initDataRaw as string })

  const onLevelUpgrade = () => {
    if (!user) return
    return triggerLevelUpgrade({
      userId: user?.id,
      rawData: initDataRaw as string,
    })
  }

  const onTonLevelUpgrade = useCallback(async () => {
    if (!isConnectedWallet) {
      await onTonModalOn()
      return
    }

    if (!user || !user.status.upgrade_available) return

    const upgradePrice = user.status.ton_to_upgrade ?? 0

    await onSendTransaction(upgradePrice, (boc) => {
      try {
        return triggerLevelUpgrade({
          userId: user?.id,
          rawData: initDataRaw as string,
          boc: boc as string,
        })
      } catch (err) {
        showToast('Level upgrade error', 'error')
      }
    })
  }, [initDataRaw, isConnectedWallet, user])

  useEffect(() => {
    if (!withInit) return
    getTGInitData().then((data) => {
      setUserLaunchData(data as UserInitDataType)

      if (data) {
        // @ts-ignore
        triggerUserInit(data)
      }
    })
  }, [])

  return {
    // data
    userLaunchData,
    initDataRaw,
    userInitData: user,
    isConfettiLaunch,
    isMobilePlatform,
    isBuyModal,
    activeModalTab,

    // Errors
    isUserSessionError,
    isClaimRewardError,
    isLevelUpgradeError,

    // Loadings
    isUserSessionLoading,
    isClaimRewardLoading,
    isLevelUpgradeLoading,

    // methods
    triggerUserInit,
    onClaimReward,
    updateScore,
    onLevelUpgrade,
    onTonLevelUpgrade,
    setIsBuyModal,
    setActiveModalTab,
  }
}
