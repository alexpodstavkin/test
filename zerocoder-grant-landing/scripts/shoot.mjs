/* Скриншоты всего лендинга: полная страница + по секциям */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const URL = "http://localhost:3000/";
const OUT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../shots",
);
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  locale: "ru-RU",
});
const page = await ctx.newPage();

await page.goto(URL, { waitUntil: "networkidle", timeout: 60_000 });

// Раскрыть reveal-анимации и проявить весь контент
await page.evaluate(() => {
  document
    .querySelectorAll(".reveal")
    .forEach((e) => e.classList.add("is-visible"));
});
// Прокрутка для подгрузки lazy-картинок
const fullH = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < fullH; y += 700) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(80);
}
await page.evaluate(() => {
  document
    .querySelectorAll(".reveal")
    .forEach((e) => e.classList.add("is-visible"));
  window.scrollTo(0, 0);
});
await page.waitForTimeout(600);

// 1) Полная страница
await page.screenshot({
  path: path.join(OUT, "full-page.png"),
  fullPage: true,
});
console.log("✓ full-page.png");

// 2) По секциям
const sections = [
  ["hero", "01-hero"],
  ["why-now", "02-why-now"],
  ["advantages", "03-advantages"],
  ["cta-1", "04-cta-1"],
  ["program", "05-program"],
  ["practice", "06-practice"],
  ["format", "07-format"],
  ["activities", "08-activities"],
  ["cta-2", "09-cta-2"],
  ["results", "10-results"],
  ["demo-offer", "11-demo-offer"],
  ["glossary", "12-glossary"],
  ["cta-3", "13-cta-3"],
];

for (const [id, file] of sections) {
  const el = await page.$(`#${id}`);
  if (!el) {
    console.log(`✗ #${id} not found`);
    continue;
  }
  await el.scrollIntoViewIfNeeded();
  await page.evaluate(() =>
    document
      .querySelectorAll(".reveal")
      .forEach((e) => e.classList.add("is-visible")),
  );
  await page.waitForTimeout(250);
  await el.screenshot({ path: path.join(OUT, `${file}.png`) });
  console.log(`✓ ${file}.png`);
}

await browser.close();
console.log("done");
