const sharp = require('sharp');

/**
 * Image Visual Feature Analyzer for Food Vision
 * Computes color histograms, dominant food palettes, saturation, and contrast.
 * Enables accurate food recognition even when ImageNet gives generic labels like "plate" or "bowl".
 */
async function analyzeImageFeatures(imageBuffer) {
  try {
    const { data, info } = await sharp(imageBuffer)
      .resize(48, 48, { fit: 'fill' })
      .removeAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const totalPixels = 48 * 48;
    let rSum = 0, gSum = 0, bSum = 0;
    let greenCount = 0;
    let redCount = 0;
    let orangeCount = 0;
    let goldenCount = 0;
    let darkCount = 0;
    let creamCount = 0;
    let yellowCount = 0;
    let brownCount = 0;

    // Track variance for color diversity
    let rSquares = 0, gSquares = 0, bSquares = 0;

    for (let i = 0; i < data.length; i += 3) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      rSum += r;
      gSum += g;
      bSum += b;
      rSquares += r * r;
      gSquares += g * g;
      bSquares += b * b;

      // Color detection rules
      const maxVal = Math.max(r, g, b);
      const minVal = Math.min(r, g, b);
      const chroma = maxVal - minVal;

      // 1. Dark (seared meat, nori, dark plate, chocolate, roast)
      if (maxVal < 70) {
        darkCount++;
      }
      // 2. Cream / Pale (rice, creamy broth, mozzarella, risotto, potato, pastry)
      else if (minVal > 180 && chroma < 50) {
        creamCount++;
      }
      // 3. Green (fresh herbs, salad, cucumber, wasabi, guacamole, vegetables)
      else if (g > r * 1.12 && g > b * 1.12 && g > 60) {
        greenCount++;
      }
      // 4. Yellow (corn, melted cheese, saffron, egg yolks, fries)
      else if (r > 170 && g > 145 && b < 130 && (r - b) >= 45 && (g - b) >= 35) {
        yellowCount++;
      }
      // 5. Golden / Baked / Fried / Panko crust / Caramel / Pastry
      else if (r > 145 && g >= 105 && g <= 185 && b < 130 && (r - g) >= 25 && (r - g) <= 90) {
        goldenCount++;
      }
      // 6. Bright Orange / Salmon / Tikka masala / Cheddar
      else if (r > 165 && g >= 70 && g <= 150 && b < 100 && (r - g) > 40) {
        orangeCount++;
      }
      // 7. Red / Tomato sauce / Chili / Rare beef / Strawberries
      else if (r > 100 && r > g * 1.45 && r > b * 1.45 && g < 130) {
        redCount++;
      }
      // 8. Savory Brown (cooked beef, roasted pork, gravy, chashu)
      else if (r > 70 && r < 165 && g > 40 && g < 125 && b < 90 && (r - b) >= 20) {
        brownCount++;
      }
    }

    const meanR = rSum / totalPixels;
    const meanG = gSum / totalPixels;
    const meanB = bSum / totalPixels;

    // Calculate variance
    const varR = (rSquares / totalPixels) - (meanR * meanR);
    const varG = (gSquares / totalPixels) - (meanG * meanG);
    const varB = (bSquares / totalPixels) - (meanB * meanB);
    const colorDiversity = Math.sqrt(Math.max(0, varR + varG + varB));

    // Perceptual hash for consistent tie-breaking
    const perceptualSeed = Math.abs(Math.round(meanR * 31 + meanG * 17 + meanB * 7 + colorDiversity));
    const warmthScore = Math.max(0, (meanR - meanB) / 2.55);

    return {
      meanR: Math.round(meanR),
      meanG: Math.round(meanG),
      meanB: Math.round(meanB),
      warmthScore: +warmthScore.toFixed(1),
      colorDiversity: Math.round(colorDiversity),
      ratios: {
        green: +(greenCount / totalPixels).toFixed(3),
        red: +(redCount / totalPixels).toFixed(3),
        orange: +(orangeCount / totalPixels).toFixed(3),
        golden: +(goldenCount / totalPixels).toFixed(3),
        yellow: +(yellowCount / totalPixels).toFixed(3),
        dark: +(darkCount / totalPixels).toFixed(3),
        cream: +(creamCount / totalPixels).toFixed(3),
        brown: +(brownCount / totalPixels).toFixed(3)
      },
      seed: perceptualSeed
    };
  } catch (err) {
    console.error('Error analyzing visual features:', err);
    return {
      meanR: 128, meanG: 128, meanB: 128,
      warmthScore: 0,
      colorDiversity: 50,
      ratios: { green: 0, red: 0, orange: 0, golden: 0, yellow: 0, dark: 0, cream: 0, brown: 0 },
      seed: 42
    };
  }
}

module.exports = {
  analyzeImageFeatures
};
