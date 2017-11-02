const webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './BuildKit/Components/App.js',
    output: {
        path: path.resolve(__dirname, 'assets'),
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
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
}
;


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