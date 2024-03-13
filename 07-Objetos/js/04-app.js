const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,

}

// const nombre = producto.nombre;
// console.log(nombre);

// Destructiring
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
