let nombre = 'Miguel', apellido = 'Reyes';
/* let edad = 21;
console.log('¡Hola ' + nombre + ' ' + apellido + '!');
console.log('Tengo ' + edad + ' años');

let peso = 70; */

let nombreMayusculas = nombre.toUpperCase();
let apellidoMinisculas = apellido.toLowerCase();

let primeraLetra = nombre.charAt(0);
let cantidadLetras = nombre.length;

let nombreCompleto = `${nombre} ${apellido.toUpperCase()}`; //Interpolación de variables

let str = nombre.substr(0,6);

let ultimaLetra = nombre.charAt(cantidadLetras.length-1);