#!/bin/bash
set -e

if [ -f /node_modules/vorple/dist/quixe/quixe.js ]; then
  cp patches/vorple/quixe.js /node_modules/vorple/dist/quixe/quixe.js
fi
