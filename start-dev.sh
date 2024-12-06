#!/bin/bash
concurrently "cd backend && pnpm i && pnpm start:dev" \
             "cd web && pnpm i && pnpm start:dev"
