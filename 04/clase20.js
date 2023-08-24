var juan={
    nombre:'Juan',
    apellido:'Barrios',
    altura:1.75,
    cantidadLibros:120
}
var maria={
    nombre:'Maria',
    apellido:'Juarez',
    altura:1.50,
    cantidadLibros:115
}
var fernando={
    nombre:'Fernando',
    apellido:'Orozco',
    altura:1.90,
    cantidadLibros:75
}
var luis={
    nombre:'Luis',
    apellido:'Lopez',
    altura:1.70,
    cantidadLibros:100
}
var jose={
    nombre:'Jose',
    apellido:'Ochoa',
    altura:1.84,
    cantidadLibros:95
}
var carol={
    nombre:'Carol',
    apellido:'Fuentes',
    altura:1.60,
    cantidadLibros:150
}

const esAlta=({altura})=>altura >1.8


var personas=[juan,maria,fernando,luis,jose,carol]

var personasAltas=personas.filter(esAlta)

console.log(personasAltas)

const pasarAlturaCms=persona=>({
        ...persona,
        altura: persona.altura*100
})

var personasCms=personas.map(pasarAlturaCms)

const reducer =(acum,{cantidadLibros})=>acum+cantidadLibros


var totalLibros=personas.reduce(reducer,0)

console.log(`EL total de libros por todos es de ${totalLibros}`)