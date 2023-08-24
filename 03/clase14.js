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

const comeMucho=()=>Math.random()<0.30
const realizaDeporte =()=>Math.random()<0.4

const META = diana.peso -3
var dias =0

while (diana.peso > META){
        if(comeMucho()){
                aumentarPeso(diana)
        }
        if(realizaDeporte()){
                adelgazar(diana)
        }

        dias +=1
}

console.log(`Pasaron ${dias} hasta que ${diana.nombre} adelgazo 3kg`)