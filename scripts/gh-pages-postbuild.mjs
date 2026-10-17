// Post-build step for GitHub Pages (run by .github/workflows/deploy.yml).
// - Downloads Lovable-hosted images (/__l5e/...) into the build so the site is self-contained
// - Prefixes root-relative URLs with the GitHub Pages base path
// - Adds 404.html and .nojekyll
import { readdir, readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import { join, dirname } from "node:path";

const OUT = "dist/client";
const BASE = process.env.BASE_PATH || "/summit-pluto-digital-home/";
const LOVABLE_ORIGIN = process.env.LOVABLE_ORIGIN || "https://summit-pluto-digital-home.lovable.app";

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const files = (await walk(OUT)).filter((f) => /\.(html|js|css)$/.test(f));
const assetRe = /\/__l5e\/assets-v1\/[A-Za-z0-9._\-\/]+/g;
const assets = new Set();

for (const f of files) {
  let text = await readFile(f, "utf8");
  for (const m of text.match(assetRe) ?? []) assets.add(m);
  const updated = text
    .replace(/(["'(])\/__l5e\//g, `$1${BASE}__l5e/`)
    .replace(/(["'])\/favicon\.png/g, `$1${BASE}favicon.png`)
    .replace(/(["'])\/robots\.txt/g, `$1${BASE}robots.txt`);
  if (updated !== text) await writeFile(f, updated);
}

for (const a of assets) {
  const res = await fetch(LOVABLE_ORIGIN + a);
  if (!res.ok) throw new Error(`Failed to download ${a}: ${res.status}`);
  const dest = join(OUT, a);
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  console.log("downloaded", a);
}

await copyFile(join(OUT, "index.html"), join(OUT, "404.html"));
await writeFile(join(OUT, ".nojekyll"), "");
console.log(`Done: ${assets.size} assets, ${files.length} files scanned`);
