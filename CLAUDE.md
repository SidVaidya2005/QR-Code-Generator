# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the App

```bash
npm install
node index.js
```

Prompts for a URL interactively, then writes `qr_img.png` (QR code) and `URL.txt` (the entered URL) to the project root. Both output files are gitignored — they're recreated on each run.

## Architecture

Single-file CLI app (`index.js`) using ES modules (`"type": "module"`):

- **inquirer** — interactive CLI prompt to capture a URL from the user
- **qr-image** — generates a QR code PNG from the URL
- **fs** — streams the PNG to `qr_img.png` and saves the raw URL to `URL.txt`

No build step, no tests, no bundler.
