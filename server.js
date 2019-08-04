/**
 * Simple static node server to serve files in this directory over HTTP.
 * Only used for local debugging.
 */
const StaticServer = require('static-server');

const server = new StaticServer({
    rootPath: '.',
    port: process.env.port || 8080,
});

server.start(function() {
    console.log('Server listening to ' + server.port);
});
