import { createContext, FC, ReactNode, useState } from 'react'
import { TabType } from '@/features/tabs/types'

type TabProviderProps = {
  activeTab: TabType
  isActiveTab: (tab: TabType) => boolean
  changeActiveTab: (tab: TabType) => void
  setIsDaysCountView: (val: boolean) => void
  isDaysCountView: boolean
  setIsProgressView: (val: boolean) => void
  isProgressView: boolean
  setIsRewardView: (val: boolean) => void
  isRewardView: boolean
}

export const TabContext = createContext<TabProviderProps | undefined>(undefined)

export const TabProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<TabType>('home')
  const [isDaysCountView, setIsDaysCountView] = useState<boolean>(false)
  const [isProgressView, setIsProgressView] = useState<boolean>(false)
  const [isRewardView, setIsRewardView] = useState<boolean>(false)

  const changeActiveTab = (tab: TabType) => {
    setActiveTab(tab)
    setIsProgressView(false)
    setIsDaysCountView(false)
    setIsRewardView(false)
  }

  const isActiveTab = (tab: TabType) => tab === activeTab

  return (
    <TabContext.Provider
      value={{
        activeTab,
        changeActiveTab,
        isActiveTab,
        isDaysCountView,
        isProgressView,
        isRewardView,
        setIsDaysCountView,
        setIsProgressView,
        setIsRewardView,
      }}
    >
      {children}
    </TabContext.Provider>
  )
}
