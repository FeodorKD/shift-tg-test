import { Skin } from '@/types/skins'

type UserInitDataType = {
  tg_id: string
  first_name: string
  last_name: string
  username: string
  is_premium: boolean
  tg_image?: string
  auth_date: number
  hash: string
  score: number
  max_score: number
}

type UserStatusType = {
  level: number
  coin_farming: number | null
  energy_limit: number | null
  fractal: number | null
  gamebot: number | null
  nitro: boolean
  points_to_next_level: number
  recharging_speed: number
  status_name: string
  upgrade_available: boolean
  xp_to_upgrade: number
  ton_to_upgrade: number
}

type DropRewardType = {
  type: 'xp' | 'skin'
  amount?: number
  new_score?: number
  skin?: Skin
}

type UserSessionDataType = UserInitDataType & {
  id: string
  score: number
  days_in_row: number
  auth_date: string
  is_days_dropped?: boolean
  is_days_shown: boolean

  gamebot_reward: number
  gamebot_worked_minutes: number
  reward: number
  referrals: {
    referrer: Partial<UserInitDataType>
    referred_users: Partial<UserInitDataType>[]
  }
  status: UserStatusType
  active_skin_id: string | null
  drop_reward: DropRewardType | null
  address?: string
}

export type {
  UserInitDataType,
  UserSessionDataType,
  UserStatusType,
  DropRewardType,
}
