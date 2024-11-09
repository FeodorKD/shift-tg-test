import { FooterItemType } from '@/types'
import { AlienIcon, BlinkIcon, HomeIcon } from '@/components/icons'
import { UserSessionDataType } from '@/types/user'

const FOOTER_SECTIONS: FooterItemType[] = [
  { text: 'Home', icon: HomeIcon, key: 'home' },
  { text: 'Zone', icon: AlienIcon, key: 'zone' },
  { text: 'Earn', icon: BlinkIcon, key: 'earn' },
]

const API_ROUTES = {
  initUser: 'users',
  skins: 'skins',
  skinPurchaseXP: 'skins/purchase',
  setActiveSkin: (skinId: string) => `skins/${skinId}/set-active`,
  claimReward: (userId: string) => `users/${userId}/claim`,
  claimGameBot: (userId: string) => `gamebot/${userId}/claim`,
  dropGameBot: (userId: string) => `gamebot/${userId}/drop`,
  upgradeUserLevel: (userId: string) => `users/${userId}/upgrade-level`,
  quests: 'quests',
  completeSubtask: (subtask_id: string) => `subtasks/${subtask_id}/complete`,
  claimSubtask: (subtask_id: string) => `subtasks/${subtask_id}/claim-reward`,
  claimQuest: (quest_id: string) => `quests/${quest_id}/claim-reward`,
}

const LEVELS = {
  bronze: {
    id: 1,
    name: 'Bronze',
    startScore: 0,
    endScore: 10000,
    energy: 3,
    nitro: 5,
    farming: 3,
    gamebot: null,
    fractal: null,
    rechargeSpeed: null,
  },
  silver: {
    id: 2,
    name: 'Silver',
    startScore: 10000,
    endScore: 100000,
    energy: 4,
    nitro: 5,
    rechargeSpeed: null,
    farming: 6,
    gamebot: 4,
    fractal: null,
  },
  gold: {
    id: 3,
    name: 'Gold',
    startScore: 100001,
    endScore: 250000,
    energy: 5,
    nitro: 8,
    rechargeSpeed: 6,
    farming: 6,
    gamebot: 4,
    fractal: 100,
  },
  platinum: {
    id: 4,
    name: 'Platinum',
    startScore: 250001,
    endScore: 500000,
    energy: 3,
    nitro: 5,
    rechargeSpeed: 6,
    farming: 12,
    gamebot: 4,
    fractal: 100,
  },
}

const SKINS_MOCK = [
  { name: 'Basic', owned: true, price: 0 },
  { name: 'Galaxy', owned: false, price: 100000 },
  { name: 'Matrix', owned: false, price: 200000 },
]

const LEADERBOARD_MOCK: Partial<UserSessionDataType>[] = [
  { first_name: 'Oleg', last_name: 'Petrov', username: 'Keks', score: 1000 },
  { first_name: 'Zleg', last_name: 'Zetrov', username: 'Meks', score: 3000 },
  { first_name: 'Aleg', last_name: 'Petrov', username: 'Leks', score: 2000 },
  { first_name: 'Wleg', last_name: 'Petrov', username: 'Peks', score: 2000 },
  { first_name: 'Rleg', last_name: 'Petrov', username: 'Weks', score: 3000 },
  { first_name: 'Pleg', last_name: 'Petrov', username: 'Reks', score: 1000 },
  { first_name: 'Lleg', last_name: 'Petrov', username: 'Yeks', score: 5000 },
  { first_name: 'Mleg', last_name: 'Petrov', username: 'Zeks', score: 1000 },
]

const AVATAR_COLORS = [
  '#2FBCC5',
  '#4063FF',
  '#46CC73',
  '#DF5858',
  '#971BD1',
  '#DF58B9',
  '#D89632',
]

const MAX_INVITES_LIMIT = 150

const DATA_MOCK = {
  id: '4ec434df-a04a-43a0-8a0c-d368dd631887',
  tg_id: '48046875',
  first_name: 'Ilia',
  last_name: 'Kaminskii',
  is_premium: true,
  tg_image: null,
  score: 0,
  gamebot_worked_minutes: 13,
  gamebot_reward: 49,
  status: {
    level: 2,
    status_name: 'Silver',
    energy_limit: 3,
    nitro: 5,
    recharging_speed: 6,
    coin_farming: 3,
    gamebot: 3,
    fractal: null,
    points_to_next_level: 10000,
  },
  days_in_row: 2,
  auth_date: 1727111755,
  reward: 0,
  register_date: '2024-09-23T23:39:31',
  is_days_dropped: false,
  is_days_shown: false,
  referrals: {
    referrer: null,
    referred_users: [],
  },
}

const CONFETTI_CONFIG = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 35000,
  stagger: 3,
  width: '15px',
  height: '15px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}

const APP_LINK = 't.me/TestMyAppSHiftAABot/shift_fe?startapp'

const SKINS_TEXTURES = {
  LOL: '/hexagon_galaxy.png',
  Rekt: '/hexagon_rekt.png',
}

const DEFAULT_SKIN = {
  id: 'default',
  name: 'Default',
  required_xp: 0,
  open_from: 0,
  price_ton: 0,
  owned: true,
}

const DEFAULT_SKIN_UUID = '0'

const MANIFEST_TON =
  'https://salmon-many-reindeer-256.mypinata.cloud/ipfs/QmZQYzqT2AFSVTQ43kPzD5BDkTgTR7uWwhGzuQY9x6wwLq'

const RECEIVER_TON_ADDRESS = 'UQDZMKLD0hK_V6YAp3VOCG4mK7onW6UJxZp_3tb9Xz1HyDAq'

const QUESTS_TYPES = {
  telegram: 'telegram',
  x: 'x',
  default: 'default',
  // expand if you want it
}

export {
  FOOTER_SECTIONS,
  API_ROUTES,
  LEVELS,
  SKINS_MOCK,
  LEADERBOARD_MOCK,
  AVATAR_COLORS,
  DATA_MOCK,
  MAX_INVITES_LIMIT,
  CONFETTI_CONFIG,
  APP_LINK,
  SKINS_TEXTURES,
  DEFAULT_SKIN,
  DEFAULT_SKIN_UUID,
  MANIFEST_TON,
  RECEIVER_TON_ADDRESS,
  QUESTS_TYPES,
}
