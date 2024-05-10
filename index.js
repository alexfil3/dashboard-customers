const fs = require("fs");
const pug = require("pug");
const user = require("./data/user/user");
const customers = require("./data/customers/customers");
const numberEditor = require("./desk-blocks/main/footer/footer__text.js");
const navItems = [
  { name: "Dashboard", icon: "key" },
  { name: "Product", icon: "square" },
  { name: "Customers", icon: "user" },
  { name: "Income", icon: "wallet" },
  { name: "Promote", icon: "discount" },
  { name: "Help", icon: "message" },
];

const html = pug.renderFile("index.pug", {
  user,
  customers,
  numberEditor,
  navItems,
});
fs.writeFileSync("index.html", html);
