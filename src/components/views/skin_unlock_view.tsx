import React from 'react'
import { Button } from '@/components/ui/button'
import { Skin } from '@/types/skins'
import Image from 'next/image'
import { SKINS_TEXTURES } from '@/constants'
import { useUtils } from '@telegram-apps/sdk-react'
import { useInitUser } from '@/hooks/useInitUser'

type SkinUnlockViewProps = {
  skin: Skin
  onClose: () => void
}

export const SkinUnlockView = ({ skin, onClose }: SkinUnlockViewProps) => {
  const utils = useUtils()
  const { userInitData } = useInitUser()

  const onShareClick = () => {
    utils.shareURL(
      `t.me/TestMyAppSHiftAABot/shift_fe?startapp=${userInitData?.tg_id}`,
      'I owned new skin!  Take a look on it in new cool app!'
    )
  }

  return (
    <div className="w-screen h-screen pt-[56px] px-4 pb-8 flex flex-col items-center fixed bg-black top-0 left-0 z-30">
      <Image
        width={126}
        height={140}
        src={SKINS_TEXTURES[skin.name as keyof typeof SKINS_TEXTURES]}
        alt="Skin hexagon"
      />
      <div className="flex flex-col gap-3 text-center mt-[48px]">
        <p className="font-bold tracking-tighter text-[28px]">
          {`${skin.name} skin is active`}
        </p>
        <p className="tracking-tighter text-[14px]">
          Only 20% of users have this item
        </p>
      </div>
      <div className="w-full flex flex-col gap-3 mt-auto">
        <Button
          text="Close"
          className="bg-[#2E2E2E] text-white"
          onClick={onClose}
        />
        <Button text="Share with friends" onClick={onShareClick} />
      </div>
    </div>
  )
}
