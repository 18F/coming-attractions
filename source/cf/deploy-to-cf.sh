#!/bin/bash

set -e

if [ $npm_package_config_sleep == true ]
then
  cf push -f manifest.yml --no-start
else
  cf push -f manifest.yml
fi
