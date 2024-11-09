import { AVATAR_COLORS } from '@/features/skins/constants'

export const getAvatarColor = () => {
  const rand = Math.floor(Math.random() * AVATAR_COLORS.length)
  return AVATAR_COLORS[rand]
}
