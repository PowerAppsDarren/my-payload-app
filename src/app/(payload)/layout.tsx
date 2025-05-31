/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import React from 'react'
import type { Metadata } from 'next'

import { PayloadProviders } from './providers'
import './custom.scss'

type Args = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Payload Admin',
  description: 'Payload CMS Admin Panel',
}

const Layout = ({ children }: Args) => {
  return (
    <PayloadProviders>
      {children}
    </PayloadProviders>
  )
}

export default Layout