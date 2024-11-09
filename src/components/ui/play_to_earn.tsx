import React from 'react'
import ArrowIcon from '@/components/icons/arrow_icon'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const PlayToEarn = () => {
  return (
    <div className="mt-auto w-full px-4 flex flex-col items-center">
      <div className="relative mb-[-110px] z-10">
        <Image src="/skin_play.png" alt="Play skin" width={64} height={64} />
      </div>

      <div className="rounded-3xl bg-gradient p-5 pb-[70px] w-full flex justify-between items-start z-0">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center">
            <p className="font-bold tracking-tighter text-lg">Play to earn</p>
            <ArrowIcon />
          </div>
          <div className="w-fit px-2 py-1 border border-[#D2FF77] font-bold text-[12px] text-[#D2FF77] tracking-tighter rounded-2xl bg-transparent text-center">
            100%
          </div>
        </div>
        <Button text="Start" />
      </div>
    </div>
  )
}
