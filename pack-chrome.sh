#!/bin/sh

VERSION=$(cat src/manifest.json | jq -r ".version")
zip -r el-solver-chrome-$VERSION.zip src/ -x src/manifest_firefox.json
