const moneyBox = (coins) =>{
    var saveCoins = 0
    saveCoins += coins
    console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(5)
moneyBox(10)

//* Hagmos lo de arriba pero ahora con la estructura de un closure
const moneyBox = () =>{
    var saveCoins = 0
    const countCoins = (coins) =>{
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}

let myMoneyBox = moneyBox()

myMoneyBox(4)
myMoneyBox(10)

//* Otro ejemplo:
const papa = () =>{
    var cantidadDeHijos = 0;
    const crearEngendro = (nuevoEngendro) =>{
        cantidadDeHijos += nuevoEngendro;
        console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
    }
    return crearEngendro;
}

let traigamosHijosAlMundo = papa();
traigamosHijosAlMundo(1)  //* cantidad de engendritos = 1
traigamosHijosAlMundo(1)  //* cantidad de engendritos = 2
traigamosHijosAlMundo(1)  //* cantidad de engendritos = 3