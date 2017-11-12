const webpack = require('webpack');
const path = require('path');

const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
}

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(PATHS.src, 'index.js')
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(PATHS.dist, 'js')
    },
    devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.(js|jsx)/,
                exclude: /(node_modules|dist)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new htmlPlugin({
            template: path.join(PATHS.src, 'index.html'),
            files: {
                js: ['bundle.js']
            }
        })
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        inline: true,
        historyApiFallback: true,
        host: '127.0.0.1',
        port: '9000'
    }
}
