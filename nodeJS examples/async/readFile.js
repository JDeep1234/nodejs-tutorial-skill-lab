const fs = require('fs').promises;

fs.readFile('example.txt', 'utf8')
    .then((data) => console.log('File Content:', data))
    .catch((err) => console.error('Error reading file:', err));
