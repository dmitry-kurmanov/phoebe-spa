var spawn = require('child_process').spawn;
var children  = [
    spawn('node', ['./scripts/client.js', '--development', '--watch','--source-map'], { stdio: 'inherit' }),
    spawn('node', ['./scripts/server.js', '--development', '--watch', '--run', '--source-map', '--debug'], { stdio: 'inherit' })
];

process.on('exit', function() {
    children.forEach(function(child) {
        child.kill();
    });
});