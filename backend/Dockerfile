# Stage 1: Install dependencies and build
FROM node:22-alpine AS builder
WORKDIR /app

ADD src ./src
ADD prisma ./prisma
COPY package.json pnpm-lock.yaml ./
COPY pnpm-lock.yaml ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./
COPY nest-cli.json ./

RUN npm pkg delete scripts.postinstall
RUN npm install -g pnpm
RUN pnpm install --ignore-scripts --frozen-lockfile
RUN apk update && apk add --no-cache openssl
# RUN export PRISMA_BINARY_TARGET="native"; pnpm prisma generate
RUN rm -rf src/prisma/@generated
RUN ./node_modules/.bin/prisma generate
RUN pnpm build
RUN pnpm prune --prod
RUN rm -rf src tsconfig.json package.json pnpm-lock.yaml

# Stage 2: Run application
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app .
RUN apk update && apk add --no-cache openssl
CMD ["node", "dist/src/main.js"]
# CMD ["sh", "-c", "while sleep 1000; do :node dist/src/main.js; done"]
