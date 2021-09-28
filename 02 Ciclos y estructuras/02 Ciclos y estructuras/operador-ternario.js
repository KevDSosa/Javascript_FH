

const dia = 1 //domingo

const horaActual = 11


let horaApertura, mensaje //esta abierto, esta cerrado, hoy abrimos a las xx

// if(dia === 0 || dia === 6){
// if([0,6].includes(dia)){
//     console.log('Fin de semana');
//     horaApertura = 9
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11
// }
// SE REDUCE A:

horaApertura = ([0,6].includes(dia)) ? 9 : 11

// if(horaActual >= horaApertura){
//     mensaje = 'Está abierto'
// }else{
//     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}` //Interpolar strings
// }

const info = horaActual >= horaApertura ? mensaje ='Esta abierto' : mensaje=`Está cerrado, hoy abrimos a las ${horaApertura}`

mensaje = (horaActual >= horaApertura) ? 'Esta abierto.' : `Está cerrado, hoy abrimos a las ${horaApertura}`

console.log({horaApertura, info, mensaje });