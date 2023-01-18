const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    entry: {
        popup: './src/popup/popup.tsx'
    },
    module: {
        rules: [
            {
                use: "ts-loader",
                test: /\.tsx$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                from: path.resolve('src/assets/manifest.json'),
                to: path.resolve('dist')
                },
                {
                from: path.resolve('src/assets/icon.png'),
                to: path.resolve('dist')
                }
            ],
        }),
        new HtmlPlugin({
            title :'loudness-visualizer',
            filename: 'popup.html',
        })
    ],
    resolve: {
        extensions: ['.tsx', 'ts', '.js']
    },
    output: {
        filename: "index.js"
    }
}