const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('greet', () => console.log('First listener triggered.'));
eventEmitter.on('greet', () => console.log('Second listener triggered.'));

eventEmitter.emit('greet');
