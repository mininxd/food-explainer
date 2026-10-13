# 🍲 Food Explainer — Low-Weight Restaurant AI

> **Hackathon Track**: Ultra-Low Weight AI (< 2 MB Model Footprint)  
> **Target Problem**: In-restaurant food identification, taste explanation, aftertaste profiling, and authentic diner review synthesis with intelligent pre-AI compression guard.

---

## 🌟 Overview & Architecture

**Food Explainer** allows restaurant diners to take or upload a food photo and instantly receive:
1. **`food_name`**: Official restaurant menu title and cuisine classification.
2. **`food_description`**: Comprehensive breakdown of how it tastes (savory, umami, sweetness, spiciness, acidity, richness), mouthfeel, and aromatic notes.
3. **`aftertaste`**: Dedicated analysis of how the flavor finish lingers on the palate (duration, warmth, cleansing notes).
4. **`user_reviews`**: Aggregated diner reviews explaining the taste experience and aftertaste impressions.

### ⚡ Low-Weight AI & Pre-AI Compression Guard

To minimize compute, memory, and bandwidth consumption for edge and mobile environments:
- **Pre-AI Compression Guard**: Every uploaded image is inspected before model processing. If the image exceeds **512 KB**, it is automatically compressed down to an optimized payload (often saving 80%–92% in data volume) before feeding into the tensor pipeline.
- **Ultra-Low Weight Vision Model**: Powered by **MobileNet v1 (α=0.25)** via TensorFlow.js — requiring only **~1.7 MB** of weights and running inference in milliseconds with minimal RAM.
- **Node.js & Python Integration**: Node.js v24 Express server integrated with Python 3.10 PIL for visual palette and color analysis.

---

## 🚀 Live Demo

The interactive demo site is available at:
```text
http://localhost:3000/demo
```
*(Navigating to `http://localhost:3000/` automatically redirects to `/demo`)*

### Demo Features:
- **Tailwind CSS UI**: Modern, responsive dark-mode gastronomic layout.
- **Live Camera Capture**: Take photos directly using your device camera.
- **Drag & Drop Upload**: Test with your own food photos.
- **1-Click Restaurant Presets**: Test Tonkotsu Ramen, Neapolitan Pizza, Angus Cheeseburger, Nigiri Platter, Tacos al Pastor, and Truffle Risotto.
- **Real-Time Compression Dashboard**: Shows original size, whether the 512 KB threshold was triggered, compressed payload, and reduction percentage.
- **Telemetry Bar**: Displays latency, model memory size, and Python engine status.

---

## 🛠️ Quickstart

### Prerequisites
- Node.js v24+
- npm 12+
- Python 3.10+ with Pillow (`python3-pil`)

### Installation & Run
```bash
# 1. Install dependencies
npm install

# 2. Start the server
npm start
```

Visit **`http://localhost:3000/demo`** in your browser.

---

## 📡 REST API Reference

### 1. `POST /api/explain`
Accepts a food image and returns full gastronomic explanation, review synthesis, and compression stats.

**Request Options**:
- **Multipart Form-Data**: `image` (binary file)
- **JSON Payload**: `{ "imageBase64": "data:image/jpeg;base64,..." }`
- **Preset ID**: `{ "presetId": "ramen" }` (or `pizza`, `cheeseburger`, `sushi`, `tacos`, `risotto`)

**Example Response**:
```json
{
  "success": true,
  "food_name": "Spicy Tonkotsu Chashu Ramen",
  "cuisine": "Japanese / Hakata Style",
  "restaurant_type": "Ramen Izakaya & Specialty Noodle House",
  "price_estimate": "$17.50",
  "food_description": {
    "summary": "A 16-hour slow-simmered pork bone broth layered with handmade wavy noodles...",
    "taste_profile": { "umami": 9, "richness": 9, "savory": 9, "spicy": 6, "salty": 7, "sweet": 3, "acidity": 2 },
    "mouthfeel": "Velvety, deeply collagen-rich broth that coats the palate...",
    "aroma": "Toasted black sesame, smoky caramelized pork fat, and sweet scallions."
  },
  "aftertaste": {
    "description": "Leaves a long, comforting coating of savory pork collagen on the tongue...",
    "finish_duration": "Long & Sustained (3-5 minutes)",
    "palate_sensation": "Warm, savory, and soothingly coated"
  },
  "user_reviews": {
    "overall_rating": 4.9,
    "review_count": 328,
    "reviews": [
      {
        "reviewer": "Kenji S. (Local Guide)",
        "rating": 5,
        "comment": "The broth has that thick gelatin richness... aftertaste has this subtle smoky garlic finish."
      }
    ]
  },
  "compression": {
    "compressed": true,
    "triggeredThreshold": true,
    "thresholdKb": 512,
    "originalSizeKb": 1694.2,
    "finalSizeKb": 169.7,
    "savingsPercentage": "90%",
    "reductionRatio": "10x",
    "rule_applied": "AUTOMATIC_PRE_AI_COMPRESSION (>512KB)"
  },
  "ai_vision": {
    "model_info": {
      "architecture": "MobileNet v1 (α=0.25)",
      "size_mb": 1.7,
      "inference_latency_ms": 38
    }
  }
}
```

### 2. `GET /api/samples`
Returns all built-in restaurant test dishes with their image sizes and compression eligibility.

### 3. `GET /api/health`
Returns system status, Node.js memory footprint (RSS/heap), and model specifications.

---

## 📂 Project Directory Structure

```text
/root/ai/
├── server.js               # Express server running on port 3000
├── package.json            # Node.js dependencies & scripts
├── README.md               # Documentation
├── python/
│   ├── food_engine.py      # Python PIL analysis & compression engine
│   └── generate_samples.py # Sample dish generator
├── src/
│   ├── compressor.js       # Pre-AI image compression logic (>512KB trigger)
│   ├── model.js            # TensorFlow.js MobileNet vision pipeline
│   ├── foodKnowledge.js    # Gastronomic database (taste, aftertaste, reviews)
│   └── pythonBridge.js     # Child process bridge from Node.js to Python
└── public/
    ├── demo.html           # Tailwind CSS interactive demo UI (localhost:3000/demo)
    └── samples/            # Pre-generated sample food dishes for testing
```
