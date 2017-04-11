var path=require('path');
var webpack =require('webpack');
var HtmlWebpackPlugin= require('html-webpack-plugin');
var config=require('./config');
module.exports = {
    devtool:'eval-source-map',
    entry: path.join(__dirname, 'Client/main.js'),
    output: {
        path: path.join(__dirname,'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    devServer: {
        proxy: {
            '*': {
                target:'http://localhost:'+(config.dev.port-1),
                secure:false
            }
        }
    },
    resolve: {      alias: {
        'vue': 'vue/dist/vue.js'
    }
    },
    plugins: [
    new webpack.DefinePlugin({
        VUE_VERSION: JSON.stringify(require('./node_modules/vue/package.json').version)
    }),
        new HtmlWebpackPlugin({
            template:'./Client/index.html',
            inject: 'body',
            filename: '../index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
]
}
