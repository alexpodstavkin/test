import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title:
    "Грант на обучение нейросетям для детей 10–14 лет · Университет Зерокодер",
  description:
    "Получите грант на обучение вашего ребёнка в школе профессий будущего. Годовая программа по нейросетям, 12 digital-профессий, 27 проектов в портфолио. С грантом — от 71 700 ₽.",
};

// Без maximum-scale — не ограничиваем пользователя.
// Стандартная initial-scale=1 + width=device-width предотвращает iOS auto-zoom при фокусе на инпут.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
