const path = require("path");

module.exports = {
  ////counter File
  // entry: path.resolve("filesJS/counterJS/root.component.js"),

  entry: ["./filesJS/rootOne.component.js", "./filesJS/rootTwo.component.js"],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
};
