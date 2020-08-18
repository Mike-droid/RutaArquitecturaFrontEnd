//! 2 tipos de funciones: Declarativas y de Expresión

function miFuncion() { //! Declarativa
    return 3;
}

miFuncion();

let miVariable = function (a,b) { //! Expresiva y anónima
    return a + b;
}

miVariable(); //! mando a llamar a la variable como si fuera 