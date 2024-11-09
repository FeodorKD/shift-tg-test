import {
  SendTransactionRequest,
  useTonAddress,
  useTonConnectUI,
  useTonWallet,
} from '@tonconnect/ui-react'
import { toNano } from '@ton/ton'
import { RECEIVER_TON_ADDRESS } from '@/constants'
import { useToast } from '@/providers/toast_provider'

export const useTon = () => {
  const address = useTonAddress()
  const showToast = useToast()
  const [tonConnectUI] = useTonConnectUI()

  const isConnectedWallet = address !== ''

  const prepareTransaction = (amount: number) => {
    const transaction: SendTransactionRequest = {
      validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes
      messages: [
        {
          address: RECEIVER_TON_ADDRESS,
          amount: toNano(amount).toString(),
        },
      ],
    }

    return transaction
  }

  const onSendTransaction = async (
    amount: number,
    onResolve: (payload: unknown) => unknown
  ) => {
    if (!isConnectedWallet) {
      return
    }

    try {
      const res = await tonConnectUI.sendTransaction(prepareTransaction(amount))
      if (res.boc) {
        onResolve(res.boc)
      }
    } catch (err) {
      showToast('Wallet transaction error', 'error')
    }
  }

  const onTonModalOn = () => tonConnectUI.openModal()
  const onTonModalOff = () => tonConnectUI.closeModal()

  return {
    address,
    isConnectedWallet,
    onSendTransaction,
    onTonModalOn,
    onTonModalOff,
  }
}
