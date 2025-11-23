require("dotenv").config();

const config = {
    app: {
        name: process.env.APP_NAME || "DefaultApp",
        version: process.env.APP_Version,
        port: process.env.port || 8000,
        env: process.env.NODE_ENV,
    }
}

console.log(config);

module.exports = config;