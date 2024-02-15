import { IBM_Plex_Sans as FontSans } from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = FontSans({
  weight: ['200', '400', '500', '600', '700'],
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap'
})

export const fontHeader = localFont({
  src: '../../public/fonts/header/TenbyFive-Regular.woff2',
  display: 'swap',
  variable: '--font-header'
})
