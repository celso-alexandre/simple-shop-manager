#!/bin/bash
git add .
git stash
git pull
concurrently "cd backend && pnpm i && pnpm build && pnpm start" \
             "cd web && pnpm i && pnpm build && pnpm preview"
