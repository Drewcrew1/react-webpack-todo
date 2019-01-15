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
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};
module.exports = config;