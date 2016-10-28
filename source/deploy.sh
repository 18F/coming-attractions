#!/bin/sh

set -e

SOURCE_PATH=$( cd $(dirname $0) ; pwd -P )
PUBLIC_PATH='./public'

# Create the public directory to push
mkdir -p ./public

echo "Deploying $npm_package_config_app_name"

cp $SOURCE_PATH/nginx/nginx.conf $PUBLIC_PATH/nginx.conf

cf push -f manifest.yml
