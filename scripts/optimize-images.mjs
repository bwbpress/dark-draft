// Resizes + converts an image to WebP.
//
// This project uses `output: "export"` with `images.unoptimized: true`
// (see next.config.ts), so next/image does NOT resize or re-encode images
// at request time -- whatever file ships in /public is exactly what
// browsers download. This script is the only optimization pass images get.
//
// Usage:
//   node scripts/optimize-images.mjs <input> [--width=900] [--quality=82] [--out=path.webp]
//
// Examples:
//   node scripts/optimize-images.mjs "public/img/books/hack-and-harrow/static-bind_cover_art.jpg"
//   node scripts/optimize-images.mjs "public/img/Arlan Chen 3.jpg" --width=1920 --quality=80
import sharp from "sharp";
import { statSync } from "node:fs";
import path from "node:path";

function parseArgs(argv) {
  const [input, ...rest] = argv;
  if (!input) {
    console.error(
      "Usage: node scripts/optimize-images.mjs <input> [--width=900] [--quality=82] [--out=path.webp]"
    );
    process.exit(1);
  }

  const options = { width: 900, quality: 82, out: null };
  for (const arg of rest) {
    const [key, value] = arg.replace(/^--/, "").split("=");
    if (key === "width") options.width = Number(value);
    else if (key === "quality") options.quality = Number(value);
    else if (key === "out") options.out = value;
  }

  return { input, ...options };
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

const { input, width, quality, out } = parseArgs(process.argv.slice(2));

const inputPath = path.resolve(input);
const outputPath = path.resolve(
  out ?? inputPath.replace(/\.[^.]+$/, ".webp")
);

const beforeSize = statSync(inputPath).size;

await sharp(inputPath)
  .resize({ width, withoutEnlargement: true })
  .webp({ quality })
  .toFile(outputPath);

const afterSize = statSync(outputPath).size;
const reduction = (100 * (1 - afterSize / beforeSize)).toFixed(0);

console.log(
  `${input} -> ${path.relative(process.cwd(), outputPath)}\n  ${formatKb(beforeSize)} -> ${formatKb(afterSize)} (-${reduction}%)`
);
