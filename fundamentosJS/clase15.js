let contador = 0;

const llueve = () => Math.random() < 0.25;

do {
    contador++;
} while (!llueve());


/* if (contador===1) {
    console.log(`Fui a ver si llovía ${contador} vez`);    
} else {
    console.log(`Fui a ver si llovía ${contador} veces`);
} */

let frecuencia = contador===1 ? 'vez' : 'veces';

console.log(`Fui a ver si llovía ${contador} ${frecuencia}`);
