import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Всероссийская летняя программа подготовки школьников 2026 — бесплатный урок по нейросетям',
  description:
    'С 1 сентября 2026 года российские школьники изучают профиль «Искусственный интеллект». Бесплатный вводный урок в партнёрстве с Университетом Зерокодер для школьников 5–8 классов. За один час подросток создаст своего личного ИИ-репетитора.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
