const fs = require("fs");

fs.renameSync("./folder-for-renaming/renameMe.js", "./folder-for-renaming/renamed.js");

console.log("File renamed");

fs.rename("./folder-for-renaming/moveMe.js", "./folder-for-renaming/destination/moved.js", (err) => {
    if (err) {
        throw err;
    }

    console.log("File moved and renamed");
});

fs.unlinkSync("./folder-for-renaming/renamed.js");

fs.unlink("./folder-for-renaming/destination", (err) => {
    if (err) {
        throw err;
    }

    console.log("File deleted");
});

fs.readdirSync("./folder-for-renaming").forEach((file) => {
    fs.renameSync(`./folder-for-renaming${file}`, `./your-new-directory${file}`);
    console.log("All files were moved");
});
