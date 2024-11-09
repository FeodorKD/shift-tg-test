import { AlienIcon, BlinkIcon, HomeIcon } from '../../../shared/ui/icons'
import { FooterItemType } from '@/features/tabs/types'

export const FOOTER_SECTIONS: FooterItemType[] = [
  { text: 'Home', icon: HomeIcon, key: 'home' },
  { text: 'Zone', icon: AlienIcon, key: 'zone' },
  { text: 'Earn', icon: BlinkIcon, key: 'earn' },
]
