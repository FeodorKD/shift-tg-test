import { useMutation, useQuery } from '@tanstack/react-query'
import useStore from '@/core/store/useStore'
import { useCallback, useState } from 'react'
import { useTon } from '@/features/ton/hooks/useTon'
import { BuyType, Skin } from '@/features/skins/types'
import { useToast } from '@/features/toasts/providers'
import { buySkinXP, getSkinsList, selectActiveSkin } from '@/features/skins/api'
import { DEFAULT_SKIN } from '@/features/skins/constants'

export const useSkins = (userId: string, rawData: string) => {
  const [newSkin, setNewSkin] = useState<Skin | null>(null)
  const [selectedSkin, setSelectedSkin] = useState<Skin | null>(null)
  const [buyType, setBuyType] = useState<BuyType>('xp')

  const { user } = useStore()
  const showToast = useToast()
  const { isConnectedWallet, onTonModalOn, onSendTransaction } = useTon()
  const { updateScore, setSkins, ownNewSkin, skins, selectSkin } = useStore(
    (state) => state
  )

  const { isError: isSkinsFetchError, isLoading: isSkinsLoading } = useQuery({
    queryKey: ['skins_list'],
    queryFn: () => {
      if (!rawData.length || !userId.length) return
      return getSkinsList(userId, rawData).then((d) => setSkins(d))
    },
  })

  const {
    isError: isBuySkinXPError,
    isPending: isBuySkinXPLoading,
    mutate: triggerBuySkinXP,
  } = useMutation({
    mutationFn: buySkinXP,
    onSuccess: (data) => {
      updateScore(data.score)
      ownNewSkin(data.skin.id)
      setNewSkin(data.skin)
      setSelectedSkin(null)

      showToast(`You claimed ${data.score}XP`, 'success')
    },
    onError: () => showToast('Skin buy failed', 'error'),
  })

  const {
    isError: isSelectSkinError,
    isPending: isSelectSkinLoading,
    mutate: triggerSelectSkin,
  } = useMutation({
    mutationFn: selectActiveSkin,
    onSuccess: (data) => {
      selectSkin(data.active_skin_id ? data.active_skin_id : DEFAULT_SKIN.id)
    },
    onError: () => showToast('Error while setting the active skin', 'error'),
  })

  const isNewSkinView = newSkin !== null
  const dropNewSkinView = () => setNewSkin(null)

  const onXPSkinBuy = (skin: Skin) => {
    if (!user) return
    if ((user?.score as number) <= skin.required_xp) {
      showToast('Insufficient balance', 'error')
      return
    }

    triggerBuySkinXP({
      payload: { skin_id: skin.id, purchase_type: 'xp' },
      rawData,
      user,
    })
  }

  const onTonBuy = useCallback(
    async (skin: Skin) => {
      if (!isConnectedWallet) {
        await onTonModalOn()
        return
      }

      if (!user) return

      await onSendTransaction(skin.price_ton, (boc) => {
        try {
          triggerBuySkinXP({
            payload: {
              skin_id: skin.id,
              purchase_type: 'ton',
              check_str: boc as string,
            },
            rawData,
            user,
          })
        } catch (err) {
          showToast('Skin buy error', 'error')
        }
      })
    },
    [isConnectedWallet, rawData, showToast, user]
  )

  const onSkinChange = (skinId: string) => {
    if (!skinId || !user) return
    triggerSelectSkin({ skin_id: skinId, rawData, user })
  }

  return {
    isSkinsFetchError,
    isSkinsLoading,
    skinsList: skins,
    isBuySkinXPLoading,
    isBuySkinXPError,
    triggerBuySkinXP,

    selectedSkin,
    setSelectedSkin,

    newSkin,
    setNewSkin,
    isNewSkinView,

    dropNewSkinView,
    onXPSkinBuy,
    onTonBuy,

    buyType,
    setBuyType,

    isSelectSkinError,
    isSelectSkinLoading,
    triggerSelectSkin,
    onSkinChange,
  }
}
