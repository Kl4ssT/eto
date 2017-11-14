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
            },
            {
                test: /\.(sass|scss)/,
                exclude: /(node_modules|dist)/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader!autoprefixer-loader'
                })
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new extractTextPlugin('css/styles.css'),
        new htmlPlugin({
            template: path.join(PATHS.src, 'index.html'),
            files: {
                js: ['bundle.js'],
                css: ['styles.css']
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
