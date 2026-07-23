import type { Metadata } from 'next'
import './globals.css'
import { AutoScale } from '@/components/AutoScale'

// Порт HTML-прототипа: шрифтовой стек как в прототипе (SB Sans Display → system),
// Manrope НЕ подключаем — сохраняем исходный вид.

export const metadata: Metadata = {
  title: 'Зерокодер — Бесплатный урок цифровых технологий для детей 8–17 лет',
  description:
    'Бесплатный онлайн-урок цифровых технологий для детей 8–17 лет: нейросети, вайбкодинг, Roblox и Python. За 60 минут ребёнок соберёт свой первый проект и пройдёт профориентацию.',
  icons: { icon: '/test/zerocoder-besplatny-urok/logo-icon.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <AutoScale />
        {children}
      </body>
    </html>
  )
}
