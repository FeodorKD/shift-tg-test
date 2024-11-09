import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ApiRouteType, LevelBoostType, LevelType } from '@/types'
import { BatteryIcon } from '../components/icons/'
import {
  EnergyIcon,
  FarmingIcon,
  GamebotIcon,
  NitroIcon,
} from '@/components/icons'
import FractalIcon from '@/components/icons/fractal_icon'
import { AVATAR_COLORS, QUESTS_TYPES } from '@/constants'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAPIUrl(route: ApiRouteType) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://0.0.0.0:8000'
  return `${API_URL}/${route}`
}

export const getLevelBoosts = (level: LevelType) => {
  const userBoosts: LevelBoostType[] = []

  if (level.energy) {
    userBoosts.push({
      text: `Battery capacity for game play time up to <b>${level.energy}m</b>`,
      icon: EnergyIcon,
      title: 'Energy Limit',
    })
  }

  if (level.nitro) {
    userBoosts.push({
      text: `Nitro mode which will help you earn up to <b>x${level.nitro}</b> per tap`,
      icon: NitroIcon,
      title: 'Nitro',
    })
  }

  if (level.rechargeSpeed) {
    userBoosts.push({
      text: `Battery charging speed in <b>${level.rechargeSpeed}m</b>`,
      icon: BatteryIcon,
      title: 'Recharging Speed',
    })
  }

  if (level.farming) {
    userBoosts.push({
      text: `Profit per day <b>${level.farming}%</b>`,
      icon: FarmingIcon,
      title: 'Farming',
    })
  }

  if (level.gamebot) {
    userBoosts.push({
      text: `Automatic game play for <b>${level.gamebot}h</b>`,
      icon: GamebotIcon,
      title: 'Gamebot',
    })
  }

  if (level.fractal) {
    userBoosts.push({
      text: `Symbol from <b>${level.fractal}</b> XP per tap`,
      icon: FractalIcon,
      title: 'Fractal',
    })
  }

  return userBoosts
}

export const getAvatarColor = () => {
  const rand = Math.floor(Math.random() * AVATAR_COLORS.length)
  return AVATAR_COLORS[rand]
}

export const getDaysLeft = (targetDate: string): number => {
  const now = new Date()
  const target = new Date(targetDate)
  const diffInMs = target.getTime() - now.getTime()
  return Math.ceil(diffInMs / (1000 * 60 * 60 * 24))
}

export const getTaskType = (link: string) => {
  if (link.includes('tg') || link.includes('telegram')) {
    return QUESTS_TYPES.telegram
  } else if (link.includes('x') || link.includes('telegram')) {
    return QUESTS_TYPES.x
  } else {
    return QUESTS_TYPES.default
  }
}

export const truncateAddress = (address?: string) => {
  if (!address) return ''
  return address
    .slice(0, 4)
    .concat('...')
    .concat(address.slice(-4, address.length))
}
