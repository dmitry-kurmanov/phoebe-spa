import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { CompilerBase } from './CompilerBase';

export class CompilerClientBase extends CompilerBase {
    getBuildName() {
        return '[webpack:compiler-client]';
    }

    getEntry() {
        return [
            'babel-polyfill',
            './src/common/components/presentational/reset.css',
            './src/client/index.js'
        ];
    }

    getOutput() {
        return {
            ...super.getOutput(),
            path: './bin/static',
            filename: 'client.js',
            publicPath: '/client.js'
        };
    }

    getTarget() {
        return 'web';
    }

    getLoaders() {
        return [
            ...super.getLoaders(),
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader?modules&importLoaders=1&localIdentName=[name]__[local]!postcss-loader')
            }
        ];
    }

    getWebpackDefinePlugin() {
        return {
            ...super.getWebpackDefinePlugin(),
            'process.env.TARGET' : '"client"',
            'Environment.isClient()' : 'true',
            'Environment.isServer()' : 'false',
        }
    }

    getWebpackPlugins() {
        return [
            ...super.getWebpackPlugins(),
            new ExtractTextPlugin('style.css', {
                allChunks: true,
                publicPath : '/style.css'
            })
        ];
    }

    startProcess() {}

    getBuildInfoPath() {
        return 'bin/client-stats.json';
    }
}