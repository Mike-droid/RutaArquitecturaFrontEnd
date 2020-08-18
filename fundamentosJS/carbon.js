const arreglo = [1,2,3,4];
const nuevoArreglo = arreglo.map(numero => numero * 2); //!Recorre cada uno de los números y cada uno lo multiplica por 2

console.table(nuevoArreglo); //!El resultado final es [2,4,6,8]

//! OJO: arreglo y Nuevo Arreglo son 2 objetos distintos, la función de arriba no modifica el valor original de nuestro primer arreglo