"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      themes={["light", "dark", "mushaf", "rawdah", "sea", "night", "system"]}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
