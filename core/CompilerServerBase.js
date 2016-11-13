import webpack from 'webpack';
import externals from 'webpack-node-externals';
import { CompilerBase } from './CompilerBase';

export class CompilerServerBase extends CompilerBase {
    getBuildName() {
        return '[webpack:compiler-server]';
    }

    getEntry() {
        return [
            'babel-polyfill',
            './src/server/index.js'
        ];
    }

    getOutput() {
        return {
            ...super.getOutput(),
            path: './bin',
            filename: 'server.js',
        };
    }

    getTarget() {
        return 'node';
    }

    getLoaders() {
        return [
            ...super.getLoaders(),
            {
                test: /\.css$/,
                loader: 'isomorphic-style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]!postcss-loader'
            }
        ];
    }

    getWebpackDefinePlugin() {
        return {
            ...super.getWebpackDefinePlugin(),
            'process.env.TARGET' : '"server"',
            'Environment.isClient()' : 'false',
            'Environment.isServer()' : 'true',
        }
    }

    getWebpackPlugins() {
        return [
            ...super.getWebpackPlugins(),
            ...(this.options.sourceMap ? [
                new webpack.BannerPlugin('require("source-map-support").install();', {
                    raw: true,
                    entryOnly: false
                })
            ] : [])
        ]
    }

    getExternals() {
        return [externals()];
    }

    getBuildInfoPath() {
        return 'bin/server-stats.json';
    }
}