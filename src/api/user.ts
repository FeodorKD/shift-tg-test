import { getAPIUrl } from '@/lib/utils'
import { API_ROUTES } from '@/constants'
import { UserInitDataType, UserSessionDataType } from '@/types/user'
import { LevelType } from '@/types'

export async function initUser({
  user,
  rawData,
  startParam,
}: {
  user: UserInitDataType
  rawData: string
  startParam?: string
}): Promise<UserSessionDataType> {
  const url = startParam
    ? `${getAPIUrl(API_ROUTES.initUser)}?referrer_id=${startParam}`
    : getAPIUrl(API_ROUTES.initUser)
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `tma ${rawData}`,
    },
    body: JSON.stringify(user),
  })
  if (!response.ok) {
    throw new Error(`HTTP error with status: ${response.status}`)
  }

  const responseData = await response.json()

  if (responseData.error) {
    throw new Error(responseData.error)
  }

  return responseData
}

export async function claimUserReward({
  userId,
  rawData,
}: {
  userId: string
  rawData: string
}): Promise<{ new_score: number; reward_passed: number }> {
  const url = getAPIUrl(API_ROUTES.claimReward(userId))

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `tma ${rawData}`,
    },
    body: JSON.stringify({ user_id: userId }),
  })
  if (!response.ok) {
    throw new Error(`HTTP error with status: ${response.status}`)
  }

  const responseData = await response.json()

  if (responseData.error) {
    throw new Error(responseData.error)
  }

  return responseData
}

export async function claimGamebotPoints({
  userId,
  rawData,
}: {
  userId: string
  rawData: string
}): Promise<{ new_score: number }> {
  const url = getAPIUrl(API_ROUTES.claimGameBot(userId))

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `tma ${rawData}`,
    },
    body: JSON.stringify({ user_id: userId }),
  })
  if (!response.ok) {
    throw new Error(`HTTP error with status: ${response.status}`)
  }

  const responseData = await response.json()

  if (responseData.error) {
    throw new Error(responseData.error)
  }

  return responseData
}

export async function dropGamebotPoints({
  userId,
  rawData,
}: {
  userId: string
  rawData: string
}): Promise<{ new_score: number }> {
  const url = getAPIUrl(API_ROUTES.dropGameBot(userId))

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `tma ${rawData}`,
    },
    body: JSON.stringify({ user_id: userId }),
  })

  if (!response.ok) {
    throw new Error(`HTTP error with status: ${response.status}`)
  }

  const responseData = await response.json()

  if (responseData.error) {
    throw new Error(responseData.error)
  }

  return responseData
}

export async function upgradeUserLevel({
  userId,
  rawData,
  boc,
}: {
  userId: string
  rawData: string
  boc?: string
}): Promise<{
  score: number
  user_status: LevelType
  upgrade_available: boolean
  points_to_next_level: number
  xp_to_next_level_upgrade: number
}> {
  const url = getAPIUrl(API_ROUTES.upgradeUserLevel(userId))

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `tma ${rawData}`,
    },
    body: JSON.stringify({ user_id: userId, boc }),
  })

  if (!response.ok) {
    throw new Error(`HTTP error with status: ${response.status}`)
  }

  const responseData = await response.json()

  if (responseData.error) {
    throw new Error(responseData.error)
  }

  return responseData
}
