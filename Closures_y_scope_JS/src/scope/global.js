var hello = 'Hello'
var hello = 'Hello +' //!Mala práctica
let world = 'world'
let world = 'world +' //!No puedes reasignar valores en let ni const
const helloWorld = 'Hello world'

const anotherFunction = ()=>{
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction()

const helloWorld = () => {
    globalVar = 'Im global' //!Crear una variable global dentro de una función es MALA práctica
    //!ademas de que no estamos usando let, var o const
}

helloWorld()
console.log(globalVar)

const anotherFunction = () =>{
    var localVar = globalVar = 'Im global' //!doble asignación de variable también es mala práctica
}
anotherFunction()
console.log(globalVar)