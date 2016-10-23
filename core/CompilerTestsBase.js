import webpack from 'webpack';
import externals from 'webpack-node-externals';
import { CompilerBase } from './CompilerBase';

export class CompilerTestsBase extends CompilerBase {
    getBuildName() {
        return '[webpack:tests]';
    }

    getTarget() {
        return 'node';
    }

    getEntry() {
        return [
            'babel-polyfill',
            './core/test.js'
        ];
    }

    getBabelPlugins() {
        return [
            ...super.getBabelPlugins(),
            [
                'css-modules-transform', {
                    generateScopedName : '[name]__[local]',
                    prepend : [
                        'postcss-nested'
                    ]
                }
            ],
            ...(this.options.coverage ? [
                'istanbul'
            ] : [])
        ];
    }

    getWebpackDefinePlugin() {
        const plugin = super.getWebpackDefinePlugin();
        for(let define in plugin) {
            if(define.indexOf('Environment') !== -1) {
                delete plugin[define];
            }
        }
        if(this.options.filename) {
            plugin['process.env.TEST_FILE_NAME'] = '"' + this.options.filename + '"';
        }
        return plugin;
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

    getOptions(argv) {
        if(argv.coverage && argv.debug) {
            throw new Error('Usage: npm test [ --coverage | --debug ] [ test.js ]');
        }
        const options = super.getOptions(argv);
        options.coverage = false;
        options.run = true;
        options.watch = false;
        options.sourceMap = true;
        if(argv.coverage) {
            options.coverage = true;
        }
        return options;
    }

    getRespawnConfig() {
        if(this.options.coverage) {
            return [
                'node',
                'node_modules/.bin/nyc',
                '--reporter=html',
                '--reporter=lcov',
                '--report=json',
                'mocha',
                this.getPathToStartScript()
            ];
        }
        if(this.options.debug) {
            return [
                'node',
                'node_modules/.bin/mocha',
                '--debug-brk',
                '--colors',
                this.getPathToStartScript()
            ];
        } else {
            return [
                'node',
                'node_modules/.bin/mocha',
                '--colors',
                this.getPathToStartScript()
            ];
        }
    }



    getExternals() {
        return [externals()];
    }

    getOutput() {
        return {
            ...super.getOutput(),
            path: './bin',
            filename: 'test.js',
        };
    }

    getStats() {
        return {
            assets: false,
            colors: false,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false,
            children: false
        };
    }

    help() {
        console.log('Usage: npm test [ --coverage | --debug ] [ --filename=test.js ]');
        console.log('');
        console.log('Options:');
        console.log('  --coverage     transparently adds coverage information to a node command. Saves coverage.json and reports at the end of execution');
        console.log('  --debug        start node.js in debug mode listening on port 5858');
    }
}