// This function allows you to customize the color in which the console.log command prints your preferred content.
/* These are the available colors:
1. Black
2. Red
3. Green
4. Yellow
5. Blue
6. Magenta
7. Cyan 
8. White
*/
function changePrintColor(color, toPrint) {
    if (color === "Black") {
        console.log('\x1b[30m%s\x1b[0m', toPrint);
    }
    else if (color === "Red") {
        console.log('\x1b[31m%s\x1b[0m', toPrint);
    }
    else if (color === "Green") {
        console.log('\x1b[32m%s\x1b[0m', toPrint);
    }
    else if (color === "Yellow") {
        console.log('\x1b[33m%s\x1b[0m', toPrint);
    }
    else if (color === "Blue") {
        console.log('\x1b[34m%s\x1b[0m', toPrint);
    }
    else if (color === "Magenta") {
        console.log('\x1b[35m%s\x1b[0m', toPrint);
    }
    else if (color === "Cyan") {
        console.log('\x1b[36m%s\x1b[0m', toPrint);
    }
    else if (color === "White") {
        console.log('\x1b[37m%s\x1b[0m', toPrint);
    }
}
// You can use the function like this
// changePrintColor("Yellow", "The Sun is Yellow in color");

module.exports = { changePrintColor };
