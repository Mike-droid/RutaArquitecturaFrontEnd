let productos = [
    {nombre: "bici",costo: 3000},
    {nombre: "TV", costo:2500},
    {nombre:"PS4",costo:7000},
    {nombre:"libro",costo:50},
    {nombre:"laptop",costo:5000},
    {nombre:"teclado",costo:300}
];

let encuetraProducto = productos.find(function(producto){
    return producto.nombre === "PS4";
});

//! foreach chido
productos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//! some regresa true o false
let articulosBaratos = productos.some(function(articulo){
    return articulo.costo <= 1000;
});