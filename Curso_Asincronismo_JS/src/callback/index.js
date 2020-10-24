/*function suma(num1,num2) {
    return num1+num2
}

function calc(num1,num2,callback) {
    return callback(num1,num2)
}

console.log(calc(6,2,suma))*/

function date(callback) { //* Es estándar llamar callback al parametro que será un callback
    console.log(`${new Date} SOY LA FUNCIÓN 1`) //* Imprime la fecha de hoy
    setTimeout(function(){
        let date = new Date
        callback(date)
    }, 3000)
}

function printDate(dateNow) {
    console.log(`${dateNow} SOY LA FUNCIÓN 2 DESPUÉS DE 3 SEGUNDOS`) //*Imprime la fecha de hoy después de 3 segundos
}

date(printDate)