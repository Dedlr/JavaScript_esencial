function Persona(nombre,apellido,altura){
    this.nombre=nombre
    this.apellido=apellido
    this.altura=altura
}

Persona.prototype.saludar= function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto= function(){
    if(this.altura>1.80){
        console.log(`Si eres alto, mides ${this.altura}`)
    }else{
        console.log(`No eres suficientemente alto`)
    }
    
}


var diana=new Persona('Diana', 'de Leon',1.85)
var fernando=new Persona('Fernando', 'de Leon',1.85)