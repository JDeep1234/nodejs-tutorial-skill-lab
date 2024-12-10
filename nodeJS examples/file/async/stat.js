const fs = require('fs');

fs.stat('example.txt', (err, stats) => {
    if (err) {
        console.error('Error getting file stats:', err);
    } else {
        console.log('File stats:', stats);
        console.log('Is file?', stats.isFile());
        console.log('Is directory?', stats.isDirectory());
    }
});
