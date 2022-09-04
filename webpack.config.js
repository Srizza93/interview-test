const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWepbackPluglin = require("html-webpack-plugin");
const webpack = require("webpack");

let config = {
  mode: "development",
  entry: {
    main: {
      import: path.resolve(__dirname, "./src/main.js"),
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWepbackPluglin({
      title: "Excuses de Dev",
      chunks: ["main"],
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "inline-source-map";
  }

  if (argv.mode === "production") {
    config.output.publicPath = "/interview-test/";
  }

  return config;
};
