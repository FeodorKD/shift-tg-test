import { FunctionComponent, ReactElement, ReactNode } from 'react'
import { API_ROUTES, LEVELS } from '@/constants'

interface IIcon {
  className?: string
  color?: string
  sizeX?: string
  sizeY?: string
}

type FooterItemType = {
  text: string
  icon: FunctionComponent<IIcon>
  key: TabType
}

type TabType = 'home' | 'zone' | 'earn'

type ApiRouteKeysType = keyof typeof API_ROUTES
type ApiRouteType = (typeof API_ROUTES)[ApiRouteKeysType]
type LevelType = (typeof LEVELS)[keyof typeof LEVELS]
type LevelBoostType = {
  title: string
  text: string
  icon: FunctionComponent
}

export type {
  IIcon,
  FooterItemType,
  TabType,
  ApiRouteType,
  LevelType,
  LevelBoostType,
}
