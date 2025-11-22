const fs = require("fs");

const content1 = " This is a content \n Node.js is awesome!!"

try {
    fs.writeFileSync("./output/test-sync.txt", content1)
    console.log("File Written sync");
} catch (error) {
    console.log(error.message);
}

const content2 = " This a content two \n file written asynchronously."

fs.writeFile("./output/test-asynchronous.txt", content2, (error) => {
    if (error) {
        console.error(error.message);
    } else {
        console.log("File written asynchronously!!");
    }
});