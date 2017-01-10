var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/main.js'),
        vendors: ['vue', 'vue-router']
    },
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: '[name].[hash:8].js',
        chunkFilename: '[name].[hash:8].js'
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
                    name: 'images/[name].[hash:8].[ext]',
                    limit: 1
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css!postcss")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("css!postcss!less")
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract("css!postcss!sass")
            },
            {
                test: /\.styl/,
                loader: ExtractTextPlugin.extract("css!postcss!stylus")
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract("css!postcss"),
            less: ExtractTextPlugin.extract("css!postcss!less"),
            scss: ExtractTextPlugin.extract("css!postcss!sass"),
            stylus: ExtractTextPlugin.extract("css!postcss!stylus")
        },
        postcss: [require("cssnano")]
    },
    postcss: [require("cssnano")],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        new webpack.optimize.OccurrenceOrderPlugin(),

        new ExtractTextPlugin("css/style.[hash:8].css", {allChunks: true}),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new HtmlWebpackPlugin({
            template: 'index.tpl.html'
        })

    ]
}