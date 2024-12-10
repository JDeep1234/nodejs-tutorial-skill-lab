const http = require('http');

const postData = JSON.stringify({
  name: 'Node.js',
  type: 'Server-side'
});

const options = {
  hostname: 'httpbin.org',
  port: 80,
  path: '/post',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
  }
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

req.write(postData);
req.end();