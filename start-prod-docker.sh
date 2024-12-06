#!/bin/bash

cd "$(dirname "$0")" || exit

source ~/.bashrc

git add .
git stash
git pull

DOCKER_COMPOSE=$(command -v docker-compose || echo "docker compose")

$DOCKER_COMPOSE down --remove-orphans
$DOCKER_COMPOSE build
$DOCKER_COMPOSE up -d --force-recreate backend web
