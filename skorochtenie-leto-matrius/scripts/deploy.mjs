// After `next build` runs with `output: 'export'`, copies the contents of
// `out/` to the project root so GitHub Pages can serve them at
// `https://web.matrius.online/skorochtenie-leto-matrius/`.
//
// GH Pages serves files at their literal path in the repo — keeping the
// built site under `out/` would surface at `/skorochtenie-leto-matrius/out/`
// which is the wrong URL. This copies the export up one level so
// `index.html` lives at the deployed URL root for this landing.

import { cp, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.dirname(fileURLToPath(import.meta.url)) + path.sep + '..';
const OUT = path.join(ROOT, 'out');

const entries = await readdir(OUT, { withFileTypes: true });

for (const entry of entries) {
  const src = path.join(OUT, entry.name);
  const dest = path.join(ROOT, entry.name);
  await cp(src, dest, { recursive: true, force: true });
}

console.log(`[deploy] copied ${entries.length} entries from out/ to project root`);
