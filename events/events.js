const EventEmitter = require('events');




class Observer extends EventEmitter {

    constructor() {
        super();
    }
}




const myEmitter = new Observer();
//const myEmitter = new EventEmitter();

myEmitter.on('event1', (num) => {
    console.log('Listener 1 : Event 1 listening ' + num)
})


myEmitter.on('event1', () => {
    console.log('Listener 2: Event 1 listening')
})


myEmitter.emit('event1', 9);