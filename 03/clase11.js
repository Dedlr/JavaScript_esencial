var sacha={
    nombre:'Sacha',
    apellido:'Lifszyc',
    edad:28,
    ingeniero:true,
    cocinero:false,
    cantante:false,
    dj:false,
    guitarrista:false,
    drone:true
}

var juan={
    nombre:'Juan',
    apellido:'LOpez',
    edad:14,
    ingeniero:false,
    cocinero:false,
    cantante:false,
    dj:true,
    guitarrista:false,
    drone:true
}


function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)

    if(persona.ingeniero){
        console.log("Ingeniero")
    } else {
        console.log("No es Ingeniero")
    }
    if(persona.cocinero){
        console.log("Cocinero")
    }else {
        console.log("No es Cocinero")
    }
    if(persona.cantante){
        console.log("Cantante")
    }else {
        console.log("No es Cantante")
    }
    if(persona.dj){
        console.log("Dj")
    }else {
        console.log("No es Dj")
    }
    if(persona.guitarrista){
        console.log("Guitarrista")
    }else {
        console.log("No es Guitarrista")
    }
    if(persona.drone){
        console.log("Drone")
    }else {
        console.log("No es Drone")
    }
}


const MAYORIA_DE_EDAD =18


function esMayordeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function MayorDeEdad(persona){
    if (esMayordeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}
