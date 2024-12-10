const fs = require('fs');
const source = fs.createReadStream('example.txt');
const destination = fs.createWriteStream('destination.txt');

source.pipe(destination);

destination.on('finish', () => {
    console.log('File copied successfully');
});
