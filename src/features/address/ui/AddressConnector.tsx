import React, { useState } from 'react'
import { useInitUser } from '@/features/user/hooks/useInitUser'
import { useTon } from '@/features/ton/hooks/useTon'
import { TgIcon } from '@/shared/ui/icons/tg_icon'
import { ArrowIcon } from '@/shared/ui/icons'
import { Button } from '@/shared/ui/Button'
import { truncateAddress } from '@/shared/lib/utils/address'

export const AddressConnector: React.FC = () => {
  const { userInitData: user } = useInitUser()
  const { onTonModalOn, isConnectedWallet, address } = useTon()

  const [isConnectModal, setIsConnectModal] = useState<boolean>(false)

  const handleClicks = async () => {
    if (!isConnectedWallet) {
      await onTonModalOn()
      return
    }
  }

  const isUserAddress = !!user?.address

  return (
    <>
      <div className="w-full px-[18px] py-[20px] bg-[#1C1C1C] rounded-3xl flex justify-between items-center">
        <div className="grow flex gap-4">
          <TgIcon
            color={isUserAddress ? '#0098EA' : '#2E2E2E'}
            sizeX="36px"
            sizeY="36px"
          />
          <div className="flex flex-col gap-[6px] tracking-tighter leading-none">
            {isUserAddress ? (
              <div className="flex gap-1 items-center tracking-tighter">
                <p className="text-primary text-[15px] leading-none">
                  {truncateAddress(user?.address)}
                </p>
                <ArrowIcon />
              </div>
            ) : (
              <p className="text-primary text-[15px]">Connect wallet</p>
            )}
            <p className="text-secondary text-[12px]">
              {isUserAddress ? 'Wallet' : 'Payment method'}
            </p>
          </div>
        </div>
        {isUserAddress ? (
          <p className="text-[13px] leading-none">Active</p>
        ) : (
          <Button text="Add" onClick={handleClicks} />
        )}
      </div>
      {isConnectModal && <div></div>}
    </>
  )
}
