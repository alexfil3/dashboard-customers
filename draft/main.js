const fs = require("fs");
const pug = require("pug");
const data = require("./data");
const user = require("./user/user.js");

let html = pug.renderFile("index.pug", { data, user });
fs.writeFileSync("index.html", html);
