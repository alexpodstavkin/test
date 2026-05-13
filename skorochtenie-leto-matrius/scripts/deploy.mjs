// Post-build deploy script.
//
// 1) Copies the contents of Next.js `out/` to the project root so GitHub
//    Pages can serve them at `/skorochtenie-leto-matrius/`.
// 2) Rewrites absolute basePath references (`/skorochtenie-leto-matrius/...`)
//    into relative paths so the same build works from both
//    `https://web.matrius.online/skorochtenie-leto-matrius/` and
//    `https://alexpodstavkin.github.io/test/skorochtenie-leto-matrius/`.
//
// For HTML and JS we strip the basePath prefix so paths become relative
// (`_next/static/...`), which the browser resolves against the current page.
// For CSS we additionally rewrite `_next/static/media/` references to
// `../media/` because CSS `url()` is resolved relative to the stylesheet,
// not the page.

import { cp, readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'out');
const PREFIX = '/skorochtenie-leto-matrius/';

const topLevel = await readdir(OUT, { withFileTypes: true });
for (const entry of topLevel) {
  await cp(path.join(OUT, entry.name), path.join(ROOT, entry.name), {
    recursive: true,
    force: true,
  });
}

async function* walk(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, item.name);
    if (item.isDirectory()) yield* walk(p);
    else yield p;
  }
}

const targets = [
  path.join(ROOT, 'index.html'),
  path.join(ROOT, '404.html'),
  path.join(ROOT, 'index.txt'),
];

for await (const file of walk(path.join(ROOT, '_next'))) {
  if (/\.(js|css|html)$/.test(file)) targets.push(file);
}

let rewritten = 0;
for (const file of targets) {
  let content;
  try {
    content = await readFile(file, 'utf8');
  } catch {
    continue;
  }
  if (!content.includes(PREFIX)) continue;

  let updated;
  if (file.endsWith('.css')) {
    updated = content
      .replaceAll(`${PREFIX}_next/static/media/`, '../media/')
      .replaceAll(PREFIX, '');
  } else {
    updated = content.replaceAll(PREFIX, '');
  }

  if (updated !== content) {
    await writeFile(file, updated);
    rewritten++;
  }
}

console.log(`[deploy] copied ${topLevel.length} entries; rewrote paths in ${rewritten} files`);
