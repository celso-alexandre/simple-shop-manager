git add .
git stash
concurrently "cd backend && pnpm i && pnpm build && pnpm start" \
             "cd web && pnpm i && pnpm build && pnpm preview"
