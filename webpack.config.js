const path = require("path");
module.exports = {
  entry: ["babel-polyfill", "./lib/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "index",
    libraryTarget: "umd",
    libraryExport: "default"
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      }
    ]
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development"
};
