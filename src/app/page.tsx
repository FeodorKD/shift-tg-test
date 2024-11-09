'use client'

import { useCallback, useEffect } from 'react'
import { useInitUser } from '@/features/user/hooks/useInitUser'
import useStore from '@/core/store/useStore'
import { DesktopView } from '@/page/DesktopPage'
import { ErrorView } from '@/page/ErrorPage'
import { LoadingView } from '@/widgets/LoadingScreen'
import DayCountView from '@/features/progress/ui/DayCount'
import { RewardDropView } from '@/widgets/RewardDrop'
import { ProgressView } from '@/page/ProgressPage'
import { ZoneView } from '@/page/ZonePage'
import { EarnView } from '@/page/EarnPage'
import { UserSessionDataType } from '@/features/user/types'
import { HomeView } from '@/page/HomePage'
import useTabs from '@/features/tabs/hooks/useTabs'

export default function Home() {
  const {
    userInitData,
    isUserSessionError,
    isUserSessionLoading,
    userLaunchData,
    triggerUserInit,
    isMobilePlatform,
  } = useInitUser(true)
  const { dropDaysRow, dropDaysReward } = useStore()
  const {
    activeTab,
    isDaysCountView,
    isProgressView,
    isRewardView,
    setIsDaysCountView,
    setIsProgressView,
    setIsRewardView,
  } = useTabs()

  useEffect(() => {
    if (userInitData && !userInitData.is_days_shown) {
      setIsDaysCountView(true)
    }

    if (userInitData && userInitData.drop_reward) {
      setIsRewardView(true)
    }
  }, [userInitData])

  const onInitErrorReload = () => {
    if (userLaunchData) {
      triggerUserInit(userLaunchData)
    }
  }

  const onProgressViewSwitch = (val: boolean) => setIsProgressView(val)

  const renderCurrentView = useCallback(() => {


    if (isUserSessionError)
      return <ErrorView onButtonClick={onInitErrorReload} />

    if (isUserSessionLoading || !userInitData) return <LoadingView />

    if (!userInitData.is_days_shown && isDaysCountView)
      return (
        <DayCountView
          authDate={userInitData.auth_date}
          dayCount={userInitData.days_in_row}
          isDaysDropped={userInitData.is_days_dropped ?? false}
          onShowEnd={() => {
            setIsDaysCountView(false)
            dropDaysRow()
          }}
        />
      )

    if (isRewardView && userInitData.drop_reward) {
      return (
        <RewardDropView
          reward={userInitData.drop_reward}
          onClose={() => {
            setIsRewardView(false)
            dropDaysReward()
          }}
        />
      )
    }

    if (isProgressView)
      return <ProgressView onClose={() => setIsProgressView(false)} />

    switch (activeTab) {
      case 'home':
        return (
          <HomeView
            userData={userInitData as unknown as UserSessionDataType}
            onProgressViewSwitch={onProgressViewSwitch}
          />
        )
      case 'zone':
        return <ZoneView />
      case 'earn':
        return <EarnView />
    }
  }, [
    isUserSessionError,
    isUserSessionLoading,
    userInitData,
    isProgressView,
    isMobilePlatform,
    activeTab,
    isRewardView,
    isDaysCountView,
  ])

  return <>{renderCurrentView()}</>
}
