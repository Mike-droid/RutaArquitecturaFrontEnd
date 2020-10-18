const helloWorld = () =>{
    const hello = 'Hello World'
    console.log(hello)
}

helloWorld()
console.log(hello)

//--------------------------------------------------------------------------------------------

var scope = "I am global"

const functionScope = () =>{
    //! Ámbito léxico, no estamos trabajando con la variable global, sino con la local
    var scope = "I am just a local"
    const func = () =>{
        return scope
    }
    console.log(func())
}

functionScope()
console.log(scope) //! <---- No se reasignó, la función trabajó con su propia variable