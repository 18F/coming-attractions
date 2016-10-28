#!/bin/bash

set -eu

SOURCE_PATH=$( cd $(dirname $0) ; pwd -P )
MO_PATH='./bin/mo'
MD_PATH='./bin/Markdown.pl'
PUBLIC_PATH='./public'

mkdir -p $PUBLIC_PATH

export CONTENT=$($MD_PATH $SOURCE_PATH/content/message.md)

$MO_PATH $SOURCE_PATH/cf/manifest.yml > ./manifest.yml

$MO_PATH $SOURCE_PATH/template/layout.html > $PUBLIC_PATH/index.html


