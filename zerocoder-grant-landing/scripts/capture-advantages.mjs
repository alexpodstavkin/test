/* Captures individual advantages cards from zerocoder.ru/neuroteen */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const PAGE_URL =
  "https://zerocoder.ru/neuroteen-program-for-teens?param=main_page";
const OUT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../public/screenshots/advantages",
);

const targets = [
  // Каждое преимущество — отдельный скриншот наименьшей плотной обёртки
  { file: "01-graduates.png", text: "10 тыс. выпускников" },
  { file: "02-career.png", text: "300 млн" },
  { file: "03-vuzy.png", text: "лучших вузах" },
  { file: "04-license.png", text: "образовательную лицензию" },
  { file: "05-skolkovo.png", text: "Сколково" },
  { file: "06-expert.png", text: "Главный преподаватель" },
];

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  locale: "ru-RU",
});
const page = await ctx.newPage();

console.log("→", PAGE_URL);
await page.goto(PAGE_URL, { waitUntil: "networkidle", timeout: 60_000 });
await page.waitForTimeout(2_500);

// Прогрев lazy-блоков
for (let y = 0; y < 14000; y += 800) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(180);
}
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(800);

async function captureBlockContaining(text, file, maxH = 600) {
  const handle = await page.evaluateHandle(
    ({ needle, maxH }) => {
      const all = Array.from(document.querySelectorAll("section, div, article, li"));
      const matches = all.filter((el) => {
        const t = (el.innerText || "").trim();
        if (!t.includes(needle)) return false;
        const rect = el.getBoundingClientRect();
        return rect.width >= 200 && rect.height >= 80 && rect.height <= maxH;
      });
      matches.sort((a, b) => {
        const ra = a.getBoundingClientRect();
        const rb = b.getBoundingClientRect();
        return ra.width * ra.height - rb.width * rb.height;
      });
      return matches[0] || null;
    },
    { needle: text, maxH },
  );

  const el = handle.asElement();
  if (!el) {
    console.log(`✗ not found: "${text}"`);
    return false;
  }
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  const outPath = path.join(OUT, file);
  await el.screenshot({ path: outPath });
  console.log(`✓ ${file}  ← "${text}"`);
  return true;
}

for (const t of targets) {
  try {
    await captureBlockContaining(t.text, t.file);
  } catch (e) {
    console.log(`✗ error ${t.file}:`, e.message);
  }
}

await browser.close();
console.log("done");
