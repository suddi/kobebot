#!/bin/sh

npm install --only=development
npm run compile
rm -rf node_modules
npm install --production
