import { useContext } from 'react'
import { TabContext } from '@/providers/tab_provider'
import { TabType } from '@/types'

const useTabs = () => {
  const context = useContext(TabContext)
  if (context === undefined) {
    throw new Error('Tabs Context not provided')
  }
  const {
    activeTab,
    changeActiveTab,
    isActiveTab,
    isDaysCountView,
    isProgressView,
    isRewardView,
    setIsDaysCountView,
    setIsProgressView,
    setIsRewardView,
  } = context

  const onChangeTab = (tab: TabType) => {
    changeActiveTab(tab)
  }
  return {
    activeTab,
    changeActiveTab: onChangeTab,
    isActiveTab,
    isDaysCountView,
    isRewardView,
    isProgressView,
    setIsProgressView,
    setIsRewardView,
    setIsDaysCountView,
  }
}

export default useTabs
