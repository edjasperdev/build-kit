var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './wrapper.js',
    output: {
        libraryTarget: 'var',
        library: 'showBuildKit',
        path: 'assets',
        filename: 'build-kit.js',
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
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
            }
        ],
    },
    sassLoader: {
        includePaths: [ 'client/style' ]
    }
};