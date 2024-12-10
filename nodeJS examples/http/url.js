const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/search')) {
        const query = url.parse(req.url, true).query;
        const params = JSON.stringify(query);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(`You searched with the following parameters: ${params}`);
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
