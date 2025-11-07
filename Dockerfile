# Use Node.js 18 Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy backend package files
COPY backend/package*.json ./

# Install dependencies
RUN npm install --production

# Copy backend source code
COPY backend/ ./

# Environment variables will be injected by Railway at runtime
# No need to set them here

# Expose port
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]

