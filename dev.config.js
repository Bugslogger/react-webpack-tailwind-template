const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/[name].[chunkhash].js",
    publicPath: "/",
    assetModuleFilename: "assets/[name][ext]",
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
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      //   favicon: "public/favicon.ico",
    }),
  ],

  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port: 3000,
    hot: true,
    historyApiFallback: true,
    open: true,

    // watchContentBase: true,
  },
};
