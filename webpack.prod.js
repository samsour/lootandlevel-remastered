const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = [
    merge(common, {
        mode: 'production',
        optimization: {
            minimizer: [new TerserPlugin()],
        }
    }),
    {
        mode: 'development',

        target: "node",

        entry: [
            path.resolve(__dirname, 'src', 'server', 'serverMain.js')
        ],

        output: {
            path: path.resolve(__dirname, 'dist', 'server')
        },

        externals: [nodeExternals()],

        // optimization: {
        //     minimizer: [new TerserPlugin()],
        // }
    }
]