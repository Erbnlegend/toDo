const path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
    ]
  }
};