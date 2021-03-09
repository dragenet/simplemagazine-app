const { override, addBabelPlugin } = require("customize-cra");
const path = require("path");

module.exports = override(
  addBabelPlugin("babel-plugin-typescript-to-proptypes")
);
