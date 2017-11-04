const webpack = require('webpack');
var path = require('path');

let config = {
    entry: './BuildKit/Components/App.js',

    output: {
        path: path.resolve(__dirname),
        filename: 'build-kit.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname,
            },
            {
                test: /\.scss$/,
                loaders: 'style-loader!css-loader!sass-loader'
            },
        ],
    },

}

module.exports = config

// var path = require('path');
//
//
// module.exports = {
//     entry: './wrapper.js',
//     output: {
//         path: path.resolve(__dirname, 'assets'),
//         filename: 'build-kit.js',
//         publicPath: '/assets'
//     },
//   watch: true,
//     module: {
//       loaders: [
//         {
//           test: /\.scss$/,
//           loader: 'style-loader!css-loader!sass-loader'
//         },{
//           test: /\.js$/,
//           loader: 'babel-loader',
//           exclude: /node_modules$/,
//           query:{
//             presets: ['env','react']
//           }
//         }
//
//       ],
//     },
//     node: {
//         fs: 'empty'
//     }
// };