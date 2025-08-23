import type React from "react"
<<<<<<< HEAD
<<<<<<< HEAD
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "autonoMeal - Every meal, a step toward independence",
  description:
    "AI-powered cooking app that helps you achieve culinary independence through personalized recipes and guided cooking.",
  generator: "v0.app",
=======
import { Geist, Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
=======
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
>>>>>>> c53c712 (built the first frontend layer)
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "autonoMeal - Every meal, a step toward independence",
<<<<<<< HEAD
  description: "AI-powered recipe recommendations tailored to your skill level and available ingredients",
    generator: 'v0.app'
>>>>>>> fd99dd0 (added an updated frontend)
=======
  description:
    "AI-powered cooking app that helps you achieve culinary independence through personalized recipes and guided cooking.",
  generator: "v0.app",
>>>>>>> c53c712 (built the first frontend layer)
}

export default function RootLayout({
  children,
<<<<<<< HEAD
<<<<<<< HEAD
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
=======
}: {
=======
}: Readonly<{
>>>>>>> c53c712 (built the first frontend layer)
  children: React.ReactNode
}>) {
  return (
<<<<<<< HEAD
    <html lang="en" className={`${geist.variable} ${montserrat.variable} antialiased`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
>>>>>>> fd99dd0 (added an updated frontend)
=======
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
>>>>>>> c53c712 (built the first frontend layer)
    </html>
  )
}
