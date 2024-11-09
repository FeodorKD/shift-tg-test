import React, { useEffect, useMemo } from 'react'
import { Button } from '@/shared/ui/Button'
import { useInitUser } from '@/features/user/hooks/useInitUser'
import { Spinner } from '@/shared/ui/Spinner'
import ConfettiExplosion from 'react-dom-confetti'
import { initUtils } from '@telegram-apps/sdk'
import { UserSessionDataType } from '@/features/user/types'
import { useToast } from '@/features/toasts/providers'
import { MAX_INVITES_LIMIT } from '@/core/constants'
import { LeaderboardTops } from '@/features/leaderboard/ui/LeaderboardTops'
import { ZoneViewSkeleton } from '@/features/skeletons/ui/ZoneSkeleton'
import { LeaderboardView } from '@/page/LeaderboardPage'
import { LEADERBOARD_MOCK } from '@/features/leaderboard/constants'
import { CONFETTI_CONFIG } from '@/shared/lib/confetti/config'
import { ArrowIcon, CurrencyIcon } from '@/shared/ui/icons'
import { AvatarCircle } from '@/features/skins/ui/AvatarCircle'
import { CloseButton } from '@/shared/ui/CloseTrigger'
import { getAvatarColor } from '@/features/user/utils'

export const ZoneView = () => {
  const {
    triggerUserInit,
    isUserSessionLoading,
    userLaunchData,
    userInitData,
    isClaimRewardLoading,
    onClaimReward,
  } = useInitUser()
  const utils = initUtils()
  const showToast = useToast()
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const [isLeaderBoardState, setIsLeaderBoardState] =
    React.useState<boolean>(false)

  useEffect(() => {
    if (userLaunchData) triggerUserInit(userLaunchData)
  }, [userLaunchData])

  const handleModalState = () => {
    if (
      (userInitData?.referrals?.referred_users?.length ?? 0) >=
      MAX_INVITES_LIMIT
    ) {
      showToast('Invites limit exceeded', 'error')
      return
    }
    setIsModalOpen(!isModalOpen)
  }
  const handleLeaderboardState = () =>
    setIsLeaderBoardState(!isLeaderBoardState)

  const generateHeaderComponent = useMemo(() => {
    if (!userInitData) return null

    const listToDisplay = [
      userInitData,
      ...(userInitData?.referrals?.referred_users ?? []),
    ].sort((u1, u2) => (u2.score as number) - (u1.score as number))

    if (listToDisplay.length === 1)
      return <LeaderboardTops user={userInitData} isPersonal place={0} />

    if (listToDisplay.length === 2) {
      return (
        <div className="flex w-full justify-around items-end">
          <LeaderboardTops
            user={listToDisplay[0] as UserSessionDataType}
            isPersonal={listToDisplay[0].username === userInitData.username}
            place={0}
          />
          <LeaderboardTops
            user={listToDisplay[1] as UserSessionDataType}
            isPersonal={listToDisplay[1].username === userInitData.username}
            width="48px"
            height="48px"
            place={1}
          />
        </div>
      )
    }

    if (listToDisplay.length >= 3) {
      const myPlace = listToDisplay.findIndex(
        (i) => i.tg_id === userInitData.tg_id
      )
      const requiredUser = [0, 1].includes(myPlace)
        ? listToDisplay[2]
        : listToDisplay[myPlace]
      const requiredPlace = [0, 1].includes(myPlace) ? 2 : myPlace

      return (
        <div className="flex w-full justify-around items-end">
          <LeaderboardTops
            user={listToDisplay[1] as UserSessionDataType}
            isPersonal={listToDisplay[1].username === userInitData.username}
            width="48px"
            height="48px"
            place={1}
          />
          <LeaderboardTops
            user={listToDisplay[0] as UserSessionDataType}
            isPersonal={listToDisplay[0].username === userInitData.username}
            place={0}
          />
          <LeaderboardTops
            user={requiredUser as UserSessionDataType}
            isPersonal={requiredUser.username === userInitData.username}
            width="48px"
            height="48px"
            place={requiredPlace}
          />
        </div>
      )
    }
  }, [userInitData])

  if (isUserSessionLoading || !userInitData) return <ZoneViewSkeleton />

  if (isLeaderBoardState)
    return (
      <LeaderboardView
        users={
          LEADERBOARD_MOCK.concat(LEADERBOARD_MOCK)
            .concat(LEADERBOARD_MOCK)
            .concat(userInitData) ?? []
        }
        onBackClick={handleLeaderboardState}
        user={userInitData}
      />
    )

  return (
    <>
      <ConfettiExplosion active={true} config={CONFETTI_CONFIG} />
      <div className="py-8 px-4 flex flex-col items-center w-full gap-6">
        <div className="flex gap-[10px] items-center">
          <p className="text-[28px] leading-8 tracking-tighter font-bold">
            Leaderboard
          </p>
          <button onClick={handleLeaderboardState}>
            <ArrowIcon />
          </button>
        </div>
        {generateHeaderComponent}

        <div className="bg-[#1C1C1C] p-5 flex flex-col gap-3 w-full rounded-[24px] justify-center items-center">
          <div className="flex gap-1 mt-3 items-center justify-center">
            <CurrencyIcon
              sizeX="34px"
              sizeY="34px"
              color="white"
              className="relative top-[1px]"
            />
            <p className="text-[32px] leading-8 text-center break-all">
              {userInitData.reward.toLocaleString('en-US', {})}
            </p>
          </div>
          <p className="text-secondary tracking-tighter text-[14px] leading-[18px] text-center">
            Invite and get 1,000 XP <br /> rewards for you and frens
          </p>
          <Button
            disabled={userInitData?.reward <= 0}
            text={isClaimRewardLoading ? <Spinner /> : 'Claim'}
            className="w-fit"
            onClick={() => {
              if (isClaimRewardLoading) return
              onClaimReward(userInitData.id)
            }}
          />
        </div>

        {!!userInitData?.referrals?.referred_users?.length ? (
          <div className="flex flex-col w-full my-4 gap-8 overflow-scroll">
            {userInitData?.referrals?.referred_users.map(
              // @ts-ignore
              (u: UserSessionDataType) => (
                <div
                  key={u.tg_id as string}
                  className="flex gap-4 items-center"
                >
                  <AvatarCircle
                    user={u as UserSessionDataType}
                    height="36px"
                    width="36px"
                    bg={getAvatarColor()}
                  />
                  <p className="tracking-tighter text-[16px] leading-[14px]">
                    {u.username?.length ? u.username : 'Username not provided'}
                  </p>
                  <p className="flex-1 justify-self-end text-right">
                    +1,000 XP
                  </p>
                </div>
              )
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-[8px] items-center">
            <p className="text-[16px] leading-[18px]">No friends yet</p>
            <p className="text-secondary text-[12px] leading-[13px]">
              Invite to earn XP
            </p>
          </div>
        )}
        <Button
          text="Invite a friend"
          className="rounded-[16px] mt-auto w-full min-h-[44px]"
          onClick={handleModalState}
        />
        {isModalOpen && (
          <div className="bg-[#1D1D20] px-[15px] py-8 w-full absolute bottom-0 left-0 rounded-t-[16px] flex flex-col items-center justify-center">
            <div
              className="absolute right-5 top-5"
              onClick={() => setIsModalOpen(false)}
            >
              <CloseButton />
            </div>
            <p className="mb-3">Invite a friends</p>
            <p className="mb-6 text-center">
              Share the link with your friends <br /> and your lovely dog
            </p>
            <Button
              text="Copy link"
              className="rounded-[16px] mt-auto w-full min-h-[44px] bg-[#2E2E2E] text-primary mb-4"
              onClick={() =>
                navigator.clipboard
                  .writeText(
                    `t.me/TestMyAppSHiftAABot/shift_fe?startapp=${userInitData.tg_id}`
                  )
                  .then(() => showToast('Referral link is copied', 'success'))
              }
            />
            <Button
              text="Share"
              className="rounded-[16px] mt-auto w-full min-h-[44px]"
              onClick={() =>
                utils.shareURL(
                  `t.me/TestMyAppSHiftAABot/shift_fe?startapp=${userInitData.tg_id}`,
                  'Look! Some cool app here!'
                )
              }
            />
          </div>
        )}
      </div>
    </>
  )
}
