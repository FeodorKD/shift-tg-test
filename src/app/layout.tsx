'use client'

import React, { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import BaseLayout from '@/components/layout/base'
import { TabProvider } from '@/providers/tab_provider'

import 'react-loading-skeleton/dist/skeleton.css'
import './globals.css'
import { Root } from '@/root/root'
import { ToastProvider } from '@/providers/toast_provider'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { MANIFEST_TON } from '@/constants'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Root>
          <TonConnectUIProvider
            manifestUrl={MANIFEST_TON}
            // actionsConfiguration={{
            //   twaReturnUrl: 'https://t.me/<YOUR_APP_NAME>',
            // }}
          >
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
