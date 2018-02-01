#!/bin/sh

# TODO: in prod version localtunnel must be removed and contentful CMS should be configured additional webhook
# with prod URL
lt --port 3000 --subdomain mipcommunication &
node ./bin/www
