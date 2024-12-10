const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page!');

    } else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Us Page');

    } else if (req.url === '/json' && req.method === 'GET') {
        const data = {
            message: 'Hello, Node.js!',
            timestamp: new Date(),
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));

    } else if (req.url === '/html' && req.method === 'GET') {
        const pathOfFile = path.join(__dirname,'index.html');
        fs.readFile(pathOfFile , 'utf8', (err, htmlContent) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(htmlContent);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
