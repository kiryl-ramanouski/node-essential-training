const fs = require("fs");

fs.readFile("./readme.md", "utf-8", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(`Async reading:\n ${data}`);
});

let readmeSync = fs.readFileSync("./readme.md", "utf-8");
console.log(`Sync reading:\n ${readmeSync}`);
