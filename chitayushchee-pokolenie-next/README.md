# Читающее поколение — исходники лендинга

Лендинг Матриуса «Читающее поколение: 5 навыков сильного читателя» (бесплатный мини-курс по скорочтению, 2–8 классы).
Вёрстка скопирована 1-в-1 с mosobrfuture.ru, палитра и шрифт — Матриус, CTA красные.

Собранная статика лежит рядом в `../chitayushchee-pokolenie/` и открывается по адресу
https://alexpodstavkin.github.io/test/chitayushchee-pokolenie/

## Запуск локально
    npm install
    npm run dev        # http://localhost:5242

## Пересборка под GitHub Pages
    STATIC_EXPORT=1 NEXT_PUBLIC_BASE_PATH=/test/chitayushchee-pokolenie npm run build
    rm -rf ../chitayushchee-pokolenie && cp -R out ../chitayushchee-pokolenie && touch ../chitayushchee-pokolenie/.nojekyll

## Что нужно знать
- Дата в плашках считается в браузере: пн–чт → ближайший четверг, пт–вс → ближайший понедельник
  (`components/deadline-date.ts`).
- Фото — `public/photos/`: hero.jpg 2560×1080, why-today.jpg 1200×800, deadline.jpg 2560×560, calendar.png.
- Форма шлёт заявку на `/chitayushchee-pokolenie/php/submit.php` (переопределяется `NEXT_PUBLIC_LEAD_ENDPOINT`).
  На GitHub Pages PHP не выполняется — на боевом домене нужен свой обработчик, иначе заявки не доходят.
- Счётчики: Яндекс.Метрика 98858030, Top.Mail.Ru 3743427; при успешной отправке шлётся цель `lead`.
