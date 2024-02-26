import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AlephiumWalletProvider } from '@alephium/web3-react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AlephiumWalletProvider network="devnet" addressGroup={0}>
      <Component {...pageProps} />
    </AlephiumWalletProvider>
  )
}
