const http = require('http');

// Define the options for the GET request
const options = {
  hostname: 'jsonplaceholder.typicode.com', // A public API for testing
  port: 80,                                // HTTP uses port 80
  path: '/todos/1',                        // Path for the resource you want to fetch
  method: 'GET',                           // HTTP method (GET in this case)
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
  });
});

req.on('error', (e) => {
  console.error('Problem with request:', e.message);
});

req.end();
