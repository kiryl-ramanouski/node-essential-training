const path = require("path");
const util = require("util");
const v8 = require("v8");

const fileName = path.basename(__filename);
util.log(fileName);

const dirForUploads = path.join(__dirname, "www", "files", "uploads");
util.log(dirForUploads);

const heapStatistics = v8.getHeapStatistics();
util.log(heapStatistics);
