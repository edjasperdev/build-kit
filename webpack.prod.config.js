const webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './BuildKit/Components/App.js',
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'build-kit-min.js',
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
