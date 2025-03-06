#!/bin/bash

# Generate TypeScript declaration file
dts-bundle-generator -o dist/nds_tokens.d.ts ./output/nds_tokens.ts

# Move output files to dist directory
mv ./output/nds_tokens.js dist/nds_tokens.js
mv ./output/nds_tokens.css dist/nds_tokens.css

# Format the dist files with prettier
yarn prettier --write --ignore-path=.prettierignore dist

# Remove the output directory
yarn rimraf output

echo "Postbuild completed successfully!" 