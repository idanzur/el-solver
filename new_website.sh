#!/bin/bash

sed -i "1 a \    { url: '$1', solver: '$2' }," websites.js

touch solvers/$2.js

jq ".content_scripts[0].matches += [\"$1*\"]" manifest.json | sponge manifest.json
jq ".content_scripts[0].matches += [\"$1*\"]" manifest_firefox.json | sponge manifest_firefox.json