a = 2
var a
console.log(a) //!Lo que hace hoisting es 'elevar' las variables, primero las declara y después las asigna
//-----------------------------------------------------------
console.log(a)
var a = 2
//!JS sólo utiliza el hoisting en las declaraciones y no en las inicializaciones

//-----------------------------------------------------------

nameOfDog('Elmo')

function nameOfDog(name) {
    console.log(name)
}