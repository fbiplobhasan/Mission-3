const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "This is temp file");
console.log("Temp file created.");

if (fs.existsSync("./output/temp.txt")) {
    console.log("file exist!!!");

    fs.unlinkSync("./output/temp.txt")
    console.log("file deleted");
}



try {
    fs.unlinkSync("./output/temp.txt");
} catch (error) {
    console.log('ERROR', error.message);
}

console.log("Deleted");

fs.writeFile("./output/temp2.txt", "Another file", (err) => {
    if (err) return console.error(err.message);
    console.log("Another temp file created.");

    fs.unlink("./output/temp2.txt", (err) => {
        if (err) {
            console.error("Error", err.message);
        } else {
            console.log("Temp2 deleted");
        }
    })
})