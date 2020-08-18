class Persona{
    constructor(nombre,apellido,altura) {
        this.nombre=nombre; //!atributo, parámetro
        this.apellido=apellido;
        this.altura=altura;
    }
    
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }

    soyAlto(){
        return this.altura >= 1.8;
    }

}

class Desarrollador extends Persona {
    constructor(nombre,apellido,altura) {
        super(nombre,apellido,altura);
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
    }
}

//* ES BUENA PRÁCTICA Y RECOMENDABLE PONER TODOS LOS PROTOTIPOS PRIMERO 

/* let miguel = new Persona('Miguel','Reyes',1.72);

miguel.saludar();

let katherine = new Persona('Katherine','Frausto',1.60);

katherine.saludar();

let pedro = new Persona('Pedro','Reyes',1.80); */


