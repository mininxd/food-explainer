const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { explainFoodFromImage, getOrLoadModel } = require('./src/model');
const { FOOD_DATABASE } = require('./src/foodKnowledge');

const app = express();
const PORT = process.env.PORT || 3000;

// Multer memory storage (up to 25MB uploads)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 25 * 1024 * 1024 }
});

app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Root route redirects to /demo
app.get('/', (req, res) => {
  res.redirect('/demo');
});

// Demo Page route (localhost:3000/demo)
app.get('/demo', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'demo.html'));
});

// Health & System Info
app.get('/api/health', (req, res) => {
  const mem = process.memoryUsage();
  res.json({
    status: 'healthy',
    app: 'Food Explainer - Low-Weight Restaurant AI',
    node_version: process.version,
    memory_mb: {
      rss: +(mem.rss / 1024 / 1024).toFixed(1),
      heapUsed: +(mem.heapUsed / 1024 / 1024).toFixed(1)
    },
    low_weight_model: {
      architecture: 'MobileNet v1 (α=0.25)',
      size_mb: 1.7,
      compression_threshold_kb: 512
    }
  });
});

// List preset restaurant sample dishes
app.get('/api/samples', (req, res) => {
  const samplesDir = path.join(__dirname, 'public', 'samples');
  const sampleList = Object.keys(FOOD_DATABASE).map(key => {
    const dish = FOOD_DATABASE[key];
    const filePath = path.join(samplesDir, `${key}.jpg`);
    let sizeKb = 0;
    let exists = false;
    if (fs.existsSync(filePath)) {
      exists = true;
      sizeKb = +(fs.statSync(filePath).size / 1024).toFixed(1);
    }
    return {
      id: key,
      food_name: dish.food_name,
      cuisine: dish.cuisine,
      price: dish.price_estimate,
      image_url: `/samples/${key}.jpg`,
      file_size_kb: sizeKb,
      will_trigger_compression: sizeKb > 512,
      exists
    };
  });

  res.json({
    samples: sampleList,
    threshold_kb: 512
  });
});

// Explain food API endpoint (Supports multipart file, base64 payload, or sample preset)
app.post('/api/explain', upload.single('image'), async (req, res) => {
  try {
    let imageBuffer = null;
    let presetId = req.body.presetId || null;

    if (req.file && req.file.buffer) {
      imageBuffer = req.file.buffer;
    } else if (req.body.imageBase64) {
      const base64Data = req.body.imageBase64.replace(/^data:image\/\w+;base64,/, '');
      imageBuffer = Buffer.from(base64Data, 'base64');
    } else if (presetId) {
      const samplePath = path.join(__dirname, 'public', 'samples', `${presetId}.jpg`);
      if (fs.existsSync(samplePath)) {
        imageBuffer = fs.readFileSync(samplePath);
      } else {
        return res.status(404).json({ error: `Preset sample ${presetId} not found on server.` });
      }
    }

    if (!imageBuffer) {
      return res.status(400).json({ 
        error: 'No image provided. Please upload an image, pass imageBase64, or specify a presetId.' 
      });
    }

    // Run low-weight AI pipeline (with >512KB pre-compression)
    const result = await explainFoodFromImage(imageBuffer, { presetId });
    res.json(result);

  } catch (error) {
    console.error('[API Error in /api/explain]:', error);
    res.status(500).json({
      error: 'Failed to process food image',
      details: error.message
    });
  }
});

// Pre-load model on startup
getOrLoadModel().catch(err => {
  console.warn('Initial model load deferred:', err.message);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`🍜 Food Explainer Server running at: http://localhost:${PORT}`);
  console.log(`🖥️  Demo site available at:        http://localhost:${PORT}/demo`);
  console.log(`⚡ Low-Weight AI Model:            MobileNet v1 (α=0.25, ~1.7 MB)`);
  console.log(`🗜️  Pre-AI Compression Threshold:  > 512 KB`);
  console.log(`====================================================`);
});
