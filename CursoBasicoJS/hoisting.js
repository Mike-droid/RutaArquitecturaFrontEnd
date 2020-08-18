console.log(miNombre);

let miNombre = "Miguel";

//! Si hacemos lo de arriba tendremos el resultado de undefined, esto será a causa del hoisting

hey();

function hey() {
    console.log("Hola " + miNombre);
}

let miNombre = "Miguel";

//! Las variables deben declararse antes que las funciones
//! Las funciones deben declararse antes del código