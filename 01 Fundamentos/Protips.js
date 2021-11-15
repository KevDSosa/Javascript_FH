

// function crearPersona(nombre, apellido){
//     return {
//         nombre,
//         apellido
//     }
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido})

const persona2 = crearPersona('Kevin', 'Sosa')

function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (...args) =>{
        // console.log(args);
        return args
}

// const argumentos = imprimeArgumentos2(10, true, false, 'hola')

const [edad, casado, amante, saludo] = imprimeArgumentos2(10, true, false, 'hola')

console.log({edad, casado, amante, saludo});

const {apellido: nuevoApellido} = crearPersona ('Katherine', 'Escobar')
console.log(nuevoApellido);

// ******************************************************


const katy={
    nombre: 'Katherine',
    codeName: 'niña',
    vivo: true,
    edad: 26,
    trajes: ['bailarina', 'cheft', 'Guerrera'],
};

const imprimePropiedades = ({nombre, codeName, vivo, edad = 25, trajes}) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});

}

imprimePropiedades(katy)