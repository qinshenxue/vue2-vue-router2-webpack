var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/main.js'),
        vendors: ['vue', 'vue-router']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/, loader: 'vue'
            },
            {
                test: /\.(jpe?g|png|gif|svg|mp3)$/,
                loader: "url",
                query: {
                    name: 'images/[name].[ext]',
                    limit: 1
                }
            },
            {
                test: /\.css$/,
                loader: "vue-style!css!postcss"
            },
            {
                test: /\.less$/,
                loader: "vue-style!css!less"
            },
            {
                test: /\.scss/,
                loader: "vue-style!css!sass"
            },
            {
                test: /\.styl/,
                loader: "vue-style!css!stylus"
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    vue: {
        loaders: {
            css: "vue-style!css",
            less: "vue-style!css!less",
            scss: "vue-style!css!sass",
            stylus: "vue-style!css!stylus"
        }
    },
plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors'
    })
]
}