var path = require('path');


module.exports = {
    entry: './wrapper.js',
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'build-kit.js',
        publicPath: '/assets'
    },
  watch: true,
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        },{
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules$/,
          query:{
            presets: ['es2015','react']
          }
        }

      ],
    },
    node: {
        fs: 'empty'
    }
};