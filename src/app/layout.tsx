import { DM_Sans } from "next/font/google"
import { ThemeProvider } from "@/src/providers/theme-provider"

import "./globals.css"
import { cn } from "@/src/lib/utils";

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// const fontMono = Geist_Mono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable)}
    >
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
