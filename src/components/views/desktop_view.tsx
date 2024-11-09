import React from 'react'
import QRCode from 'react-qr-code'
import { APP_LINK } from '@/constants'

export const DesktopView = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-center items-center tracking-tighter font-bold text-3xl">
      <QRCode
        className="mb-10"
        size={256}
        style={{ height: 'auto' }}
        value={APP_LINK}
        viewBox={`0 0 256 256`}
      />
      <p className="text-center">Desktop is boring</p>
      <p className="text-center">Play on your moblie!</p>
    </div>
  )
}
