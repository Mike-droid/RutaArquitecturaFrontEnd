/* console.log('a');
setTimeout(() => {
    console.log('b');
}, 2000); //!2000 milisegundos = 2 segundos
console.log('c'); */

//* En este caso, primero se imprime a, luego c y cuando hayan pasado 2 segundos, se imprimirá b

//*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* console.log('a');
setTimeout(() => {
    console.log('b');
}, 0); 
console.log('c'); */

//* En este segundo caso, se imprime a,c y b, porque la función se meterá a la cola de tareas y será ejecutada
//* cuando se termine el programa principal

setTimeout(() => {
    console.log('d');
}, 2000);

for (let index = 0; index <100; index++) {
    console.log(index);
}

//*En este tercer caso, primero se ejecutará el ciclo for y hasta que termine, pasaran 2 segundos y 
//* hasta entonces saldrá impresa la letra d