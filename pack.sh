#!/bin/sh

TAG=`node -e 'console.log(require("./manifest.json").version)'`

echo "Tagging and packing release ${TAG}"
git tag -m "Release ${TAG}" $TAG || exit 1
zip -rp "extension-${TAG}.zip" css/* icons/* js/* manifest.json
