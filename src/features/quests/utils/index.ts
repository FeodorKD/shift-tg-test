import { QUESTS_TYPES } from '@/features/quests/constants'

export const getTaskType = (link: string) => {
  if (link.includes('tg') || link.includes('telegram')) {
    return QUESTS_TYPES.telegram
  } else if (link.includes('x') || link.includes('telegram')) {
    return QUESTS_TYPES.x
  } else {
    return QUESTS_TYPES.default
  }
}
