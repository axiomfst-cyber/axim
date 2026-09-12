import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

// Minimal PNG encoder in pure Node.js (no external dependencies)
function createCRC32Table() {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c >>> 0;
  }
  return table;
}

const crcTable = createCRC32Table();

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xFF];
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function writeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const typeAndData = chunk.subarray(4, 8 + len);
  chunk.writeUInt32BE(crc32(typeAndData), 8 + len);
  return chunk;
}

function generatePNG(width, height, isMaskable = false) {
  // Signature
  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(8, 8); // bit depth 8
  ihdrData.writeUInt8(6, 9); // RGBA
  ihdrData.writeUInt8(0, 10);
  ihdrData.writeUInt8(0, 11);
  ihdrData.writeUInt8(0, 12);
  const ihdrChunk = writeChunk('IHDR', ihdrData);

  // Scanlines with filter 0
  const scanlineLength = 1 + width * 4;
  const rawData = Buffer.alloc(height * scanlineLength);

  const cx = width / 2;
  const cy = height / 2;
  const outerR = (Math.min(width, height) / 2) * (isMaskable ? 0.72 : 0.88);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * scanlineLength;
    rawData[rowOffset] = 0; // Filter None

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;

      // Background rounded squircle / circle
      let r = 36, g = 82, b = 255, a = 255; // Axiom Blue #2452FF

      // Gentle gradient from #1D43D8 at bottom to #3B82F6 at top
      const ny = y / height;
      r = Math.round(30 + (59 - 30) * (1 - ny));
      g = Math.round(68 + (130 - 68) * (1 - ny));
      b = Math.round(216 + (246 - 216) * (1 - ny));

      // Draw stylized letter "A" / Star / Compass in center
      // Normalize coords to [-1, 1] relative to outerR
      const nx = dx / outerR;
      const my = dy / outerR;

      let isInsideSymbol = false;
      let isAccent = false;

      // Triangle / A symbol
      const legThickness = 0.16;
      const lVx = -0.52, lVy = 1.25;
      const lLenSq = lVx * lVx + lVy * lVy;
      const p1x = nx, p1y = my - (-0.62);
      const tL = Math.max(0, Math.min(1, (p1x * lVx + p1y * lVy) / lLenSq));
      const distL = Math.hypot(p1x - tL * lVx, p1y - tL * lVy);

      const rVx = 0.52, rVy = 1.25;
      const rLenSq = rVx * rVx + rVy * rVy;
      const tR = Math.max(0, Math.min(1, (p1x * rVx + p1y * rVy) / rLenSq));
      const distR = Math.hypot(p1x - tR * rVx, p1y - tR * rVy);

      const isBar = (my >= 0.08 && my <= 0.22 && Math.abs(nx) <= 0.35);

      if (distL <= legThickness / 2 || distR <= legThickness / 2 || isBar) {
        isInsideSymbol = true;
      }

      // Golden diamond/star at apex (0, -0.65)
      const apexDist = Math.hypot(nx, my - (-0.68));
      if (apexDist < 0.18) {
        isAccent = true;
      }

      // Golden dot in crossbar center
      const centerDist = Math.hypot(nx, my - 0.15);
      if (centerDist < 0.12) {
        isAccent = true;
      }

      if (isMaskable) {
        if (isAccent) {
          r = 255; g = 215; b = 0; a = 255; // Gold
        } else if (isInsideSymbol) {
          r = 255; g = 255; b = 255; a = 255; // White
        }
      } else {
        const sqDist = Math.pow(Math.abs(dx / (width * 0.44)), 4) + Math.pow(Math.abs(dy / (height * 0.44)), 4);
        if (sqDist > 1.0) {
          a = 0;
        } else {
          if (isAccent) {
            r = 255; g = 215; b = 0; a = 255; // Gold #FFD700
          } else if (isInsideSymbol) {
            r = 255; g = 255; b = 255; a = 255; // White
          }
        }
      }

      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const compressedData = zlib.deflateSync(rawData);
  const idatChunk = writeChunk('IDAT', compressedData);
  const iendChunk = writeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function generateScreenshot(width, height, type = 'skills') {
  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(8, 8);
  ihdrData.writeUInt8(6, 9);
  ihdrData.writeUInt8(0, 10);
  ihdrData.writeUInt8(0, 11);
  ihdrData.writeUInt8(0, 12);
  const ihdrChunk = writeChunk('IHDR', ihdrData);

  const scanlineLength = 1 + width * 4;
  const rawData = Buffer.alloc(height * scanlineLength);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * scanlineLength;
    rawData[rowOffset] = 0;

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      // Default slate-900 / dark background for mobile screenshot
      let r = 15, g = 23, b = 42, a = 255;

      // Header bar (top 60px)
      if (y < 60) {
        r = 36; g = 82; b = 255; // Axiom blue header
      } else if (y >= height - 70) {
        // Bottom nav
        r = 255; g = 255; b = 255;
      } else {
        // Cards layout inside screenshot
        const ny = (y - 60) / (height - 130);
        if (type === 'skills') {
          // Cards alternating
          const cardIndex = Math.floor(ny * 5);
          const inCardY = (ny * 5) - cardIndex;
          if (inCardY > 0.15 && inCardY < 0.85 && x > 25 && x < width - 25) {
            r = 30; g = 41; b = 59; // Card bg
            if (inCardY > 0.2 && inCardY < 0.35 && x > 40 && x < 180) {
              r = 255; g = 255; b = 255; // Card title
            } else if (inCardY > 0.65 && inCardY < 0.78 && x > 40 && x < width - 40) {
              r = 36; g = 82; b = 255; // Progress bar
            }
          }
        } else {
          // Exercise session preview
          if (ny > 0.1 && ny < 0.35 && x > 30 && x < width - 30) {
            r = 30; g = 41; b = 59;
          } else if (ny > 0.4 && ny < 0.55 && x > 30 && x < width - 30) {
            r = 22; g = 199; b = 132; // Green correct option
          } else if (ny > 0.6 && ny < 0.75 && x > 30 && x < width - 30) {
            r = 30; g = 41; b = 59;
          }
        }
      }

      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const compressedData = zlib.deflateSync(rawData);
  const idatChunk = writeChunk('IDAT', compressedData);
  const iendChunk = writeChunk('IEND', Buffer.alloc(0));
  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate PWA icons
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), generatePNG(192, 192, false));
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), generatePNG(512, 512, false));
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), generatePNG(512, 512, true));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), generatePNG(180, 180, false));
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), generatePNG(64, 64, false));

