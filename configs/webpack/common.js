// shared config (dev and prod)
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: {
          loader: "awesome-typescript-loader",
          options: {
            babelCore: "@babel/core",
            babelOptions: {
              presets: [
                [
                  require.resolve("@babel/preset-env"),
                  {
                    modules: false,
                    targets: { browsers: ["last 2 versions", "safari >= 7"] }
                  }
                ],
                require.resolve("@babel/preset-react")
              ]
            },
            ignoreDiagnostics: [2305, 2307],
            transpileOnly: true,
            useBabel: true,
            useCache: true
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        // Add JSON to extension whitelist
        test: /\.json/,
        type: "json"
      },
      {
        include: /node_modules/,
        test: /\.mjs$/,
        type: "javascript/auto"
      },
      {
        loader: "raw-loader",
        test: /\.md$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
        ]
      },
      {
        loader: "file-loader",
        test: /\.(png|gif|jpg|jpeg|woff|ttf|eot|otf|woff2)$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html.ejs",
      favicon: "../src/favicon.ico",
      inject: false
    })
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  performance: {
    hints: false
  }
};
