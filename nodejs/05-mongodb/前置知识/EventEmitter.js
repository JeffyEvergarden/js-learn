const { EventEmitter } = require('events')

const event = new EventEmitter()

event.on('conn', (num) => {
  console.log('num:' + num)
})

let num = 0

setInterval(() => {
  event.emit('conn', num++)
}, 2000)
