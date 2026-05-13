import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const sans = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: true,
});

const title =
  'Бесплатная лекция-практикум: как повысить успеваемость ребёнка в школе с помощью современных технологий — Зерокодер';
const description =
  'Бесплатная онлайн-лекция-практикум для родителей школьников 8–15 лет. 120 минут практики: соберём ИИ-помощника на учебнике вашего ребёнка, закроем пробелы в знаниях и сэкономим до 150 000 ₽ в год на репетиторах.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title,
    description,
    siteName: 'Зерокодер',
  },
  twitter: { card: 'summary_large_image', title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={sans.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Перейти к содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
