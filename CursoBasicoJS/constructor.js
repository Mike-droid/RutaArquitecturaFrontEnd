function carros(marca, modelo, anio) {
    this.marca=marca;
    this.modelo=modelo;
    this.anio=anio;
}

let marca = ["Telsa","Nissan","BMW"];
let modelo = ["X","Sentra","vocho"];
let anio = [2020,2017,2012];


for (let index = 0; index < marca.length; index++) {
    let carrito = new carros(marca[index],modelo[index],anio[index]);
    console.log(carrito);
}