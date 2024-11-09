import React, { useCallback, useEffect, useMemo } from 'react'
import { ArrowIcon } from '../../shared/ui/icons'
import { useInView } from '@/shared/hooks/useInViewPort'
import { initBackButton } from '@telegram-apps/sdk-react'
import { useInitUser } from '@/features/user/hooks/useInitUser'
import { AvatarCircle } from '@/features/skins/ui/AvatarCircle'
import { UserInitDataType, UserSessionDataType } from '@/features/user/types'
import { getAvatarColor } from '@/features/user/utils'
import { cn } from '@/shared/lib/utils/cn'

export const LeaderboardView = ({
  users,
  user,
  onBackClick,
}: {
  users: Partial<UserInitDataType>[]
  user: UserSessionDataType
  onBackClick: () => void
}) => {
  const { isMobilePlatform } = useInitUser()

  const [backButton] = initBackButton()
  backButton.show()

  useEffect(() => {
    backButton.on('click', () => {
      onBackClick()
      backButton.hide()
    })
  }, [backButton])

  const [ref, isInView] = useInView({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  })

  const isMyUser = (candidate: Partial<UserInitDataType>) =>
    candidate.tg_id === user.tg_id

  const myPlace = users.findIndex((u) => u.tg_id === user.tg_id)

  const sortedUsers = useMemo(
    () =>
      users.sort(
        (u, u2) =>
          (u2 as UserSessionDataType).score - (u as UserSessionDataType).score
      ),
    [users]
  )

  const getItemTextColor = useCallback((idx: number) => {
    switch (idx) {
      case 0:
        return 'gold-gradient'
      case 1:
        return 'silver-gradient'
      case 2:
        return 'bronze-gradient'
      default:
        return 'text-white'
    }
  }, [])

  return (
    <div className="flex flex-col items-center w-full">
      {!isMobilePlatform && (
        <div className="absolute left-[20px] top-[45px]">
          <div className="rotate-180" onClick={onBackClick}>
            <ArrowIcon />
          </div>
        </div>
      )}
      <div className="flex flex-col gap-3 justify-center items-center p-4 mt-4">
        <p className="font-bold text-[28px] leading-[32px] tracking-tighter">
          Leaderboard
        </p>
        <p className="text-[16px] leading-[18px] tracking-tighter">
          Between your friends
        </p>
      </div>
      <div className="overflow-scroll w-full h-[75vh] relative">
        {sortedUsers.map((user: Partial<UserInitDataType>, idx) => (
          <div
            className="flex w-full justify-between gap-6 items-center p-4 border-b-[0.1px] border-gray-300 border-opacity-40"
            key={idx}
            ref={isMyUser(user) ? ref : null}
          >
            <p
              className={cn(
                'italic font-bold text-[24px] leading-[26px] pr-2',
                getItemTextColor(idx)
              )}
            >
              {idx + 1}
            </p>
            <div className="grow">
              <div className="flex gap-4 items-center">
                <AvatarCircle
                  user={user as UserSessionDataType}
                  height="40px"
                  width="40px"
                  bg={getAvatarColor()}
                />
                <p className="tex-[16px] tracking-tighter">
                  {user.username?.length
                    ? user.username
                    : `${user.first_name ?? ''} ${user.last_name ?? ''}`}
                </p>
              </div>
            </div>
            <p className="text-secondary tex-[16px] tracking-tighter">{`${user.score?.toLocaleString('en-US')} XP`}</p>
          </div>
        ))}
        {!isInView && (
          <div className="w-full sticky bottom-0 rounded-t-2xl bg-black">
            <div className="flex w-full justify-between gap-6 items-center p-4">
              <p
                className={cn(
                  'italic font-bold text-[24px] leading-[26px] pr-2',
                  getItemTextColor(myPlace)
                )}
              >
                {myPlace + 1}
              </p>
              <div className="grow">
                <div className="flex gap-4 items-center">
                  <AvatarCircle
                    user={user as UserSessionDataType}
                    height="40px"
                    width="40px"
                    bg={getAvatarColor()}
                  />
                  <p className="tex-[16px] tracking-tighter">
                    {user.username?.length
                      ? user.username
                      : `${user.first_name ?? ''} ${user.last_name ?? ''}`}
                  </p>
                </div>
              </div>
              <p className="text-secondary tex-[16px] tracking-tighter">{`${user.score?.toLocaleString('en-US')} XP`}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
