let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/source.js',
    output: {
        filename: 'output.js',
    },
    plugins: [new HtmlWebpackPlugin()]
};
