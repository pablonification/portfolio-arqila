import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import sharp from "sharp";

// Keep originals editable; publish small, content-addressed derivatives.
async function sources(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(async (entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? sources(file) : /\.(tsx?|jsx?)$/.test(file) ? [file] : [];
  }))).flat();
}

const assets = new Set();
for (const file of await sources("app").then(async (files) => [...files, ...await sources("components"), ...await sources("lib")])) {
  const source = await readFile(file, "utf8");
  for (const match of source.matchAll(/["'](\/[^"']+\.(?:png|jpe?g|webp))["']/g)) assets.add(match[1]);
}

await mkdir("public/optimized", { recursive: true });
const previous = JSON.parse(await readFile("lib/image-manifest.json", "utf8").catch(() => "{}"));
const manifest = {};
let before = 0, after = 0;
for (const asset of [...assets].sort()) {
  const input = await readFile(path.join("public", asset));
  const sourceHash = createHash("sha256").update(input).update("1920/82/6").digest("hex");
  const cached = previous[asset];
  if (cached?.sourceHash === sourceHash) {
    const output = await readFile(path.join("public", cached.src)).catch(() => null);
    if (output) { manifest[asset] = cached; before += input.length; after += output.length; continue; }
  }
  const output = await sharp(input).rotate().resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true }).webp({ quality: 82, effort: 6 }).toBuffer();
  const hash = createHash("sha256").update(output).digest("hex").slice(0, 16);
  const name = `${path.basename(asset, path.extname(asset)).replace(/[^a-z0-9-]/gi, "-")}-${hash}.webp`;
  const metadata = await sharp(output).metadata();
  const blur = await sharp(output).resize({ width: 12, height: 12, fit: "inside" }).webp({ quality: 35 }).toBuffer();
  await writeFile(path.join("public/optimized", name), output);
  manifest[asset] = { src: `/optimized/${name}`, width: metadata.width, height: metadata.height, blurDataURL: `data:image/webp;base64,${blur.toString("base64")}`, sourceHash };
  before += input.length;
  after += output.length;
}
await writeFile("lib/image-manifest.json", JSON.stringify(manifest, null, 2) + "\n");
console.log(`${assets.size} images: ${(before / 1e6).toFixed(2)} MB → ${(after / 1e6).toFixed(2)} MB (${Math.round((1 - after / before) * 100)}% smaller)`);
