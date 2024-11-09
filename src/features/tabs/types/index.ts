import { FunctionComponent } from 'react'
import { IIcon } from '@/shared/types'

type FooterItemType = {
  text: string
  icon: FunctionComponent<IIcon>
  key: TabType
}

type TabType = 'home' | 'zone' | 'earn'

export type { FooterItemType, TabType }
