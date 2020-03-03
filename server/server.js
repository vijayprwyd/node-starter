//Every file is treated as a module in Node js

const http = require('http');
const url = require('url');

function getResponse(response, pathName) {
    if (pathName === '/overview') {
        return 'This is the overview';
    } else if (pathName === '/product') {
        return 'This is the product';
    } else if (pathName == '/api') {
        response.end(data);
    } else {
        //Headers should be set before content
        response.writeHead(404, {
            'Content-type': 'text/html',
            'my-custom-header': 'hello-world'
        });
        return '<h1>Page not found!</h1';
    }
}


function createAndRunServer() {
    // 1. Create the server. The callback function is executed each time a new request reaches the server
    const server = http.createServer((request, response) => {

        const { query, pathname } = url.parse(request.url, true);
        console.log(query);
        console.log(pathname);
        const pathName = request.url;
        response.end(getResponse(response, pathName));
    });

    // 2. Listen to the incoming requests 
    // Port number, Ip and callback function which will be executed once the server starts listening
    server.listen(8000, '127.0.0.1', () => {
        console.log('Listening to request on port 8000');
    });
}


// The "parent" is the module that caused the script to be interpreted (and cached), if any
module.exports = createAndRunServer;

