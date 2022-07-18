#!/bin/sh

VERSION=$(cat src/manifest.json | jq -r ".version")
zip -FSr el-solver-chrome-$VERSION.zip src/ -x src/manifest_firefox.json
