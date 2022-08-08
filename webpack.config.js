const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    entry:{
        path:resolve(__dirname,'./src/index.js')
    },
    output:{
        path:resolve(__dirname,'./dist'),
        filename:'js/[name].js'
    },
    mode:'development',
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                use:'babel-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:resolve(__dirname,'./public/index.html'),
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: false,
            __VUE_PROD_DEVTOOLS__: false,
        }),
    ]
}