
// OPCION 1
const elMayor = (a, b) => {
    return (a>b) ? a : b
}
// OPCION 2 (REDUCIDA)
const elMayor2 = (a, b) => (a > b) ? a : b;
console.log(elMayor(15, 20));
console.log(elMayor2(27, 29));



const amigo = false
const amigosArr = [
    'peter',
    'tony',
    'dr. strange',
    amigo ? 'thor' : 'loki'
    // (() => 'nick fury')() funcion anonima autoinvocada
]
console.log(amigosArr);

const puntaje = 85 
const nota =    puntaje >=95 ? 'A+' :
                puntaje >=85 ? 'A'  :
                puntaje >=75 ? 'B+' :
                puntaje >=65 ? 'B'  :
                puntaje >=60 ? 'C+' : 'F';

console.log({puntaje, nota});