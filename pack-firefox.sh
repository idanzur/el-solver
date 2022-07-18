#!/bin/sh
cd src/

mv manifest.json manifest_chrome.json
mv manifest_firefox.json manifest.json

VERSION=$(cat manifest.json | jq -r ".version")
zip -r ../el-solver-firefox-$VERSION.zip . -x manifest_chrome.json

mv manifest.json manifest_firefox.json
mv manifest_chrome.json manifest.json
