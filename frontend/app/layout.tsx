import { Navbar } from "@/components/layout/navbar"
import "./globals.css"
import type { ReactNode } from "react"
import { Footer } from "@/components/layout/footer"

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
