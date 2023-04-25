const fs = require("fs");

let stream = fs.createReadStream("./chat-logs.log", "UTF-8");

let data;

stream.once("data", (chunk) => {
    console.log("Read stream started...");
    console.log("======================");
    console.log(chunk);
});

stream.on("data", (chunk) => {
    console.log(`Chunk: ${chunk.length}`);
    data += chunk;
});

stream.on("end", () => {
    console.log(`Finished ${data.length}`);
});

console.log("Reading the file...");
