# Production Dockerfile for Food Explainer
# Compatible with Render, Railway, Fly.io, and Docker VPS

FROM node:20-bookworm-slim

# Install Python 3, pip, and required system libraries for libtensorflow & sharp
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    python3-pip \
    python3-pil \
    build-essential \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy dependency specifications
COPY package*.json ./
COPY requirements.txt ./

# Install npm dependencies
RUN npm ci --only=production || npm install --production

# Copy application source code
COPY . .

# Set production environment
ENV NODE_ENV=production
ENV PORT=3000

# Expose server port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:${PORT}/api/health || exit 1

# Start the application
CMD ["npm", "start"]
