let edad = 21;
edad+=1;

let peso = 69;

//peso -= 2;

let sandwich = 1;
//peso += sandwich;

let deporte = 3;
peso -= deporte;

let precioVino = 200.3;

let total = Math.round(precioVino * 100 * 3)/100; //!Así JS va a redondear sin importar los decimales
let totalStr = total.toFixed(2); //!Sólo toma 2 decimales después del punto
    totalStr = parseFloat(totalStr); //! Convierte de String a parseFloat

let pizza = 8;
let persona = 2;
let porcionesPersona = pizza / persona;