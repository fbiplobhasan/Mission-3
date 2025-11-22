const fs = require("fs");

console.log("start reading");


try {
    const data = fs.readFileSync("./data/diary.txt", "utf-8");
    console.log("file content");
    console.log(data);
} catch (error) {
    console.error(error.message);
}

console.log("Finished");
