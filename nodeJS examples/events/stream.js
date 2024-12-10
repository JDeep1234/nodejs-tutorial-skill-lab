const fs = require('fs');
const stream = fs.createReadStream('example.txt');

stream.on('data', (chunk) => {
    console.log('Received chunk:', chunk.toString());
});

stream.on('end', () => {
    console.log('Stream ended.');
});

stream.on('error', (err) => {
    console.error('Stream error:', err);
});
