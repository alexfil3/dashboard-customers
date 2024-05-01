const fs = require("fs");
const pug = require("pug");
const user = require("./data/user/user");
const customers = require("./data/customers/customers");
const numberEditor = require("./blocks/main/footer/footer__text.js");

const html = pug.renderFile("index.pug", { user, customers, numberEditor });
fs.writeFileSync("index.html", html);
