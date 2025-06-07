# Dev container image based on Node
FROM node:18-slim

# Set workdir inside container
WORKDIR /workspace

# Set up a non-root user for VS Code compatibility
RUN useradd -m node && chown -R node /workspace

# Use the node user
USER node
