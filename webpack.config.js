const path = require('path');

module.exports = {  
  entry: './dist/js/index.js',  
  output: {    
    path: path.resolve(__dirname, './dist'),    
    filename: 'bundle.js'
  },
  devtool: 'eval'  
};