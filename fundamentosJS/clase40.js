function crearSaludo(finalDeFrase) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('güey')
const saludoColombiano = crearSaludo('parce')

saludoArgentino('Sacha') //!Hola Sacha che
saludoMexicano('Miguel') //!Hola Miguel güey
saludoColombiano('Freddy') //! Hola Freddy parce