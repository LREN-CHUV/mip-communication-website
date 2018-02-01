#!/bin/sh



lt --port 3000 --subdomain mipcommunication &

node ./bin/www
