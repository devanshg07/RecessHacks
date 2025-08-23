<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c53c712 (built the first frontend layer)
'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'
<<<<<<< HEAD
=======
"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
>>>>>>> fd99dd0 (added an updated frontend)
=======
>>>>>>> c53c712 (built the first frontend layer)

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
