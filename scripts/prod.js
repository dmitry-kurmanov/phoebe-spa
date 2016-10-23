var spawn = require('child_process').spawn;
var children  = [
    spawn('node', ['./scripts/client.js', '--production', '--source-map'], { stdio: 'inherit' }),
    spawn('node', ['./scripts/server.js', '--production', '--source-map'], { stdio: 'inherit' })
];

process.on('exit', function() {
    children.forEach(function(child) {
        child.kill();
    });
});