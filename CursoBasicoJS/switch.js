//! 1 = piedra , 2 = papel , 3=tijera

function jugar() {
    let azar = Math.ceil(Math.random()*3); //!Genera un número aletorio entre 1 y 3

    let cosa = prompt("Escribe piedra o papel o tijera");

    switch (cosa) {
        case "piedra":
            if (azar==1) {
                console.log("Empate [Piedra y Piedra]");
            }else if(azar==2){
                console.log("Perdiste [Piedra vs Papel]");
            }else{
                console.log("Ganaste [Piedra vs Tijeras]");
            }
            break;

        case "papel":
            if (azar==1) {
                console.log("Ganaste [Papel vs Piedra]");
            }else if(azar==2){
                console.log("Empate [Papel vs Papel]");
            }else{
                console.log("Perdiste [Papel vs Tijeras]");
            }
            break;

        case "tijera":
            if (azar==1) {
                console.log("Perdiste [Tijeras vs Piedra]");
            }else if(azar==2){
                console.log("Ganaste [Tijeras vs Papel]");
            }else{
                console.log("Empate [Tijeras vs Tijeras]");
            }
            break;
    
        default:
            console.log("¿Qué haces aquí?");
            break;
    }
}