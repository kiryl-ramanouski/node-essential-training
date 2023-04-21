const fs = require("fs");

let md = `
    This a new md file
    ==================

    ES6 Template Strings are cool. They are honor whitespace.

    * Template Strings
    * Node File System
    * Readline CLIs

`;

fs.writeFile("javascript.md", md.trim(), (err) => {
    if (err) {
        throw err;
    }

    fs.appendFileSync("javascript.md", "\n\n### Node.js Everyone!");
    console.log("Markdown created");
});
