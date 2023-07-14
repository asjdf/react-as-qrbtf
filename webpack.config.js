const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'react-as-qrbtf',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimizer: [
            new TerserWebpackPlugin(),
        ]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }]
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    }
}