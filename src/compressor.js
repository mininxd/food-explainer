const sharp = require('sharp');
const fs = require('fs');

const THRESHOLD_BYTES = 512 * 1024; // 512 KB

/**
 * Image compressor for Low-Weight AI optimization.
 * If image exceeds 512 KB, compresses resolution and quality before feeding into AI model.
 * 
 * @param {Buffer} inputBuffer 
 * @param {Object} options 
 * @returns {Promise<{buffer: Buffer, stats: Object}>}
 */
async function processImageCompression(inputBuffer, options = {}) {
  const startTime = Date.now();
  const originalSize = inputBuffer.length;
  const thresholdBytes = options.thresholdBytes || THRESHOLD_BYTES;
  const originalSizeKb = +(originalSize / 1024).toFixed(1);

  // If already under or equal to 512 KB, no lossy compression is required
  if (originalSize <= thresholdBytes && !options.force) {
    const elapsed = Date.now() - startTime;
    return {
      buffer: inputBuffer,
      stats: {
        compressed: false,
        triggeredThreshold: false,
        thresholdKb: +(thresholdBytes / 1024).toFixed(0),
        originalSizeKb,
        finalSizeKb: originalSizeKb,
        savedBytes: 0,
        savingsPercentage: '0.0%',
        reductionRatio: '1.0x',
        timeMs: elapsed,
        message: `Image is within the 512 KB limit (${originalSizeKb} KB). Fed directly to AI.`
      }
    };
  }

  // Exceeds 512 KB: Trigger intelligent compression
  let targetWidth = options.maxWidth || 800;
  let targetQuality = options.quality || 80;

  let compressedBuffer = await sharp(inputBuffer)
    .resize({ width: targetWidth, height: targetWidth, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: targetQuality, progressive: true, mozjpeg: true })
    .toBuffer();

  // If still above threshold (rare), step down quality slightly
  if (compressedBuffer.length > thresholdBytes && targetQuality > 50) {
    compressedBuffer = await sharp(inputBuffer)
      .resize({ width: 640, height: 640, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 65, progressive: true })
      .toBuffer();
  }

  const finalSize = compressedBuffer.length;
  const finalSizeKb = +(finalSize / 1024).toFixed(1);
  const savedBytes = originalSize - finalSize;
  const savingsPct = +((savedBytes / originalSize) * 100).toFixed(1);
  const ratio = +(originalSize / Math.max(1, finalSize)).toFixed(1);
  const elapsed = Date.now() - startTime;

  return {
    buffer: compressedBuffer,
    stats: {
      compressed: true,
      triggeredThreshold: true,
      thresholdKb: +(thresholdBytes / 1024).toFixed(0),
      originalSizeKb,
      finalSizeKb,
      savedBytes,
      savingsPercentage: `${savingsPct}%`,
      reductionRatio: `${ratio}x`,
      timeMs: elapsed,
      message: `Image exceeded 512 KB (${originalSizeKb} KB). Compressed down to ${finalSizeKb} KB (-${savingsPct}%) to minimize AI memory & compute load.`
    }
  };
}

module.exports = {
  THRESHOLD_BYTES,
  processImageCompression
};
