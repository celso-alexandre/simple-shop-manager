# Stage 1: Install dependencies and build
FROM node:22 AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm pkg delete scripts.postinstall
RUN npm install -g pnpm
RUN pnpm install --ignore-scripts
RUN ./node_modules/.bin/prisma generate
COPY . .
RUN pnpm build
RUN pnpm prune --prod

# Stage 2: Run application
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
RUN npm install -g pnpm && pnpm install --prod
CMD ["pnpm", "start"]
