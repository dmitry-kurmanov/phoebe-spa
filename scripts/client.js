var argv, client, CompilerClient;

require('babel-core/register')({
    'presets' : [
        'latest',
        'stage-0'
    ]
});

argv = require('minimist')(process.argv.slice(2));

CompilerClient = require('../compiler/CompilerClient').CompilerClient;

client = new CompilerClient(argv);