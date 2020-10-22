const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const CssLoaders = extra => {
    const loaders = [MiniCssExtractPlugin.loader,'css-loader']
    if (extra) {
        loaders.push(extra)
    }
    return loaders
    
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill','./index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js','.json', '.png','.jpg']
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.pug',
            filename: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(
            {
                filename: '[name].css'
            }
        ),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: CssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: CssLoaders('sass-loader')
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader', 'url-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    }
}