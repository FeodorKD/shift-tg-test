import React from 'react'
import { CurrencyIcon } from '@/components/icons'

const AppInitView = () => {
  return (
    <div className="flex items-center justify-center bg-black w-full h-full min-h-[100vh]">
      <CurrencyIcon sizeX="48px" sizeY="48px" className="animate-bounce" />
    </div>
  )
}

export default AppInitView
