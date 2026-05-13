# Лекция-практикум для родителей школьников 8–15 лет

Лендинг под бесплатную онлайн-лекцию-практикум Зерокодера для родителей школьников: «Как поднять успеваемость ребёнка без репетиторов и сэкономить более 150 000 ₽ в год».

## Стек

- **Next.js 14** (App Router)
- **TypeScript** strict
- **Tailwind CSS 3.4**
- **Manrope** через `next/font/google`

## Дизайн-система

Tilda-aligned дизайн-система Зерокодера:

- Палитра: `#9B51E0` purple-heart + `#B15EFF` heliotrope + `#00E48D` emerald CTA + `#222222` ink + `#262626` shark + `#F5F2FA` tinted-lavender фон.
- Шрифт: Manrope (400-800), кириллица + латиница.
- Радиусы до 20px, кнопки 10px.
- Transitions: только `opacity 0.2s ease-in-out`.
- Бенто-сетка с акцентными карточками и dark-секциями (Hero, Альтернатива, Финальный CTA, 5-я бенто-карточка с выводом).
- Floating CTA с rect-based логикой появления (после Hero, скрыт на альтернативе и финальной форме).
- Fluid auto-scaling: viewport ≤1440 → 16px base, 1440–2400 → плавный рост font-size до 26.67px, ≥2400 → clamped.

## Структура

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx               композиция секций
│   ├── globals.css            дизайн-токены + Tailwind layers
│   └── components/
│       ├── Hero.tsx           +DATETIME пилл
│       ├── Gifts.tsx          переиспользуется в 2 местах
│       ├── Prices.tsx
│       ├── Program.tsx
│       ├── Research.tsx       4 ячейки + 5-я бенто-вывод
│       ├── BeforeAfter.tsx
│       ├── Speaker.tsx
│       ├── Trust.tsx          полоса доверия перед CTA
│       ├── FinalCta.tsx       +DATETIME пилл
│       ├── Footer.tsx
│       ├── FloatingCta.tsx    клиентский компонент с useEffect
│       └── icons.tsx          inline SVG
├── lib/
│   └── content.ts             все тексты в одном месте
├── tailwind.config.ts
├── postcss.config.js
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Деплой

Сайт собирается стандартно:

```bash
npm run build
npm run start
```

Совместим с Vercel, Netlify, любой Node-средой.

## Контент

Все тексты в `lib/content.ts`. Перед публикацией:

- Замените `eventDate = '{DATETIME} · 13:00 МСК'` на реальную дату эфира.
- Замените заглушки спикера на согласованное фото/имя при необходимости (используется аватар с инициалами).
- Проверьте юр. данные в `footer` (ИНН, ОГРН, лицензия).

## Юридические данные

- ООО «Зерокодер», ИНН 9715401631, ОГРН 1217700246026
- Лицензия № Л035-01298-77/00625369 от 14.11.2022 (Департамент образования и науки Москвы)
- Резидент Сколково
