const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: [
        "babel-polyfill",
        path.resolve(__dirname, 'src/chapter11')
    ],
    mode: 'development', //change this to production when ready
    output: {
        filename: 'main.js', //Let us maintain the output file name, consistent with what we used in our index.html.
        path: path.resolve(__dirname, 'dist/chapter11/js'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
    ]
};
