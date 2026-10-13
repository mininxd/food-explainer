// Polyfill util.isNullOrUndefined for Node.js 24 compatibility with @tensorflow/tfjs-node
const util = require('util');
if (!util.isNullOrUndefined) {
  util.isNullOrUndefined = (val) => val === null || val === undefined;
}

let tf;
let tfBackendName = 'tensorflow';
try {
  tf = require('@tensorflow/tfjs-node');
  tfBackendName = tf.getBackend();
  console.log('[AI Engine] Loaded @tensorflow/tfjs-node (Native C++ Backend: ' + tfBackendName + ')');
} catch (err) {
  console.warn('[AI Engine] Falling back to @tensorflow/tfjs:', err.message);
  tf = require('@tensorflow/tfjs');
  tfBackendName = tf.getBackend();
}

const mobilenet = require('@tensorflow-models/mobilenet');
const sharp = require('sharp');
const { processImageCompression } = require('./compressor');
const { findBestFoodMatch, FOOD_DATABASE } = require('./foodKnowledge');
const { analyzeImageWithPython } = require('./pythonBridge');
const { analyzeImageFeatures } = require('./imageAnalyzer');

let mobilenetModel = null;
let isLoading = false;

/**
 * Lazy load the lightweight MobileNet model (version 1, alpha: 0.25).
 * Footprint: ~1.7 MB total model size.
 */
async function getOrLoadModel() {
  if (mobilenetModel) return mobilenetModel;
  if (isLoading) {
    while (isLoading) {
      await new Promise(r => setTimeout(r, 100));
    }
    return mobilenetModel;
  }

  isLoading = true;
  console.log('[AI Engine] Loading Ultra-Low Weight MobileNet (version 1, alpha 0.25, ~1.7MB)...');
  try {
    mobilenetModel = await mobilenet.load({ version: 1, alpha: 0.25 });
    console.log('[AI Engine] Low-weight model loaded successfully!');
  } catch (err) {
    console.error('[AI Engine] Error loading MobileNet:', err);
    throw err;
  } finally {
    isLoading = false;
  }
  return mobilenetModel;
}

/**
 * End-to-end Food Explainer Pipeline:
 * 1. Checks file size: if > 512KB, compresses image first to minimize AI compute/memory usage.
 * 2. Runs Python image analysis for color palette and visual tone.
 * 3. Decodes pixels and converts to Tensor.
 * 4. Runs MobileNet inference to identify food features.
 * 5. Synthesizes restaurant food_name, food_description (taste profile, mouthfeel, aroma), and user_reviews (taste experience and aftertaste).
 * 
 * @param {Buffer} inputBuffer 
 * @param {Object} options 
 * @returns {Promise<Object>}
 */
async function explainFoodFromImage(inputBuffer, options = {}) {
  const overallStart = Date.now();

  // STEP 1: Compression check (Rule: If > 512KB, compress first)
  const compressionResult = await processImageCompression(inputBuffer, options);
  const activeBuffer = compressionResult.buffer;
  const compressionStats = compressionResult.stats;

  // STEP 2: Vision & Feature Extraction (concurrent)
  const pythonPromise = analyzeImageWithPython(activeBuffer);
  const visualFeaturePromise = analyzeImageFeatures(activeBuffer);

  // STEP 3: Tensor pre-processing (Sharp raw pixel extraction -> 224x224 RGB)
  const tensorStart = Date.now();
  const rawImage = await sharp(activeBuffer)
    .resize(224, 224, { fit: 'fill' })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const numChannels = 3;
  const numPixels = 224 * 224;
  const values = new Int32Array(numPixels * numChannels);
  for (let i = 0; i < numPixels * numChannels; i++) {
    values[i] = rawImage.data[i];
  }

  const imageTensor = tf.tensor3d(values, [224, 224, 3], 'int32');
  const tensorPrepTimeMs = Date.now() - tensorStart;

  // STEP 4: AI Model Inference
  const model = await getOrLoadModel();
  const inferStart = Date.now();
  const predictions = await model.classify(imageTensor);
  const inferTimeMs = Date.now() - inferStart;
  imageTensor.dispose(); // Free GPU/CPU memory immediately

  // Await Python palette analysis and Sharp feature extraction
  const [pythonRes, visualFeatures] = await Promise.all([pythonPromise, visualFeaturePromise]);
  const palette = pythonRes && pythonRes.available && pythonRes.data ? pythonRes.data.palette : null;

  // STEP 5: Gastronomic Mapping
  let foodMatch = null;
  if (options.presetId && FOOD_DATABASE[options.presetId]) {
    foodMatch = FOOD_DATABASE[options.presetId];
  } else {
    foodMatch = findBestFoodMatch(predictions, visualFeatures, palette);
  }

  const totalTimeMs = Date.now() - overallStart;

  return {
    success: true,
    food_name: foodMatch.food_name,
    cuisine: foodMatch.cuisine,
    restaurant_type: foodMatch.restaurant_type,
    menu_section: foodMatch.menu_section,
    price_estimate: foodMatch.price_estimate,
    dietary: foodMatch.dietary || [],
    food_description: foodMatch.food_description,
    aftertaste: foodMatch.aftertaste,
    user_reviews: foodMatch.user_reviews,
    suggested_pairing: foodMatch.suggested_pairing,
    ai_vision: {
      predictions: predictions.slice(0, 3).map(p => ({
        label: p.className,
        confidence: +(p.probability * 100).toFixed(1) + '%'
      })),
      visual_features: {
        dominant_tone: (palette && palette.visual_tone) || 'balanced_clean',
        warmth_score: visualFeatures.warmthScore,
        color_diversity: visualFeatures.colorDiversity,
        ratios: visualFeatures.ratios
      },
      model_info: {
        architecture: 'MobileNet v1 (α=0.25)',
        type: 'Low-Weight Edge Vision Model',
        backend: tfBackendName === 'tensorflow' ? 'TensorFlow C++ Native (tfjs-node)' : tfBackendName,
        size_mb: 1.7,
        inference_latency_ms: inferTimeMs,
        tensor_prep_ms: tensorPrepTimeMs
      }
    },
    compression: {
      ...compressionStats,
      rule_applied: compressionStats.triggeredThreshold 
        ? 'AUTOMATIC_PRE_AI_COMPRESSION (>512KB)' 
        : 'DIRECT_PASS (<=512KB)'
    },
    python_integration: {
      enabled: true,
      engine: pythonRes.available ? 'Python 3.10 PIL Engine' : 'Node-Only Fallback',
      palette: palette || { visual_tone: 'balanced' },
      status: pythonRes.available ? 'Connected' : 'Unavailable'
    },
    performance: {
      total_latency_ms: totalTimeMs,
      efficiency_rating: 'A+ (Ultra-Low Footprint)'
    }
  };
}

module.exports = {
  getOrLoadModel,
  explainFoodFromImage
};
