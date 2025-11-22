const path = require("path");

console.log("Current file info \n");
console.log("fileName", __filename);
console.log("directory", __dirname);

console.log("\n" + "-".repeat(50) + "\n");

const filePath = "/hasan/documents/nextLevel.pdf";

console.log("analyzing path :", filePath, "\n");
console.log("Directory: ", path.dirname(filePath));
console.log('Base name: ', path.basename(filePath));
console.log("File Extension: ", path.extname(filePath));
console.log("File Name: ", path.basename(filePath, path.extname(filePath)));

console.log("\n" + "-".repeat(50) + "\n");

const parsed = path.parse(filePath);
console.log("parsed", parsed);

console.log("\n" + "-".repeat(50) + "\n");

console.log("formatted path: ", path.format(parsed));

console.log("\n" + "-".repeat(50) + "\n");
