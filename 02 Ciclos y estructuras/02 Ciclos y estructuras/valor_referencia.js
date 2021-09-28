/* 
 primitivos se pasan por valor

 let a = 10, b= 10
 console.log({a, b});

 los objetos son pasados por referencia

 let juan = {nombre: 'Juan'};
 let ana = juan
 ana.nombre = 'Ana'

 console.log({juan, ana}); */

// ****************************************
const cambiaNombre = (persona) => {
    persona.nombre = 'Tony'
    return persona
}

let peter = {nombre: 'Peter'}
let tony = cambiaNombre(peter)
console.log({peter, tony});

// ************************************
const cambiaNombre2 = ({...persona}) => {
    persona.nombre = 'Tony'
    return persona
}

let peter2 = {nombre: 'Peter'}
let tony2 = cambiaNombre2(peter2)
console.log({peter2, tony2});
// *****************************************

const frutas = ['Manzana', 'Fresa', 'Uvas']

const otrasFrutas = [...frutas]
const masFrutas = [...frutas]

otrasFrutas.push('Pera')
masFrutas.push('Mango')

console.table({frutas, otrasFrutas, masFrutas});
// *********************************************

const muebles = ['Silla', 'Mesa', 'Sofa']

console.time('slice')
const otrosMuebles = muebles.slice()
console.timeEnd('slice')

// SPREAD ES MEJOR POR UNA CANTIDAD DE MINIMA DE 0.01s mas rapido
console.time('spread')
const masMuebles = [...muebles]
console.timeEnd('spread')


otrosMuebles.push('Ropero')
masMuebles.push('SillaGamer')

console.table({muebles, masMuebles, otrosMuebles})