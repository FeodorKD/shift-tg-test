import { FunctionComponent } from 'react'
import { API_ROUTES } from '@/core/constants'
import { LEVELS } from '@/features/progress/constants'

interface IIcon {
  className?: string
  color?: string
  sizeX?: string
  sizeY?: string
}

type ApiRouteKeysType = keyof typeof API_ROUTES
type ApiRouteType = (typeof API_ROUTES)[ApiRouteKeysType]
type LevelType = (typeof LEVELS)[keyof typeof LEVELS]
type LevelBoostType = {
  title: string
  text: string
  icon: FunctionComponent
}

export type { ApiRouteKeysType, LevelType, LevelBoostType, ApiRouteType, IIcon }
