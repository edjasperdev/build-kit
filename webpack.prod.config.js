const webpack = require('webpack');

module.exports = {
    entry: './wrapper.js',
    output: {
        libraryTarget: 'var',
        library: 'showBuildKit',
        path: 'assets',
        filename: 'build-kit-min.js',
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                include: __dirname,
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
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