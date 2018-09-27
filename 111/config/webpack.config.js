const path=require('path');
const webpack=require('webpack');
module.exports={
  entry:{
    index:'./src/js/index.js'
  },
  output:{
    fileName:'[name].js',
    path:path.resolve(__dirname,'../out')
  },
  mode:'development'
}