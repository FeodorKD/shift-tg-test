'use client'

import React, { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { BaseLayout } from '@/shared/ui/layouts/BaseLayout'
import { Root } from '@/core/provider/root/root'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { MANIFEST_TON } from '@/core/constants'
import { ToastProvider } from '@/features/toasts/providers'
import { TabProvider } from '@/features/tabs/providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Root>
          <TonConnectUIProvider manifestUrl={MANIFEST_TON}>
            <ToastProvider>
              <TabProvider>
                <BaseLayout>{children}</BaseLayout>
              </TabProvider>
            </ToastProvider>
          </TonConnectUIProvider>
        </Root>
      </body>
    </html>
  )
}
