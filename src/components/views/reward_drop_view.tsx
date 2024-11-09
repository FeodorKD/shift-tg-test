import React, { useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { DropRewardType } from '@/types/user'
import ConfettiExplosion from 'react-dom-confetti'
import { CONFETTI_CONFIG, SKINS_TEXTURES } from '@/constants'
import Image from 'next/image'

export const RewardDropView = ({
  reward,
  onClose,
}: {
  reward: DropRewardType
  onClose: () => void
}) => {
  const rewardBlock = useMemo(() => {
    if (!reward) return null
    if (reward?.type === 'skin') {
      if (!reward.skin) return null
      return (
        <div className="flex flex-col items-center gap-3 mt-[15vh]">
          <Image
            src={
              SKINS_TEXTURES[reward.skin?.name as keyof typeof SKINS_TEXTURES]
            }
            alt="XP reward"
            width={106}
            height={118}
            className="mb-[12px]"
          />
          <p className="tracking-tighter font-bold text-[20px] leading-none">
            {reward.skin?.name}
          </p>
          <p className="tracking-tighter text-[12px]">Special skin</p>
        </div>
      )
    } else {
      return (
        <div className="flex flex-col items-center gap-3 mt-[15vh]">
          <Image
            src="/hexagon_xp_drop.png"
            alt="XP reward"
            width={106}
            height={118}
            className="mb-[12px]"
          />
          <p className="tracking-tighter font-bold text-[20px] leading-none">{`${reward.amount?.toLocaleString('en-US')} XP`}</p>
          <p className="tracking-tighter text-[12px]">In-game coin</p>
        </div>
      )
    }
  }, [reward])

  return (
    <div className="absolute left-0 top-0 flex flex-col items-center px-4 pt-[115px] pb-[40px] w-full h-full z-50 bg-black">
      <ConfettiExplosion active={true} config={CONFETTI_CONFIG} />
      <div className="flex flex-col items-center w-full text-center">
        <p className="font-bold tracking-tighter text-[28px]">
          Congratulations! <br /> Your reward!
        </p>
        <p className="tracking-tighter text-[14px] leading-[18px]">
          Your bonus for the week of activity
        </p>
      </div>
      {rewardBlock}
      <div className="flex flex-col gap-4 w-full mt-auto">
        <Button
          text="Later"
          className="bg-[#2E2E2E] text-white w-full"
          onClick={onClose}
        />
        <Button text="Share with friends" className="w-full" />
      </div>
    </div>
  )
}
