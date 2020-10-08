//Carrera entre dos corredores, 100 pasos
class Dado {
    
    lanzarDado(){
        let cara = Math.ceil(Math.random() *6);
        if(cara == 1) {
            return 3
        } else if (cara == 2 || cara == 3){
            return 1
        } else if (cara == 4 || cara == 5 || cara == 6){
            return 2
        }
    }
}

class Corredor {
    constructor(nombre){
        this.nombre= nombre
        this.posicion= 0
        this.dado = new Dado
    }

    correr(){
        return this.posicion += this.dado.lanzarDado();
    }
}

let Runner1 = new Corredor ('Speedy')
let Runner2 = new Corredor ('Fasto')

while (Runner1.posicion < 100 && Runner2.posicion < 100) {
    Runner1.correr();
    Runner2.correr();
    
    console.log(`Posicion del C1: ${Runner1.posicion} - Posicion del C2: ${Runner2.posicion}`)
}
    
if (Runner1.posicion >= 100 && Runner2.posicion >= 100 ) {
    console.log("\nEmpataron!")
} else if (Runner1.posicion >= 100){
    console.log(`\nGanó C1 "${Runner1.nombre}"!`)
} else if (Runner2.posicion >= 100){
    console.log(`\nGanó C2 "${Runner2.nombre}"!`)
}