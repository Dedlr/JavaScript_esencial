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

function printName({name}){
    console.log(name.toUpperCase())
}


printName(sacha)
printName(dario)
printName({name: 'Pepito'})