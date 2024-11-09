type Skin = {
  id: string
  name: string
  required_xp: number
  open_from: number
  price_ton: number
  owned: boolean
}

type BuyType = 'ton' | 'xp'

export type { Skin, BuyType }
