#!/usr/bin/env bash
# The Github Action runs this script on deploys to start the server. It can
# also be run manually to start it up again if it was stopped.

set -e
# this script gets copied to project root directory
cd $(dirname $(realpath "${BASH_SOURCE}"))

# docker-compose.registry.yml gets copied to project root directory
docker_compose() {
  command docker compose -f docker-compose.yml -f docker-compose.registry.yml "$@"
}

docker_compose pull
if [[ $1 == "hard" ]]; then
  docker_compose stop tph
fi
docker_compose up -d
if ! grep -q TEST_BRANCH_FRONTEND=1 .env ; then
  # commands to run when backend is running (not test_branch frontend)
  docker_compose exec -T tph /app/server/manage.py migrate --no-input
fi
# TODO: load fixtures in prod manually
if grep -q SERVER_ENVIRONMENT=staging .env ; then
  :
  # commands to run in staging only
  #docker_compose exec -T tph /app/server/manage.py loaddata /app/server/fixtures/puzzles.yaml
  #docker_compose exec -T tph /app/server/manage.py loaddata /app/server/fixtures/story.yaml
fi
if ! grep -q TEST_BRANCH_FRONTEND=1 .env ; then
  # commands to run when backend is running (not test_branch frontend)
  # docker_compose exec tph /app/server/manage.py ensure_user_created admin --password later-admin --admin
  # TODO: handle creating a superuser
  docker_compose exec -T tph /app/server/manage.py check
fi
