// Añadir Funciones en un objeto

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log("pausando....")
    },
    borrar: function(id) {
        console.log(`Borrando canción.... ${id}`)
    },
    crearplaylist: function(nombre) {
        console.log("Creando Playlist....")
    },
    producirplaylist: function(nombre) {
        console.log("Produciendo Playlist...")
    }
}
reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar();
reproductor.borrar(30)
reproductor.crearplaylist("BlackPink");
reproductor.producirplaylist("Pink Venom");