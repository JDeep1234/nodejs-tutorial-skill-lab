const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


eventEmitter.on('greet', () => console.log('First listener triggered.'));
eventEmitter.on('greet', () => console.log('Second listener triggered.'));

eventEmitter.emit('greet');

const listener = () => console.log('This will be removed.');
eventEmitter.on('greet', listener);

eventEmitter.emit('greet');

eventEmitter.removeListener('greet', listener);

eventEmitter.emit('greet');

eventEmitter.removeAllListeners()
eventEmitter.emit('greet');
