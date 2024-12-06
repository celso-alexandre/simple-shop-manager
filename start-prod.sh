#!/bin/bash
cd "$(dirname "$0")" || exit
source ~/.bashrc
git add .
git stash
git pull
(cd backend && pnpm i && pnpm build && pnpm start) & \
(cd web && pnpm i && pnpm build && pnpm preview) & \
wait
