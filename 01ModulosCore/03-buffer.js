/*
Buffers
	Una tira de bytes (datos binarios)
	Similar a un array de enteros
	Tamaño fijo
	Manipular datos directamente
		Sockets
		Streams
		Implementar protocolos complejos
		Manipulación de ficheros/imágenes
		Criptografía
*/
'use strict'

var buf = new Buffer(50),
	buf2 = new Buffer(26),
	str = '\u00bd + \u00bc = \u00be'

buf.write('abcd', 0, 4, 'ascii')

console.log(buf)
console.log(buf.toString('ascii'))
console.log(str)
console.log(`${str.length} caracteres`)
console.log(Buffer.byteLength(str, 'utf8') + 'bytes')
console.log(buf2.length)


for ( var i = 0; i < buf2.length; i++ )
{
	// 97 en ASCII es a
	buf2[i] = i + 97
}

console.log( buf2.toString('ascii') )