#!/bin/bash

set -e

if [ $npm_package_config_install_scaleover == false ]; then
  echo "Skipping installation of scaleover"
  exit 0
fi

cf_path="$(which cf)"

if [ -n "$cf_path" ]; then

  {
    $cf_path add-plugin-repo CF-Community https://plugins.cloudfoundry.org/
  } || {
    echo 'The CF-Community repo seems to be installed'
    echo 'Will attempt to install scaleover via the CF-Community plugin-repo'
    echo ''
  }

  {
    $cf_path install-plugin scaleover -r CF-Community -f
  } || {
    echo 'The plugin installation failed.'
    echo 'Please verify that `$ cf list-plugin-repos` returns the following:'
    echo 'OK'
    echo 'Repo Name      URL'
    echo 'CF-Community   http://plugins.cloudfoundry.org'
  }

else

  echo 'The cf-cli tool is not installed. You can read about installing the cli here:'
  echo 'https://docs.cloud.gov/getting-started/setup/'

fi
