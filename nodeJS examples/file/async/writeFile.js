const fs = require('fs');

const dataToWrite = 'Hello, this is a test message written to the file.';

fs.writeFile('example.txt', dataToWrite, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Data has been written to example.txt');
  }
});
