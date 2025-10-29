# Use the official Bun image
FROM oven/bun:latest AS base

# Install dependencies stage
FROM base AS install
WORKDIR /app

# Copy dependency files
COPY package.json ./
RUN bun install

# Build stage
FROM base AS build
WORKDIR /app

# Copy dependencies from install stage
COPY --from=install /app/node_modules ./node_modules
COPY . .

# Build the application
RUN bun run build

# Production stage
FROM base AS production
WORKDIR /app

# Copy built application
COPY --from=build /app/.output ./.output
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Expose port
EXPOSE 3001

# Run the app
CMD ["bun", ".output/server/index.mjs"]
