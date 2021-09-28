
//OBJETOS QUE TIENEN PARES DE VALORES
let persona = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 144.5,
        coor: -118.3
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90257',
        ubicacion: 'Malibu, california'
    },
    'ultima pelicula': 'Infinity War'
}

// console.log(persona);
// console.log('Nombre: ', persona.nombre);


console.log('Trajes :', persona.trajes.length)
console.log('Ultimo Traje :', persona.trajes[persona.trajes.length -1])

const x = 'vivo'
console.log('Vivo', persona[x]);

console.log('Ultima Pelicula: ', persona['ultima pelicula']);
//*********************************************************************** */

// MAS DETALLES

// persona.edad = null
// console.log(persona);

//BORRAR UNA PROPIEDAD DEL OBJETO
delete persona.edad


