import React, { useCallback } from 'react'
import { UserSessionDataType } from '@/features/user/types'
import { AvatarCircle } from '@/features/skins/ui/AvatarCircle'
import { getAvatarColor } from '@/features/user/utils'
import { cn } from '@/shared/lib/utils/cn'

type LeaderboardTops = {
  user: UserSessionDataType
  place: number
  height?: string
  width?: string
  isPersonal?: boolean
}

export const LeaderboardTops = ({
  user,
  height,
  width,
  isPersonal = false,
  place,
}: LeaderboardTops) => {
  const title = isPersonal ? 'You' : user.first_name

  const getBGColor = useCallback((place: number) => {
    switch (place) {
      case 0:
        return 'bg-gold'
      case 1:
        return 'bg-silver'
      case 2:
        return 'bg-bronze'
      default:
        return 'bg-black'
    }
  }, [])

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="rounded-full border-2 border-white relative">
        <div
          className={cn(
            'absolute rounded-full border-2 border-black w-[18px] h-[18px] text-[11px] leading-none grid place-items-center',
            getBGColor(place)
          )}
        >
          {place + 1}
        </div>
        <AvatarCircle
          bg={getAvatarColor()}
          user={user}
          height={height}
          width={width}
        />
      </div>
      <p className="tracking-tighter text-[15px] leading-[15px]">{title}</p>
      <p
        className={cn(
          'tracking-tighter text-[12px] leading-[14px]',
          isPersonal ? '' : 'text-[#565656]'
        )}
      >{`${user.score} XP`}</p>
    </div>
  )
}
