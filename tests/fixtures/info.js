const fs = require("fs");
const path = require("path");

const { name, author, license } = JSON.parse(fs.readFileSync(path.join(
  __dirname,
  "..",
  "..",
  "package.json"
)));

module.exports = {
  name,
  author,
  license
};
