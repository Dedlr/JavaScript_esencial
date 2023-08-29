class Persona{
    constructor(nombre,apellido,altura){
        this.nombre=nombre
        this.apellido=apellido
        this.altura=altura
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if (fn){
            fn(this.nombre,this.apellido,false)
        }
    }

    soyAlto(){
        return this.altura>1.80
    }
}


class Desarrollador extends Persona {
    
    constructor (nombre,apellido,altura){
    super(nombre,apellido,altura)
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
        if (fn){
            fn(this.nombre,this.apellido,true)
        }
    }
}


function responderSaludo(nombre, apellido,esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev){
        console.log('Eres desarrollador !!!!')
    }
}



diana=new Persona('Diana', 'de Leon',1.85)
fernando=new Desarrollador('Fernando', 'de Leon',1.85)

diana.saludar(responderSaludo)
fernando.saludar(responderSaludo)