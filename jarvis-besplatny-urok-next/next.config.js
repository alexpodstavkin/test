/** @type {import('next').NextConfig} */
// Локально (dev / npm start) — обычный режим без basePath.
// Для GitHub Pages собираем так:
//   EXPORT=1 NEXT_PUBLIC_BASE_PATH=/test/jarvis-besplatny-urok npm run build
// Тогда Next кладёт статику в out/ и префиксует свои чанки basePath'ом.
// ⚠️ Пути к файлам из public/ (логотип, аватары, uicons) Next НЕ префиксует —
// они собираются вручную через NEXT_PUBLIC_BASE_PATH (см. lib/basePath.ts).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const isExport = process.env.EXPORT === '1'

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  ...(isExport
    ? { output: 'export', trailingSlash: true, basePath, assetPrefix: basePath }
    : {}),
}
module.exports = nextConfig
