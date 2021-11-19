const path = require("path");
// todo plugin import


module.exports = {
  mode : "development",
  entry: {
    main: "./src/app.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist")
  },
  module:{
    rules:[
      {
        test: /\.(css|scss)$/,
        use:[
          // todo css loader 설정
          
          "style-loader",
          "css-loader"
        ],
        sideEffects: true
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]",
          limit: 6000
        }
      }
    ]
  },
  plugins:[
      //todo plugins 설치 및 설정
  ]
}