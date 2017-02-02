const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  entry: {
    bs3: [
      'webpack-dev-server/client',
      'webpack/hot/dev-server',
      'font-awesome-loader',
      `bootstrap-loader/lib/bootstrap.loader?configFilePath=${__dirname}/bs3.yml!bootstrap-loader/no-op.js`,
      './app/scripts/app',
    ],
  },

  devServer: {
    hot: true,
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/',
  },


  resolve: { extensions: ['', '.js'] },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './app/markup/bootstrap-example.html',
    }),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css', 'postcss'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file',
      },

      { test: /\.html$/, loader: 'raw-loader' },

      // Bootstrap 3
      { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports-loader?jQuery=jquery' },
    ],
  },

  postcss: [autoprefixer],

};
