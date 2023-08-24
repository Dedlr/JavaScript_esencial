var signo = prompt('Cual es tu signo?')


switch (signo){
    case 'Aries':
        console.log('Durante esta jornada podría sentirse desestabilizado emocionalmente a causa de los inconvenientes que sufrió. Tendrá muchas dudas a la hora de tomar decisiones.')
        break

    case 'Tauro':
        console.log('Cuando intente enfrentar una situación deberá hacer uso de la honestidad y la serenidad. De esta forma, le permitirá lograr todo lo que desee para su vida.')
        break

    case 'Geminis':
    case 'Géminis':
        console.log('Intente romper su orgullo y permítase oír las sugerencias de sus amigos aunque le cueste. Con ellos encontrará la solución para cada uno de los conflictos que deba afrontar.')
        break

    case 'Cancer':
        console.log('Intente organizar mejor sus actividades diarias. Sepa que el desorden y la falta de objetividad podrían ser los obstáculos en el éxito de sus proyectos.')
        break

    case 'Leo':
        console.log('Tiempo óptimo para ordenar los intereses personales y animarse a ponerlos en práctica. Intente vencer todos los miedos y las dependencias que tiene por naturaleza.')
        break

    default:
        console.log('No es un signo sodiacal valido')
        break
    }