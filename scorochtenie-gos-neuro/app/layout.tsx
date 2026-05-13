import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Бесплатный урок по скорочтению для детей 5–15 лет — Национальный проект РФ',
  description:
    'Национальный проект РФ по увеличению скорости чтения у детей. Бесплатный онлайн-урок 60 минут с педагогом. Возраст 5–15 лет. Запись открыта.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={roboto.variable}>
      <body>{children}</body>
    </html>
  )
}
