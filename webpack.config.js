const path = require('path');
const webpack = require('webpack');

const configs = {
  entry: './src/app/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
}
if(process.env.NODE_ENV === 'development'){
  configs.watch = true;
  configs.devtool = 'source-map';
} else if(process.env.NODE_ENV==='hot'){
  console.log('loading hot');
  configs.devtool = 'source-map';
  configs.devServer = {
    hot: true
  };
  configs.plugins = [
    new webpack.HotModuleReplacementPlugin()
  ];
}
module.exports = configs;