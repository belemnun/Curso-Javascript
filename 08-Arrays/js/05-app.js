// Añadir nuevos elementos al fin o inicio de un Array

const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

// . Push agrega al final de un arreglo

carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

carrito.unshift(producto3);

console.table(carrito);
