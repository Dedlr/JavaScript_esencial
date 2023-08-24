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


printName(sacha)
printName(dario)
