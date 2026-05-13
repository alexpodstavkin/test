import type { Metadata } from 'next';
import { Manrope, Unbounded } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-unbounded',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Скорочтение Matrius — поможем ребёнку не потерять знания за лето',
  description:
    'Бесплатный шоу-урок по скорочтению + 3 подарка: чек-листы и читательский дневник. Подготовим ребёнка к 1 сентября — без стресса.',
  openGraph: {
    type: 'website',
    title: 'Скорочтение Matrius — летняя программа',
    description:
      'Поможем ребёнку не потерять школьные знания за лето. Бесплатный шоу-урок + 3 подарка.',
    locale: 'ru_RU',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  );
}