// Generate Android PWA Narrow Screenshots
fs.writeFileSync(path.join(publicDir, 'screenshot-1.png'), generateScreenshot(540, 960, 'skills'));
fs.writeFileSync(path.join(publicDir, 'screenshot-2.png'), generateScreenshot(540, 960, 'exercise'));

// SVG Brand Icon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#1D4ED8"/>
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047"/>
      <stop offset="100%" stop-color="#EAB308"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="128" fill="url(#grad)"/>
  <path d="M256 96 L140 380 L195 380 L225 300 L287 300 L317 380 L372 380 Z M256 195 L276 255 L236 255 Z" fill="#FFFFFF"/>
  <circle cx="256" cy="96" r="28" fill="url(#gold)"/>
  <circle cx="256" cy="278" r="16" fill="url(#gold)"/>
  <path d="M256 68 L264 88 L284 96 L264 104 L256 124 L248 104 L228 96 L248 88 Z" fill="#FFFFFF"/>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgContent);

console.log('PWA & Android assets successfully generated in /public:');
console.log('- pwa-192x192.png');
console.log('- pwa-512x512.png');
console.log('- pwa-maskable-512x512.png');
console.log('- screenshot-1.png (Android Narrow)');
console.log('- screenshot-2.png (Android Narrow)');
console.log('- apple-touch-icon.png');
console.log('- favicon.ico');
console.log('- icon.svg');
