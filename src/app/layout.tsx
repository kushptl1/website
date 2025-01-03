import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/styles/theme-provider'
import { cn } from '@/styles/lib/utils'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'Kush Patel - Portfolio',
  description: 'a site where I document my projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={cn(
        "h-full bg-background transition-colors duration-300"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen relative">
            <div className="flex-1 flex flex-col">
              <main className="container mx-auto mt-4 px-4 flex-1">
                {children}
		<Analytics />
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

