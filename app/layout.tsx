import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { meta } from '@/lib/content'

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body>{children}</body>
    </html>
  )
}
