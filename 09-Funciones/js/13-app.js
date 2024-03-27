// Arrow Functions en el reproductor de musica

const reproductor = {
    reproducir: (id) =>  console.log(`Reproduciendo canción con el id ${id}`),
            
    pausar: pausar =>  console.log("pausando...."),

    borrar: (id) =>   console.log(`Borrando canción.... ${id}`),
       
    crearplaylist: nombre => console.log("Creando Playlist...."),
        
    producirplaylist: (nombre) => console.log("Produciendo Playlist..."),

    
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = "Enter BlackPink";
reproductor.obtenerCancion;
    

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar();
reproductor.borrar(30)
reproductor.crearplaylist("BlackPink");
reproductor.producirplaylist("Pink Venom");