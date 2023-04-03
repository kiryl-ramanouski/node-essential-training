const path = require("path");

const fileName = path.basename(__filename);
console.log(fileName);

const dirForUploads = path.join(__dirname, "www", "files", "uploads");
console.log(dirForUploads);
