const fs = require('fs');

try {
    fs.appendFileSync('output.txt', '\nAppending some text.');
    console.log('Text appended successfully!');
} catch (err) {
    console.error('Error appending to file:', err);
}
