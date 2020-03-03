const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
    console.log("Request Received");
    response.end("Request Received");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Waiting for requests");
});