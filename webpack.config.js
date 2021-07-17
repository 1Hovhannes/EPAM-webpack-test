const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // counter File
  // entry: path.join("filesJS", "counterJS", "root.component.js"),
  entry: {
    rootOne: path.join(__dirname, "filesJS", "rootOne.component.js"),
    rootTwo: path.join(__dirname, "filesJS", "rootTwo.component.js"),
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },

  mode: "development",
  plugins: [new CleanWebpackPlugin()],
};
