'use client'

import { type PropsWithChildren, useEffect, useState } from 'react'
import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  SDKProvider,
  useLaunchParams,
  useMiniApp,
  useThemeParams,
  useViewport,
} from '@telegram-apps/sdk-react'

import { AppRoot } from '@telegram-apps/telegram-ui'

import { useDidMount } from '@/hooks/useDidMount'

import './styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useTelegramMock } from '@/hooks/useTelegramMock'
import AppInitView from '@/components/views/app_init_view'

const queryClient = new QueryClient()

function App(props: PropsWithChildren) {
  const lp = useLaunchParams()
  const miniApp = useMiniApp()
  const themeParams = useThemeParams()
  const viewport = useViewport()

  useEffect(() => {
    return bindMiniAppCSSVars(miniApp, themeParams)
  }, [miniApp, themeParams])

  useEffect(() => {
    return bindThemeParamsCSSVars(themeParams)
  }, [themeParams])

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport)
  }, [viewport])

  return (
    <AppRoot
      appearance={miniApp.isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      {props.children}
    </AppRoot>
  )
}

function RootInner({ children }: PropsWithChildren) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock()
  }

  const debug = useLaunchParams().startParam === 'debug'

  return (
    <QueryClientProvider client={queryClient}>
      <SDKProvider acceptCustomStyles debug={debug}>
        <App>{children}</App>
      </SDKProvider>
    </QueryClientProvider>
  )
}

export function Root(props: PropsWithChildren) {
  const didMount = useDidMount()
  const [isInitScreen, setIsInitScreen] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setIsInitScreen(true), 1500)
  }, [])

  return didMount && isInitScreen ? <RootInner {...props} /> : <AppInitView />
}
