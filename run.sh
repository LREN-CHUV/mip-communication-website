#!/usr/bin/env bash

set -e

for param in "$@"
do
  if [ "--no-cache" == "$param" ]; then
    no_cache=0
    break;
  fi
done

if [ $no_cache ] ; then
    echo "INFO: --no-cache"
    docker build --no-cache -t hbpmip/portal-frontend-static-dev -f ./Dockerfile-dev .
else
    docker build -t hbpmip/portal-frontend-static-dev -f ./Dockerfile-dev .
fi

docker run -it --rm -p3000:3000 --name portal_frontend_static_dev hbpmip/portal-frontend-static-dev
