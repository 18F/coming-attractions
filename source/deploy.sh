#!/bin/sh

set -u
set -e

echo 'Deploying'
cp ./source/nginx/nginx.conf ./public/nginx.conf
