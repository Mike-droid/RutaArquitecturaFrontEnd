const anotherFunction = () =>{
    for (let i = 0; i < 10; i++) {
        setTimeout(() =>{
            console.log(i)
        }, 1000)
    }
}

anotherFunction()

/*
!Te lo resumo así nomás: En un loop nunca ocupes var, siempre utiliza let para valores que
!irán cambiando dentro de la ejecución del scope.
*/