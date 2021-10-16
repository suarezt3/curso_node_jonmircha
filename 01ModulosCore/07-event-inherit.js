//https://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor

'use strict'

let EventEmitter = require('events').EventEmitter
let	inherits = require('util').inherits

class Clock {constructor() {
		let self = this

		setInterval(function () {
			//console.log('hola')
			self.emit('tictac')
		}, 1000)
	}
	theTime() {
		let date = new Date()
		let hrs = date.getHours()
		let min = date.getMinutes()
		let sec = date.getSeconds()
		let msg = `${hrs}:${min}:${sec}`

		console.log(msg)
	}
}

inherits(Clock, EventEmitter)


let cucu = new Clock()

cucu.on('tictac', function (){
	cucu.theTime()
})