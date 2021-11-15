

let a = 9
if(a > 10)/*Solo valores booleanos*/{
    console.log('a, es mayor o igual que 10')
} else{
    console.log('a, es menor a 10');
}
console.log('Fin del programa')


const hoy = new Date()
console.log(hoy);

let dia = hoy.getDay()
console.log({dia});

if(dia === 0){
    console.log('Domingo');
}else if(dia ===1){
    console.log('Lunes');
    // if(dia === 1){
    //     console.log('Lunes');
    // }else{
    //     console.log('Hoy no es Lunes');
    // }
} else if(dia===2){
    console.log('Martes');
}else{
    console.log('No es lunes martes ni domingo');
}

dia = 4
const diaSemana = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
}

const diaSemana2 = {
    0: ()=> 'domingo - 0',
    1: ()=> 'lunes - 1',
    2: ()=> 'martes - 2',
    3: ()=> 'miercoles - 3',
    4: ()=> 'jueves - 4',
    5: ()=> 'viernes - 5',
    6: ()=> 'sabado - 6',
}

const diaSemana3 = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', ];



console.table({diaSemana});
console.log(diaSemana[dia] || 'Dia no definido');
console.log(diaSemana2[dia]());
console.log(diaSemana3[dia]);
