import React from 'react'
import { Footer } from '@/components/layout/footer'

type BaseLayoutProps = {
  children: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">{children}</div>
      <Footer />
    </div>
  )
}

export default BaseLayout
