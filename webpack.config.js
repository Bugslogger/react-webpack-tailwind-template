const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.js"),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/[name].[chunkhash].js",
    assetModuleFilename: "assets/[name].[ext]",
    publicPath: "/",
    clean: true,
  },

  module: {
    rules: [
      { test: /\.(js|jsx)?$/, exclude: /node_modules/, use: ["babel-loader"] },
      {
        test: /\.txt$/i,
        use: [{ loader: "raw-loader" }],
        type: "asset/source",
      },
      {
        test: /\.(png|jpg|jpeg|webp)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images/",
            },
          },
        ],
        dependency: { not: ["url"] },
        type: "javascript/auto",
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        type: "javascript/auto",
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/icons/",
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/i,
        include: path.resolve(__dirname, "src"),
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: true,
      //   favicon: "public/favicon.ico",
    }),
  ],
};
