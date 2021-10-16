#!/bin/bash

rm -rf dist
npm run build
cp -rf ./dist /mnt/e/code/github/crown-swap/node_modules/@pancakeswap/sdk/