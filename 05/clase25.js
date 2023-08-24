class Persona{
    constructor(nombre,apellido,altura){
        this.nombre=nombre
        this.apellido=apellido
        this.altura=altura
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        return this.altura>1.80
    }
}


class Desarrollador extends Persona {
    
    constructor (nombre,apellido,altura){
    super(nombre,apellido,altura)
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }
}




//var diana=new Persona('Diana', 'de Leon',1.85)
//var fernando=new Desarrollador('Fernando', 'de Leon',1.85)