#!/bin/bash

if [[ $# -ne 2 ]]; then
    echo "Illegal number of arguments"
    echo "Usage: ./new_website.sh <url> <solver-name>"
    exit 1
fi

if ! [[ $1 =~ ^https?://.* ]]; then
    echo "First argument should be a url"
    exit 1
fi

sed -i "1 a \    { url: '$1', solver: '$2' }," websites.js
sed -i "4 a * $1" README.md

touch solvers/$2.js

jq ".content_scripts[0].matches += [\"$1*\"]" manifest.json | sponge manifest.json
jq ".content_scripts[0].matches += [\"$1*\"]" manifest_firefox.json | sponge manifest_firefox.json
