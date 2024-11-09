import { Quest, Subtask } from '@/features/quests/types'
import { API_ROUTES } from '@/core/constants'
import { getAPIUrl } from '@/shared/lib/utils/api'

export async function getQuestList(
  userId: string,
  rawData: string
): Promise<Quest[]> {
  const url = `${getAPIUrl(API_ROUTES.quests)}?user_id=${userId}`

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

export async function completeQuestSubtask({
  subtask_id,
  rawData,
  user_id,
}: {
  subtask_id: string
  user_id: string
  rawData: string
}): Promise<
  Subtask & {
    completed_subtasks: number
    total_subtasks: number
  }
> {
  const url = getAPIUrl(
    `${API_ROUTES.completeSubtask(subtask_id)}?user_id=${user_id}`
  )

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `tma ${rawData}`,
    },
    body: JSON.stringify({ subtask_id, user_id }),
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

export async function claimSubtaskReward({
  subtask_id,
  rawData,
  user_id,
}: {
  subtask_id: string
  user_id: string
  rawData: string
}): Promise<
  Subtask & {
    completed_subtasks: number
    total_subtasks: number
  }
> {
  const url = getAPIUrl(
    `${API_ROUTES.claimSubtask(subtask_id)}?user_id=${user_id}`
  )

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `tma ${rawData}`,
    },
    body: JSON.stringify({ subtask_id, user_id }),
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

export async function claimQuestReward({
  quest_id,
  rawData,
  user_id,
}: {
  quest_id: string
  user_id: string
  rawData: string
}): Promise<Quest> {
  const url = getAPIUrl(`${API_ROUTES.claimQuest(quest_id)}?user_id=${user_id}`)

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `tma ${rawData}`,
    },
    body: JSON.stringify({ quest_id, user_id }),
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
