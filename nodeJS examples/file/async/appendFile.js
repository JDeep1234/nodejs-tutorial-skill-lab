const fs = require('fs');
fs.appendFile('output.txt', '\nAppending some text.', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Text appended successfully!');
});
