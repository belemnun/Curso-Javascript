// Agregar Nuevos valores a un Array

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

meses[0] = "Nuevo Mes";
meses[10] = "Ultimo Mes";

console.table(meses);

// Destructuring

const { nombre, precio, disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
