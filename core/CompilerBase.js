import webpack from 'webpack';
import respawn from 'respawn';
import fs from 'fs';
import autoprefixer from 'autoprefixer';
import postCssNested from 'postcss-nested';
import postCssColorfun from 'postcss-color-function';
import postCssVars from 'postcss-simple-vars';
import postCssImport from 'postcss-import';

export class CompilerBase {
    constructor(argv) {
        this.options = this.getOptions(argv);
        this.webpackConfig = this.getWebpackConfig();
        this.compiler = webpack(this.webpackConfig);
        this.optionalStartAndWatch();
    }

    getWebpackConfig() {
        return {
            entry: this.getEntry(),
            target: this.getTarget(),
            output: this.getOutput(),
            module: {
                loaders: this.getLoaders()
            },
            resolve: {
                extensions: this.getExtensions()
            },
            externals: this.getExternals(),
            plugins: this.getWebpackPlugins(),
            devtool: this.options.sourceMap ? 'sourcemap' : undefined,
            postcss(webpack) {
                return [
                    postCssImport({
                        path: ['./src/common/components'],
                        addDependencyTo: webpack
                    }),
                    postCssNested(),
                    postCssVars(),
                    postCssColorfun(),
                    autoprefixer()
                ];
            }
        };
    }

    getOptions(argv) {
        if(argv.help) {
            this.help();
            process.exitCode(0);
        }
        const options = {
            env : 'development',
            run: false,
            sourceMap: false,
            watch: false,
            debug: false,
            hot: false,
        };
        if(argv.development && argv.production) {
            throw new Error('npm <command> [ --development | --production ]');
        }
        if(argv.development) {
            options.env = 'development';
        }
        if(argv.production) {
            options.env = 'production';
        }
        if(argv.run) {
            options.run = true;
        }
        if(argv.watch) {
            options.watch = true;
        }
        if(argv.debug) {
            options.debug = true;
        }
        if(argv.hot) {
            options.hot = true;
        }
        if(argv.filename) {
            options.filename = argv.filename;
        }
        if(argv['source-map']) {
            options.sourceMap = true;
        }
        return options;
    }

    getWebpackPlugins() {
        if(this.options.env === 'development') {
            return [
                new webpack.DefinePlugin(this.getWebpackDefinePlugin())
            ];
        } else {
            return [
                new webpack.DefinePlugin(this.getWebpackDefinePlugin()),
                new webpack.optimize.DedupePlugin(),
                new webpack.optimize.OccurrenceOrderPlugin(),
                new webpack.optimize.AggressiveMergingPlugin(),
                new webpack.optimize.UglifyJsPlugin({
                    compress: { warnings: false },
                    comments: false,
                    sourceMap: true,
                    mangle: true,
                    minimize: true
                })
            ];
        }
    }

    getBabelPlugins() {
        return [
            'html-template',
            'transform-decorators-legacy',
            ...((this.options.env === 'development') ? [
                'syntax-flow',
                'tcomb',
                'transform-flow-strip-types'
            ] : [
                'transform-react-remove-prop-types',
                'transform-react-constant-elements'
            ])
        ];
    }

    getWebpackDefinePlugin() {
        return {
            'process.env.NODE_ENV': `'${this.options.env}'`,
            ...((this.options.env === 'development') ? {
                'Environment.isDevelopment()' : 'true',
                'Environment.isProduction()' : 'false',
            } : {
                'Environment.isDevelopment()' : 'false',
                'Environment.isProduction()' : 'true',
            })
        }
    }

    getBabelPresets() {
        return [
            'latest',
            'stage-0',
            'react'
        ]
    }

    getExtensions() {
        return [
            '',
            '.js',
            '.jsx'
        ];
    }

    getLoaders() {
        return [
            {
                tests: /\.jsx?$/,
                exclude: (this.options.env === 'development') ? './node_modules/' : undefined,
                loader: 'babel-loader',
                query: {
                    presets: this.getBabelPresets(),
                    plugins: this.getBabelPlugins()
                }
            }
        ];
    }

    getOutput() {
        if(this.options.sourceMap) {
            return {
                devtoolModuleFilenameTemplate: '[resource-path]',
                devtoolFallbackModuleFilenameTemplate: '[resource-path]?[hash]'
            };
        } else {
            return {};
        }
    }

    getPathToStartScript() {
        return this.webpackConfig.output.path + '/' + this.webpackConfig.output.filename;
    }

    getRespawnConfig() {
        if(this.options.debug) {
            return [
                'node',
                '--debug',
                this.getPathToStartScript()
            ];
        } else {
            return [
                'node',
                this.getPathToStartScript()
            ];
        }
    }

    startProcess() {
        this.process = respawn(this.getRespawnConfig(), {
            maxRestarts:0,
            kill:5000,
            stdio: 'inherit'
        });

        this.process.start();

        process.on('exit', () => {
            this.process.stop();
        });
    }

    stopProcess() {
        if(this.process) {
            this.process.stop();
        }
    }

    restartProcess() {
        if(this.process) {
            this.process.stop(() => {
                this.process.start()
            });
        }
    }

    optionalStartAndWatch() {
        if(this.options.watch) {
            const stdin = process.openStdin();
            stdin.addListener("data", (data) => {
                if(data.toString().indexOf('rs') !== -1) {
                    this.restartProcess();
                }
            });
            this.compiler.watch({}, (err, stats) => {
                if(this.options.run) {
                    if(stats.hasErrors()) {
                        this.stopProcess()
                    } else {
                        if(this.process) {
                            this.restartProcess();
                        } else {
                            this.startProcess();
                        }
                    }
                }
                this.buildInfo(err, stats);
            });
        } else {
            this.compiler.run((err, stats) => {
                if(this.options.run) {
                    if(!stats.hasErrors()) {
                        this.startProcess();
                    }
                }
                this.buildInfo(err, stats);
            });
        }
    }

    buildInfo(err, stats) {
        console.log(this.getBuildName(), this.getTime(), stats.toString(this.getStats()));
        const buildInfoPath = this.getBuildInfoPath();
        if(buildInfoPath) {
            fs.writeFile(buildInfoPath, JSON.stringify(stats.toJson()), ()=>{});
        }
    }

    getTime() {
        return '(' + (new Date()).toTimeString().split(' ')[0] + ')';
    }

    getExternals() {
        return undefined;
    }

    getStats() {
        return {
            assets: true,
            colors: true,
            version: false,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            children: false
        };
    }

    getBuildInfoPath() {
        return undefined;
    }

    getTarget() {
        throw new Error('CompilerBase is Abstract Class');
    }

    help() {
        throw new Error('CompilerBase is Abstract Class');
    }

    getEntry() {
        throw new Error('CompilerBase is Abstract Class');
    }

    getBuildName() {
        throw new Error('CompilerBase is Abstract Class');
    }
}
