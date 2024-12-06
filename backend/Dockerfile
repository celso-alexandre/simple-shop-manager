# Stage 1: Install dependencies and build
FROM node:22 AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY pnpm-lock.yaml ./
COPY ./prisma ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./
COPY nest-cli.json ./
COPY ./src ./

RUN npm pkg delete scripts.postinstall
RUN npm install -g pnpm
RUN pnpm install --ignore-scripts
RUN ./node_modules/.bin/prisma generate
RUN pnpm build
# RUN pnpm prune --prod

# Stage 2: Run application
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/dist/* ./
COPY --from=builder /app/node_modules ./
CMD ["node", "main.js"]
