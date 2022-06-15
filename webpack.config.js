const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {  
  entry: './src/js/index.js',  
  devtool: 'cheap-source-map',
  output: {    
    path: path.resolve(__dirname, './src/assets'),    
    filename: 'bundle.min.js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader",
          "postcss-loader"
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  plugins: [new MiniCssExtractPlugin({
    filename:"bundle.min.css",
    chunkFilename: "bundle.min.css"
  })],
};