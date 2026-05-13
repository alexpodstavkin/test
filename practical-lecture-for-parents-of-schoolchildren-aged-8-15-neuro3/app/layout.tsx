import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    '14 навыков, которые нужны вашему ребёнку 8–15 лет — Зерокодер',
  description:
    'Бесплатная онлайн-лекция-практикум для родителей. Покажем, какие 14 навыков нужны ребёнку 8–15 лет для успешной учёбы и жизни, и как нейросети помогают их развивать.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FBFBFB',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
