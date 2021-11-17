const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(css|scss)$/,
        use:[
          process.env.NODE_ENV === "production" 
          ? MiniCssExtractPlugin.loader
          : "style-loader",
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
    new webpack.BannerPlugin({
      banner:
      `프론트엔드의 세계에 오신 것을 완영합니다!!!
      BuildDate: ${new Date().toLocaleDateString()}
      Author: LDG  
      `
    }),

    new CleanWebpackPlugin(),

    ...( process.env.NODE_ENV === "production"
    ? [new MiniCssExtractPlugin({filename: `[name].css`})]
    : [] 
    ),

    new HtmlWebpackPlugin({
      template:"./src/index.html",
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "개발용" : ""
      },
      minify:
        process.env.NODE_ENV === "production"
        ?{
          collapseWhitespace: true,
          removeComments: true
        }
        : false,
      hash: process.env.NODE_ENV === "production"
    }),

  ]
}