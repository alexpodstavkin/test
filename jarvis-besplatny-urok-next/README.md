# jarvis-besplatny-urok

Лендинг Зерокодера: бесплатный вводный урок по нейросетям для детей 10–14 лет
(«ребёнок собирает своего помощника — Джарвиса»). Next.js 14 + Tailwind, тёмная тема.

Живёт: https://alexpodstavkin.github.io/test/jarvis-besplatny-urok/
Собранная статика — в папке `../jarvis-besplatny-urok/` в корне репозитория.

## Локальный запуск
```
npm install
npm run dev      # http://localhost:5310
```

## Сборка под GitHub Pages (подпуть /test/jarvis-besplatny-urok)
```
rm -rf .next out
EXPORT=1 NEXT_PUBLIC_BASE_PATH=/test/jarvis-besplatny-urok npm run build
cp -R out/. ../jarvis-besplatny-urok/
```
`basePath` подставляется только при `EXPORT=1`, поэтому локальная разработка идёт без префикса.
Пути к файлам из `public/` (логотип, аватары отзывов, иконки Uicons) Next сам не префиксует —
они собираются через хелпер `lib/basePath.ts` (`asset('/logo-icon.png')`). Новые статические
пути добавлять только через него.

## Что важно знать
- **Форма записи** — виджет GetCourse, `components/GetCourseWidget.tsx`. Сейчас стоит ID
  с соседнего детского лендинга (`1637346`) — заменить на форму этого урока. Виджет приходит
  светлым кросс-доменным iframe: его внутренние стили правятся только в кабинете GetCourse.
  Фолбэк — собственная форма `SignupForm.tsx`, включается флагом `USE_GETCOURSE` в `Signup.tsx`.
- **Счётчики**: Яндекс.Метрика 72085663, Top.Mail.Ru 3739769 (в `app/layout.tsx`).
- **Иконки** — Uicons by Flaticon, оставлены только используемые наборы (regular/solid rounded).
  Атрибуция в подвале обязательна по условиям free-плана.
- **Отзывы** реальные, взяты с zerocoder.ru; правились только опечатки исходника.
