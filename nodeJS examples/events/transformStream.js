const { Transform } = require('stream');

const toUpperCaseStream = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(toUpperCaseStream).pipe(process.stdout);
