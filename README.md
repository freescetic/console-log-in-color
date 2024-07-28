# console-log-in-color

`console-log-in-color` is a simple and lightweight npm package that allows you to add color to your console log messages in Node.js. It enhances the visibility and readability of your log messages by applying various colors.

### Add a splash of colors to your Node.js console logs and outputs

This lightweight npm package empowers you to effortlessly enhance your console logs with a variety of colors.

## Features

* **Simple and Intuitive:** The `changePrintColor` function provides a clear way to customize your console output.
* **Wide Range of Colors:** Choose from 8 distinct colors (Black, Red, Green, Yellow, Blue, Magenta, Cyan, White) to highlight different messages.
* **Cross-Platform Compatibility:** Works seamlessly on various terminal environments that support ANSI escape sequences.

## Installation

To install the package, run the following command:

```bash
npm install console-log-in-color
```

## Usage

1. **Import the function**
```javascript
const { changePrintColor } = require('console-log-in-color');
```
2. **Customize your console output**
```javascript
changePrintColor("Green", "Success! The process completed successfully.");
changePrintColor("Red", "Error: An unexpected issue occurred.");
changePrintColor("Yellow", "Warning: Potential issue detected.");
changePrintColor("Blue", "Information: This is just a regular message.");
// ... and so on for other colors
```

## Available Colors

1. Black
2. Red
3. Green
4. Yellow
5. Blue
6. Magenta
7. Cyan
8. White

## Compatibility

This package works in Node.js environments on terminals that support ANSI escape sequences.

## Contributing

We appreciate contributions from the community. Feel free to fork the repository and submit pull requests to enhance this package!

## License

This project is distributed under the **Apache 2.0** License.

