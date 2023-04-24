const fs = require("fs");

if (fs.existsSync("your-new-directory")) {
    console.log("Directory already exists");
} else {
    fs.mkdir("your-new-directory", (err) => {
        if (err) {
            console.log(`ERROR: ${err}`);
        } else {
            console.log("Directory has been created!");
        }
    });
}

fs.rmdir("./folder-for-renaming/destination", (err) => {
    if (err) {
        throw err;
    }

    console.log("Destination removed");
});
