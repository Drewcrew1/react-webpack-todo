const webpack = require('webpack');
const path = require('path');

const config = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'todoApp'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,

                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-class-properties']
                }
            }
        ]
    }
};
module.exports = config;