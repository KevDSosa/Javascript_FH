const HtmlWebPack = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          //   attributes: false,
          sources: false,
          minimize: true, //para que el cliente no vea los comentarios
        },
      },
      {
        test: /\.css$/i,
        exclude: /style.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /style.css$/,
        use: [MiniCssExtract.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPack({
      template: "./src/index.html",
      filename: "./index.html",
      title: "Mi Webpack App",
    }),
    new MiniCssExtract({
      filename: "styles.css",
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets/",
          to: "assets/",
        },
      ],
    }),
  ],
};
