# Stage 1: Install dependencies and build
FROM node:22 AS builder
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
RUN pnpm install --ignore-scripts
# RUN ./node_modules/.bin/prisma generate
RUN pnpm prisma generate

RUN pnpm build
RUN rm -rf src
RUN cp -r dist/* .
RUN rm -rf dist
RUN pnpm prune --prod

# Stage 2: Run application
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app .
COPY --from=builder /app/node_modules ./
RUN ./node_modules/.bin/prisma generate
# CMD ["node", "main.js"]
CMD ["ash", "-c", "while true; do sleep 1000; done"]
