const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BUILD_HTML_PATH = "./public/index.html";
const joinPath = (suffix) => path.resolve(__dirname, suffix);

module.exports = {
  entry: "src/index",
  output: {
    filename: "bundle.js",
    path: joinPath("dist"),
  },
  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx"],
    enforceExtension: false,
    alias: {
      src: joinPath("src/"),
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: BUILD_HTML_PATH,
    }),
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: "main.css",
      chunkFilename: "main.chunk.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /[\.js|\.jsx]$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]_[local]_[hash:base64]",
              },
              importLoaders: 1,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
