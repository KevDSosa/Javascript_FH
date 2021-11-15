
// Propiedades, gets y metodos estaticos

// TODO: Definicion de una clase
class Persona{


    // Para saber cuantas instancias tengo de mi clase
    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }


    static mensaje(){
        console.log(this.nombre);
        console.log('Hola soy un metodo estático');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
    constructor(nombre='Sin nombre', codigo='Sin codigo', frase='Sin Frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){ //Solo recibe un argumento normalmente
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    // METODOS
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es: ${this.codigo}`);
    }
    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter', 'Spiderman', 'Yo soy tu amigable vecino spiderman');
const ironman = new Persona('Tony', 'Ironman', 'Yo soy ironman');
const ironman2 = new Persona('Stark', 'Ironman2', 'Yo soy ironman2');



// spiderman.quienSoy();
ironman.miFrase();
// spiderman.setComidaFavorita = 'Pastel de cereza de la tía May'
// spiderman.nemesis = 'Duende verde';                         

// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);

// Persona._conteo = 2
console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);

Persona.mensaje();