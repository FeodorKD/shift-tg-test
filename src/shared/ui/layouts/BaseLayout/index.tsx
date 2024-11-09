import React from 'react'
import { Footer } from '@/shared/ui/Footer'

type BaseLayoutProps = {
  children: React.ReactNode
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">{children}</div>
      <Footer />
    </div>
  )
}
