'use client'

import { useCallback, useEffect } from 'react'
import useTabs from '@/hooks/useTabs'
import { LoadingView } from '@/components/views/loading_view'
import { HomeView } from '@/components/views/home_view'
import { ErrorView } from '@/components/views/error_view'
import { useInitUser } from '@/hooks/useInitUser'
import { UserSessionDataType } from '@/types/user'
import { ProgressView } from '@/components/views/progress_view'
import { ZoneView } from '@/components/views/zone_view'
import DayCountView from '@/components/views/day_count_view'
import { DesktopView } from '@/components/views/desktop_view'
import { RewardDropView } from '@/components/views/reward_drop_view'
import useStore from '@/store/useStore'
import { EarnView } from '@/components/views/earn_view'

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

    // TODO: drop diz shit here
  }, [userInitData])

  const onInitErrorReload = () => {
    if (userLaunchData) {
      triggerUserInit(userLaunchData)
    }
  }

  const onProgressViewSwitch = (val: boolean) => setIsProgressView(val)

  const renderCurrentView = useCallback(() => {
    if (!isMobilePlatform && process.env.NODE_ENV !== 'development')
      return <DesktopView />

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
