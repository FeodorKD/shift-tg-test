import { UserSessionDataType } from '@/features/user/types'

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

export { LEADERBOARD_MOCK }
