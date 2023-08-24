var sacha={
    name:'Sacha',
    apellido:'Lifszyc',
    edad:28
}


var dario={
    name:'Dario',
    apellido:'Keffeel',
    edad:24
}

function printName(persona){
    var { name }=persona
    var {edad}=persona
    console.log('Hola soy ' + name.toUpperCase()+ ' y tengo '+ edad + ' años de edad')

}

function birthday(persona){
    persona.edad +=1
}

function birthday2(edad){
    edad +=1
}


printName(sacha)

