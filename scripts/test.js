var argv, tests, CompilerTests;

require('babel-core/register')({
    'presets' : [
        'latest',
        'stage-0'
    ]
});

argv = require('minimist')(process.argv.slice(2));

CompilerTests = require('../compiler/CompilerTests').CompilerTests;

tests = new CompilerTests(argv);

