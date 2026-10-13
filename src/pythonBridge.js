const { execFile } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const PYTHON_SCRIPT = path.join(__dirname, '../python/food_engine.py');

/**
 * Invoke Python component to perform image color and texture analysis.
 * 
 * @param {Buffer} imageBuffer 
 * @returns {Promise<Object>}
 */
async function analyzeImageWithPython(imageBuffer) {
  return new Promise((resolve) => {
    // Write temporary file for Python to read
    const tempFile = path.join(os.tmpdir(), `food_${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`);
    try {
      fs.writeFileSync(tempFile, imageBuffer);
    } catch (writeErr) {
      return resolve({
        available: false,
        error: `Could not write temp file: ${writeErr.message}`
      });
    }

    execFile('python3', [PYTHON_SCRIPT, 'analyze', tempFile], { timeout: 3000 }, (error, stdout, stderr) => {
      // Clean up temp file
      try {
        if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
      } catch (e) {}

      if (error) {
        return resolve({
          available: false,
          error: error.message || stderr
        });
      }

      try {
        const parsed = JSON.parse(stdout);
        resolve({
          available: true,
          data: parsed
        });
      } catch (parseErr) {
        resolve({
          available: false,
          error: `JSON parse error: ${parseErr.message}`
        });
      }
    });
  });
}

module.exports = {
  analyzeImageWithPython
};
