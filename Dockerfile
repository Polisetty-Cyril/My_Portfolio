# Use Node.js LTS version
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy all files first
COPY . .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Install a simple HTTP server to serve the built files
RUN npm install -g serve

# Expose the port
EXPOSE 3000

# Serve the built app
CMD ["serve", "-s", "dist", "-l", "3000"]
