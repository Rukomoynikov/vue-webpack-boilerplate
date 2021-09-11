const HtmlWebpackPlugin     = require('html-webpack-plugin');
const { VueLoaderPlugin }   = require('vue-loader')
const InlineChunkHtmlPlugin = require('inline-chunk-html-plugin');
const webpack               = require('webpack');
const path                  = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', inject: true }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/[.]js/]),
    new VueLoaderPlugin()
  ],
};
