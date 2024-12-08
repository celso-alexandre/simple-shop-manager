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
RUN pnpm prisma generate
RUN pnpm build
RUN cp -r dist/* .
RUN pnpm prune --prod
RUN rm -rf src dist tsconfig.json package.json pnpm-lock.yaml
# RUN find /app -name "*.d.ts" -type f -delete

# Stage 2: Run application
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app .
CMD ["node", "main.js"]
