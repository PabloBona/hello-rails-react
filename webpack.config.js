const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    application: './app/javascript/application.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'], // Solo babel-loader para archivos JS
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'bootstrap-loader'], // Usar style-loader y css-loader para archivos CSS
      },
    ],
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    path: path.resolve(__dirname, 'app/assets/builds/greetings'),
  },
};
