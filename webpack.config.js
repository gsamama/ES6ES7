const path = require('path');
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
}

module.exports = configs;