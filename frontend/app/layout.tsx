import { Navbar } from "@/components/layout/navbar"
import "./globals.css"
import type { ReactNode } from "react"
import { Footer } from "@/components/layout/footer"
import { Contact } from "@/components/layout/contact"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Swings Islandshästar",
  description: "Swings Islandshästar - Boka din ridtur idag! Vi erbjuder ridturer med islandshästar året runt. Vi har allt från kortare nybörjarturer på lugna skogsstigar till längre dagsutflykter genom öppna landskap och vackra ridleder. Våra hästar är trygga, välutbildade och anpassade för både barn och vuxna.",
};

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
        <Contact/>
        <Footer />
      </body>
    </html>
  )
}
