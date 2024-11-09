import { getAPIUrl } from '@/lib/utils'
import { API_ROUTES } from '@/constants'
import { Skin } from '@/types/skins'
import { UserInitDataType } from '@/types/user'

export async function getSkinsList(
  userId: string,
  rawData: string
): Promise<Skin[]> {
  const url = `${getAPIUrl(API_ROUTES.skins)}?user_id=${userId}`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `tma ${rawData}`,
    },
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

export async function buySkinXP({
  payload,
  rawData,
  user,
}: {
  payload: { skin_id: string; purchase_type: 'xp' | 'ton'; check_str?: string }
  user: UserInitDataType
  rawData: string
}): Promise<{ score: number; skin: Skin }> {
  const url = getAPIUrl(API_ROUTES.skinPurchaseXP)

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `tma ${rawData}`,
    },
    body: JSON.stringify({ request: payload, user_data: user }),
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

export async function selectActiveSkin({
  skin_id,
  rawData,
  user,
}: {
  skin_id: string
  user: UserInitDataType
  rawData: string
}): Promise<{ active_skin_id: string }> {
  const url = getAPIUrl(API_ROUTES.setActiveSkin(skin_id))

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `tma ${rawData}`,
    },
    body: JSON.stringify({ skin_id, ...user }),
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
