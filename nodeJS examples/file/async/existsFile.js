const fs = require('fs');

fs.exists('example.txt', (exists) => {
    if (exists) {
        console.log('File exists');
    } else {
        console.log('File does not exist');
    }
});
