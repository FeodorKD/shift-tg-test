'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { ProgressViewSkeleton } from '@/components/skeleton/progress_view_skeleton'
import { DEFAULT_SKIN, LEVELS } from '@/constants'
import { cn, getLevelBoosts } from '@/lib/utils'
import XPProgressBar from '@/components/ui/progress_line'
import { LevelType } from '@/types'
import { useInitUser } from '@/hooks/useInitUser'
import { useSkins } from '@/hooks/useSkins'
import { SkinItem } from '@/components/ui/skin_item'
import { Spinner } from '@/components/ui/spinner'
import { SkinUnlockView } from '@/components/views/skin_unlock_view'
import { BuySkinModal } from '@/components/ui/buy_skin_modal'
import { Button } from '@/components/ui/button'
import { BuyBoostModal } from '@/components/ui/buy_boost_modal'
import { initBackButton } from '@telegram-apps/sdk-react'

type ProgressViewProps = {
  onClose: () => void
}

export const ProgressView = ({ onClose }: ProgressViewProps) => {
  const {
    userInitData: user,
    userLaunchData,
    triggerUserInit,
    isUserSessionLoading,
    initDataRaw,
    onLevelUpgrade,
    onTonLevelUpgrade,
    isLevelUpgradeLoading,
    setIsBuyModal,
    isBuyModal,
    activeModalTab,
    setActiveModalTab,
  } = useInitUser()

  const {
    isSkinsLoading,
    skinsList,
    dropNewSkinView,
    selectedSkin,
    newSkin,
    isBuySkinXPLoading,
    buyType,
    setBuyType,
    onXPSkinBuy,
    setSelectedSkin,
    onSkinChange,
    isSelectSkinLoading,
    onTonBuy,
  } = useSkins(user?.id as string, initDataRaw as string)
  const [backButton] = initBackButton()
  backButton.show()
  const [currentLevelTab, setCurrentLevelTab] =
    useState<keyof typeof LEVELS>('bronze')

  useEffect(() => {
    backButton.on('click', () => {
      onClose()
      backButton.hide()
    })

    if (userLaunchData) {
      triggerUserInit(userLaunchData)
    }
  }, [userLaunchData])

  const levelData = useMemo(() => {
    return LEVELS[currentLevelTab]
  }, [currentLevelTab])

  const levelText = (level: LevelType) => {
    const levelKey = level.name.toLowerCase()
    const levelXPEnd = level.endScore?.toLocaleString()

    let text = ''

    if (!isLevelReached(level)) {
      text = `The level is available from ${levelXPEnd} XP`
    } else {
      switch (levelKey) {
        case 'bronze':
          text = 'You get access to the first level of the game'
          break
        case 'platinum':
          text =
            'You have reached the maximum level with the most profitable options'
          break
        default:
          text = `You have reached the ${levelKey} level`
      }
    }

    return text
  }

  const isLevelReached = (level: LevelType) => {
    if (!user) return false
    return user.status.level >= level.id
  }

  const boosts = useMemo(() => getLevelBoosts(levelData), [levelData])

  const onModalOn = () => setIsBuyModal(true)
  const onModalOff = () => setIsBuyModal(false)

  const activeSkinId =
    user?.active_skin_id === null ? 'default' : user?.active_skin_id

  if (isUserSessionLoading || !user) return <ProgressViewSkeleton />

  return (
    <>
      <div className="py-8 px-4 flex flex-col items-center w-full">
        <div className="flex flex-col gap-3 items-center w-full">
          <p className="text-[28px] leading-8 font-bold">Progress</p>
          <p className="text-">Improve your game</p>
        </div>
        <div className="flex gap-2 items-center mt-5">
          {Object.values(LEVELS).map(({ name }) => (
            <div
              className={cn(
                'px-3 py-[10px] rounded-2xl text-[13px] leading-[13px] tracking-tighter',
                currentLevelTab?.toLowerCase() === name.toLowerCase()
                  ? 'bg-white text-black'
                  : 'bg-[#1C1C1C] text-white'
              )}
              key={name}
              onClick={() =>
                setCurrentLevelTab(name.toLowerCase() as keyof typeof LEVELS)
              }
            >
              {name}
            </div>
          ))}
        </div>
        <div className="rounded-3xl bg-[#1C1C1C] p-5 w-full mt-6 flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-2xl tracking-tighter font-bold">
              {levelData.name}
            </p>
            <div
              className={cn(
                'text-[11px] tracking-tighter rounded-2xl p-[7px] grid place-items-center min-w-[40px]',
                isLevelReached(levelData)
                  ? 'bg-white text-black'
                  : 'bg-[#2E2E2E] text-secondary'
              )}
            >
              {isLevelReached(levelData)
                ? user.max_score >= levelData.endScore
                  ? 'Completed'
                  : 'Now'
                : 'Locked'}
            </div>
          </div>
          <p className="text-secondary tracking-tighter text-[12px]">
            {levelText(levelData)}
          </p>
          {isLevelReached(levelData) && (
            <XPProgressBar
              currentXP={user.max_score}
              goalXP={levelData.endScore as number}
              isInfiniteEnd={levelData.name === 'Platinum'}
            />
          )}
          {user?.status?.upgrade_available &&
            user.status.level === levelData.id && (
              <Button text="Boost" onClick={onModalOn} />
            )}
        </div>
        <p className="py-3 text-center w-full">{`Available with ${levelData.name}`}</p>
        <div className="rounded-3xl bg-[#1C1C1C] p-5 w-full flex flex-col gap-5">
          {boosts.map((boost) => {
            const Icon = boost.icon
            return (
              <div className="flex gap-4" key={boost.title}>
                <div className="w-[40px] h-[40px] grid place-items-center bg-[#2E2E2E] rounded-full">
                  <Icon />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <p className="text-[15px] text-primary">{boost.title}</p>
                  <p
                    className="text-[12px] text-secondary boost-text"
                    dangerouslySetInnerHTML={{ __html: boost.text }}
                  ></p>
                </div>
              </div>
            )
          })}
        </div>
        <p className="py-3 text-center w-full">Special skins</p>
        {isSkinsLoading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col gap-3 w-full">
            {[DEFAULT_SKIN, ...(skinsList ?? [])]?.map((skin) => {
              return (
                <SkinItem
                  skin={skin}
                  key={skin.id}
                  activeId={activeSkinId as string}
                  user={user}
                  onSelect={setSelectedSkin}
                  onSkinSwitch={onSkinChange}
                  iSwitchLoading={isSelectSkinLoading}
                />
              )
            })}
          </div>
        )}
      </div>
      {newSkin && <SkinUnlockView skin={newSkin} onClose={dropNewSkinView} />}
      {selectedSkin && (
        <BuySkinModal
          selectedTab={buyType}
          skin={selectedSkin}
          setModalState={setBuyType}
          onXPBuy={onXPSkinBuy}
          onTonBuy={onTonBuy}
          isBuyLoading={isBuySkinXPLoading}
          onClose={() => setSelectedSkin(null)}
        />
      )}
      {isBuyModal && (
        <BuyBoostModal
          level={user.status}
          isBuyLoading={isLevelUpgradeLoading}
          setModalState={setActiveModalTab}
          selectedTab={activeModalTab}
          onXPBuy={onLevelUpgrade}
          onTonBuy={onTonLevelUpgrade}
          onClose={onModalOff}
        />
      )}
    </>
  )
}
