var juan={
    nombre:'Juan',
    apellido:'Barrios',
    altura:1.75
}
var maria={
    nombre:'Maria',
    apellido:'Juarez',
    altura:1.50
}
var fernando={
    nombre:'Fernando',
    apellido:'Orozco',
    altura:1.90
}
var luis={
    nombre:'Luis',
    apellido:'Lopez',
    altura:1.70
}
var jose={
    nombre:'Jose',
    apellido:'Ochoa',
    altura:1.84
}
var carol={
    nombre:'Carol',
    apellido:'Fuentes',
    altura:1.60
}

const esAlta=({altura})=>altura >1.8


var personas=[juan,maria,fernando,luis,jose,carol]

var personasAltas=personas.filter(esAlta)

console.log(personasAltas)