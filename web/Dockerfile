# Stage 1: Install dependencies and build
FROM node:22 AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
RUN pnpm build
RUN pnpm prune --prod

# Stage 2: Serve static files
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
