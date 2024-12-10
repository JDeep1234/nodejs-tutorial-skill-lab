console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
}, 2000);

setImmediate(() => {
    console.log('Immediate 1');
});

console.log('End');
