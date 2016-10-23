var argv, server, CompilerServer;

require('babel-core/register')({
    'presets' : [
        'latest',
        'stage-0'
    ]
});

argv = require('minimist')(process.argv.slice(2));

CompilerServer = require('../compiler/CompilerServer').CompilerServer;

server = new CompilerServer(argv);