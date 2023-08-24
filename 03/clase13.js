var diana={
    nombre:'Diana',
    apellidos:'Esperanza',
    edad:24,
    peso:75
}

console.log(`Al inicio del anio ${diana.nombre} pesa ${diana.peso}kg`)

const INCREMENTO =0.20

const aumentarPeso= persona => persona.peso += INCREMENTO
const adelgazar= persona => persona.peso -= INCREMENTO


for (var i=0; i<=365;i++){
        var random= Math.random()*1

        if (random <0.25){
                aumentarPeso(diana)
        }else if (random <0.50){
                adelgazar(diana)
        }
}

console.log(`Al final del anio ${diana.nombre} pesa ${diana.peso}kg`)