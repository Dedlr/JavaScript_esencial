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
    altura:1.80
}
var luis={
    nombre:'Luis',
    apellido:'Lopez',
    altura:1.70
}
var jose={
    nombre:'Jose',
    apellido:'Ochoa',
    altura:1.68
}
var carol={
    nombre:'Carol',
    apellido:'Fuentes',
    altura:1.60
}

var personas=[juan,maria,fernando,luis,jose,carol]

for(var i=0;i<personas.length;i++){
    var persona=personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}