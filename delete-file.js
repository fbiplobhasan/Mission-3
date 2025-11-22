const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "This is temp file");
console.log("Temp file created.");

if (fs.existsSync("./output/temp.txt")) {
    console.log("file exist!!!");
}

fs.unlinkSync("./output/temp.txt")
console.log("file deleted");

try {

} catch (error) {
    console.error(error.message);
}