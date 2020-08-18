function Persona(nombre,apellido,altura) {
    this.nombre=nombre; //!atributo, parámetro
    this.apellido=apellido;
    this.altura=altura;
}

Persona.prototype.saludar = function () { //! Dentro del prototipo de persona, va a existir un atributo que 
                                            //!será una función
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function () {
    return this.altura >= 1.8;
}

//* ES BUENA PRÁCTICA Y RECOMENDABLE PONER TODOS LOS PROTOTIPOS PRIMERO 

let miguel = new Persona('Miguel','Reyes',1.72);

miguel.saludar();

let katherine = new Persona('Katherine','Frausto',1.60);

katherine.saludar();

let pedro = new Persona('Pedro','Reyes',1.80);


