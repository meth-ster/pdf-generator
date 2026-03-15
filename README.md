# pdf-generator
A simple TypeScript library for generating PDF files.

## What it does
This library provides a basic set of tools for creating PDF documents from scratch. You can add text, images, and shapes to your PDF, and customize the layout and styling as needed.

## Installation
To get started, run `npm install` or `yarn install` to grab the dependencies. Then, build the library with `tsc` or `npm run build`.

## Running the example
Check out the example in `src/example.ts` to see how to use the library. To run it, build the library and then execute `node src/example.js`. This will generate a sample PDF file called `example.pdf` in the root of the project.

## Quick example
Here's a taste of what the code looks like:
```typescript
import { PDFDocument } from './pdf-document';

const doc = new PDFDocument();
doc.addPage();
doc.setFont('Helvetica', 24);
doc.text('Hello, world!');
doc.write('example.pdf');
```
This code creates a new PDF document, adds a single page, sets the font and text, and writes the PDF to a file.

## Contributing
Contributions are welcome! If you find a bug or have an idea for a new feature, feel free to open an issue or submit a pull request.