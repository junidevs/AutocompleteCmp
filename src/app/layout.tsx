"use client"
import { ReactNode } from "react"

import "./globals.css"
import GlobalWrapper from "@/app/providers/GlobalWrapper/GlobalWrapper"
import MswProvider from "@/app/providers/MswProvider"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // here we could use i18next / i18n ( for react ) for internalization
    <html suppressHydrationWarning={true} lang="en">
      <body
        suppressHydrationWarning={true}
        className="min-h-screen bg-custom-gradient"
      >
        <main>
          <MswProvider>
            <GlobalWrapper>{children}</GlobalWrapper>
          </MswProvider>
        </main>
      </body>
    </html>
  )
}
