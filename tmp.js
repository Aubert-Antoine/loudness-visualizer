const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
        popup: path.resolve('./src/popup/popup.tsx'),
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx$/,
                exclude: /node_modules/,
            },
            {
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: [
                            postcssImport,
                            tailwindcss,
                        ],
                    },
                }],
                test: /\.css$/i,
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('src/static/'),
                    to: path.resolve('dist'),
                },
            ],
        }),
        new HtmlPlugin({
            title: 'loudness-visualizer',
            filename: 'popup.html',
            chunks: ['popup'],
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
    },
};
