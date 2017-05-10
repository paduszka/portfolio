//Konfiguracja Webpack
const path = require('path');
//ZMIANA BEGIN
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//ZMIANA END

module.exports = {
    entry: "./js/app.js",
    resolve: {
        modules: [
            path.resolve('./js'),
            path.resolve('./node_modules'),
        ]
    },
    output: { filename: "./js/out.js" },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,  exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2' , 'react'] }
            },
            //ZMIANA BEGIN
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: 'css-loader?sourceMap!sass-loader?sourceMap'
                }),
            }
            //ZMIANA END
        ],
    },
    //ZMIANA BEGIN
    plugins: [
        new ExtractTextPlugin('css/style.css'),
    ],
    //ZMIANA END
}
