const fs = require("fs");

let files = fs.readdirSync("./");

fs.readdir("./", (err, files) => {
    if (err) {
        throw err;
    }
    console.log("Reading files asynchronously with readdir:\n");
    console.log(files);
});

console.log("Reading files with readdirSync:\n");
console.log(files);
console.log("\n");
