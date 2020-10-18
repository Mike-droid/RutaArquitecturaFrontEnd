const fruits = () => {
    var fruit = 'apple'
    console.log(fruit)
}

fruits()
console.log(fruit) //! Obvio habrá un error

const anotherFunction = () =>{
    var x = 1
    var x = 2
    let y = 1
    //let y = 2 //!let no puede ser redeclarada
    y = 5 //!pero su valor puede ser reasignado
    console.log(x)
    console.log(y)
}
anotherFunction()