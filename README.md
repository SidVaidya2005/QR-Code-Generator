# QR Code Generator

A minimal Node.js CLI tool that takes a URL as input and generates a QR code image.

## Features

- Interactive prompt to enter any URL
- Validates that input is not empty
- Generates a QR code as a PNG image (`qr_img.png`)
- Saves the entered URL to a text file (`URL.txt`)
- Both outputs are written concurrently for efficiency

## Prerequisites

- [Node.js](https://nodejs.org/) v14.8+ (required for top-level `await` in ES modules)

## Installation

```bash
git clone <repo-url>
cd qr-code-generator
npm install
```

## Usage

```bash
node index.js
```

You will be prompted to enter a URL:

```
? Enter your URL: https://example.com
```

After entering a valid URL, two files are created in the project root:

| File | Contents |
|------|----------|
| `qr_img.png` | QR code image for the entered URL |
| `URL.txt` | The raw URL as plain text |

Both files are gitignored and recreated on each run.

## Project Structure

```
qr-code-generator/
├── index.js        # Main entry point
├── package.json    # Project metadata and dependencies
├── .gitignore      # Excludes node_modules, output files, and OS files
└── CLAUDE.md       # Guidance for Claude Code
```

## Dependencies

| Package | Purpose |
|---------|---------|
| [inquirer](https://github.com/SBoudrias/Inquirer.js) | Interactive CLI prompt |
| [qr-image](https://github.com/alexeyten/qr-image) | QR code generation |

## How It Works

1. `inquirer` prompts the user for a URL and validates it is non-empty.
2. `qr-image` generates a QR code readable stream from the URL.
3. `stream/promises.pipeline` streams the QR code to `qr_img.png`.
4. `fs.promises.writeFile` saves the URL to `URL.txt`.
5. Steps 3 and 4 run concurrently via `Promise.all`.

## License

ISC
