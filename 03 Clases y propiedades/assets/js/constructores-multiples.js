

class Persona{

    static nObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais)
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const kev = {
    nombre: 'kevin',
    apellido: 'sosa',
    pais: 'canada'
}

const nombre1 = 'Katy', apellido1 = 'Escobar', pais1 = 'Honduras';
const personal = new Persona(nombre1, apellido1, pais1)

const persona2 = Persona.nObjeto(kev)

personal.getInfo();
persona2.getInfo();