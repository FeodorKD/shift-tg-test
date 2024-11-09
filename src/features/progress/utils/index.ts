import { LevelBoostType, LevelType } from '@/shared/types'
import {
  BatteryIcon,
  EnergyIcon,
  FarmingIcon,
  GamebotIcon,
  NitroIcon,
} from '@/shared/ui/icons'
import FractalIcon from '@/shared/ui/icons/fractal_icon'

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

export const getDaysLeft = (targetDate: string): number => {
  const now = new Date()
  const target = new Date(targetDate)
  const diffInMs = target.getTime() - now.getTime()
  return Math.ceil(diffInMs / (1000 * 60 * 60 * 24))
}
