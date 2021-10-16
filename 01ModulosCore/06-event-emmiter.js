//https://es.wikipedia.org/wiki/Observer_(patr%C3%B3n_de_dise%C3%B1o)

'use strict'

let EventEmitter = require('events').EventEmitter
let	pub = new EventEmitter()

pub										//? La menera de llamar un evento es con .on		
	.on('myevent', function (message){ 
		console.log(message)
	})

	.once('myevent', function (message){ //? El evento .once se ejecuta una sola vez
		console.log('Se emite la primera vez:' + message)
	})

pub.emit('myevent', 'Soy un emisor de eventos') //? El metodo .emit perite emitir un evento
pub.emit('myevent', 'Volviendo a emitir')
pub.removeAllListeners('myevent')
pub.emit('myevent', 'Volviendo a emitir por tercera vez')
