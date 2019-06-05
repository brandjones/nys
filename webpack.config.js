const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "test") {
  require("dotenv").config({ path: ".env.test" });
} else if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.development" });
}

module.exports = env => {
  const isProduction = env === "production";
  return {
    mode: process.env.NODE_ENV,
    entry: ["./src/app.js"],
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js" //
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-syntax-object-rest-spread",
                "@babel/plugin-transform-react-jsx"
              ]
            }
          }
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: ["file-loader"]
        },
        {
          test: /\.(html)$/,
          use: {
            loader: "html-loader",
            options: {
              attrs: [":data-src"]
            }
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        hash: true,
        template: "./public/index.html",
        filename: "index.html"
      })
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: "/dist/"
    }
  };
};
