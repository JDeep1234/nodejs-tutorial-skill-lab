const fs = require('fs');

try {
    fs.unlinkSync('output.txt');
    console.log('File deleted successfully!');
} catch (err) {
    console.error('Error deleting file:', err);
}
