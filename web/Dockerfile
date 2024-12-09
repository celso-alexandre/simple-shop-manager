# Stage 1: Install dependencies and build
FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY public ./public
COPY src ./src
COPY codegen.yml ./
COPY index.html ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./
COPY postcss.config.js tailwind.config.js ./
COPY .env ./

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build && rm .env

# Stage 2: Serve static files
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
