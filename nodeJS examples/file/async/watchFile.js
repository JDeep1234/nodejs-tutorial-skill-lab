const fs = require('fs');

fs.watch('example.txt', (eventType, filename) => {
    if (eventType === 'change') {
        console.log(`File ${filename} has been changed`);
    }
});
