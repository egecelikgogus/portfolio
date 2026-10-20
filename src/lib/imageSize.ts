import fs from "fs";
import path from "path";

export type Size = { width: number; height: number; alpha: boolean };

const cache = new Map<string, Size | null>();

function pngSize(buf: Buffer): Size | null {
  // IHDR is the first chunk: length(4) type(4) width(4) height(4)
  if (buf.length < 26 || buf.readUInt32BE(12) !== 0x49484452) return null;
  // IHDR colour type 4 (grey+alpha) and 6 (RGBA) carry an alpha channel.
  const colourType = buf[25];
  return {
    width: buf.readUInt32BE(16),
    height: buf.readUInt32BE(20),
    alpha: colourType === 4 || colourType === 6,
  };
}

function jpegSize(buf: Buffer): Size | null {
  let i = 2; // skip SOI
  while (i + 9 < buf.length) {
    if (buf[i] !== 0xff) {
      i++;
      continue;
    }
    const marker = buf[i + 1];
    // Markers that carry no payload
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd9)) {
      i += 2;
      continue;
    }
    const len = buf.readUInt16BE(i + 2);
    // SOF0..SOF15 hold the frame dimensions; C4/C8/CC are not SOF
    const isSOF =
      marker >= 0xc0 &&
      marker <= 0xcf &&
      marker !== 0xc4 &&
      marker !== 0xc8 &&
      marker !== 0xcc;
    if (isSOF) {
      return {
        height: buf.readUInt16BE(i + 5),
        width: buf.readUInt16BE(i + 7),
        alpha: false, // JPEG has no alpha channel
      };
    }
    i += 2 + len;
  }
  return null;
}

/* Reads intrinsic pixel dimensions off a file in /public at build time, so
   next/image can reserve the right space without us cropping to a fixed
   aspect ratio. Returns null when the file is missing or unparseable. */
export function imageSize(src: string): Size | null {
  const cached = cache.get(src);
  if (cached !== undefined) return cached;

  let out: Size | null = null;
  try {
    const file = path.join(process.cwd(), "public", src.replace(/^\/+/, ""));
    const buf = fs.readFileSync(file);
    out =
      buf[0] === 0xff && buf[1] === 0xd8
        ? jpegSize(buf)
        : buf[1] === 0x50 && buf[2] === 0x4e
        ? pngSize(buf)
        : null;
  } catch {
    out = null;
  }

  cache.set(src, out);
  return out;
}
