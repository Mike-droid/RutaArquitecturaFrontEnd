//! 1 = piedra , 2 = papel , 3=tijera

function jugar(objeto) {
    let azar = Math.ceil(Math.random()*3); //!Genera un número aletorio entre 1 y 3

    if (objeto==="piedra" && azar==1) {
        console.log("Empate [Piedra y Piedra]");
    }else if(objeto==="piedra" && azar==2){
        console.log("Perdiste [Piedra vs Papel]");
    }else if(objeto==="piedra" && azar==3){
        console.log("Ganaste [Piedra vs Tijeras]");
    }

    else if(objeto==="papel" && azar==1){
        console.log("Ganaste [Papel vs Piedra]");
    }else if(objeto==="papel" && azar==2){
        console.log("Empate [Papel vs Papel]");
    }else if(objeto==="papel" && azar==3){
        console.log("Perdiste [Papel vs Tijeras]");
    }

    else if(objeto==="tijera" && azar==1){
        console.log("Perdiste [Tijeras vs Piedra]");
    }else if(objeto==="tijera" && azar==2){
        console.log("Ganaste [Tijeras vs Papel]");
    }else if(objeto==="tijera" && azar==3){
        console.log("Empate [Tijeras vs Tijeras]");
    }
}