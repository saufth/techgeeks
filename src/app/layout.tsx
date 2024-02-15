import React from 'react'
import { type Metadata, type Viewport } from 'next'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import ThemeProvider from '@/components/layouts/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import GoogleSearchScript from '@/components/layouts/google-seacrch-script'
import { cn } from '@/lib/utils'
import { fontSans, fontHeader } from '@/lib/fonts'
import { services } from '@/config/services'
import { siteConfig } from '@/config/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} ✌ ${siteConfig.slogan}`,
    template: `${siteConfig.name} ✌ %s`
  },
  description: siteConfig.description,
  keywords: [
    siteConfig.name,
    ...services.map(({ title }) => title)
  ],
  authors: siteConfig.author,
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  applicationName: siteConfig.name,
  generator: 'Next.js 13',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  userScalable: true,
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  colorScheme: 'normal'
}

export default function RootLayout ({ children }: React.PropsWithChildren) {
  return (
    <html className={cn(fontSans.variable, fontHeader.variable, 'font-sans antialiased !scroll-smooth select-none')} lang='es' suppressHydrationWarning>
      <body className='bg-gradient-to-b from-secondary to-background min-h-screen'>
        <ThemeProvider attribute='class' defaultTheme='light' forcedTheme='light'>
          {children}
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
        <GoogleSearchScript />
      </body>
    </html>
  )
}
