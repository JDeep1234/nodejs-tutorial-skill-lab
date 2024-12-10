const fs = require('fs');
const writeStream = fs.createWriteStream('output.txt');

writeStream.write('This is the first line\n');
writeStream.write('This is the second line\n');

writeStream.end(() => {
    console.log('Finished writing to the file');
});
