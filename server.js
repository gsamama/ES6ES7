const express = require('express');

const path = require('path');
const app = express();

app.set('PORT', process.env.PORT || 8080);

if(process.env.NODE_ENV === 'development'){
  const webpackconfig = require('./webpack.config');
  const webpack = require('webpack');
  const webpackmiddleware = require('webpack-dev-middleware');

  app.use(webpackmiddleware(webpack(webpackconfig)));

} else {
  app.use(express.static('dist'));
}

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('PORT'), ()=>{
  console.log(`Listening on port: ${app.get('PORT')}`);
})