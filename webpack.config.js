const path = require("path");

module.exports = {
  mode : "development",
  entry: {
    main: "./src/app.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist")
  },
    //todo loader 작성
    //todo loader intall
}