/*
https://nodejs.org/api/process.html#process_process_stdin
https://nodejs.org/api/process.html#process_process_stdout
*/

'use strict'

let stdin = process.stdin //? La propiedad process.stdin es una interfaz de programación de aplicaciones incorporada del módulo de proceso que escucha la entrada del usuario. La propiedad stdin del objeto de proceso es un flujo legible. Utiliza la función on () para escuchar el evento.
let	stdout = process.stdout
let	person = {
		name : null,
		age : 0
	}

function saveAge(age)
{
	person.age = age

	if( person.age >= 18 )
	{
		stdout.write( person.name + ' es mayor de edad, tiene ' + person.age + ' años\n' )
	}
	else
	{
		stdout.write( person.name + ' es menor de edad, tiene ' + person.age + ' años\n' )
	}

	process.exit()
}

function saveName(name)
{
	person.name = name

	// Vuelvo a preguntar
	let question = 'Hola ' + person.name + ' ¿Cuántos años tienes?'
	
	quiz(question, saveAge)
}

function quiz(question, callback)
{
	stdin.resume() //? Me permite leer lo que el usuario escriba en la terminal de comandos
	stdout.write( question + ': ' )
	
	stdin.once('data', function (res){
		callback( res.toString().trim() )
	})
}

stdin.setEncoding('utf8')
quiz('¿Cómo te llamas?', saveName)