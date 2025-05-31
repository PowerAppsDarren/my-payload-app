'use client'

import React from 'react'

// Simple client-side wrapper without server-side config
export function PayloadProviders({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}