# Use official Node image (ARM64 compatible for M1/M2)
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose Vite dev port
EXPOSE 5173

# Start dev server
CMD ["npm", "run", "dev"]
